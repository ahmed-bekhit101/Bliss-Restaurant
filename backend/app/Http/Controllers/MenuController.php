<?php
namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    // 🟢 Public - List all menu items
    public function index()
    {
        return response()->json(Menu::all());
    }

    // 🔒 Admin - Add new item
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|string', // could be a URL
        ]);

        $menu = Menu::create($data);
        return response()->json($menu, 201);
    }

    // 🔒 Admin - Update item
    public function update(Request $request, $id)
    {
        $menu = Menu::findOrFail($id);

        $data = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|numeric',
            'image' => 'nullable|string',
        ]);

        $menu->update($data);
        return response()->json($menu);
    }

    // 🔒 Admin - Delete item
    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        $menu->delete();

        return response()->json(['message' => 'Menu item deleted']);
    }
}
