<?php
// app/Http/Controllers/BookingController.php
namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'date' => 'required|date',
            'time' => 'required',
            'total_persons' => 'required|integer|min:1',
        ]);

        $booking = Booking::create([
            ...$validated,
            'user_id' => Auth::id(),
        ]);

        return response()->json(['message' => 'Booking request submitted.', 'booking' => $booking], 201);
    }

    public function userBookings()
    {
        $user = Auth::user(); // should now return the logged-in user

    if (!$user) {
        return response()->json(['message' => 'Unauthenticated'], 401);
    }

    return response()->json($user->bookings);
    }

    public function adminIndex()
    {
        return Booking::with('user')->latest()->get();
    }

    public function updateStatus(Request $request, Booking $booking)
    {
        $request->validate([
            'status' => 'required|in:confirmed,rejected',
        ]);

        $booking->update(['status' => $request->status]);

        // Optional: Notify user here (e.g., via event, broadcast, email, etc.)

        return response()->json(['message' => 'Booking status updated.']);
    }
}
