<?php
// app/Models/Booking.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'name', 'phone', 'date', 'time', 'total_persons', 'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
}

