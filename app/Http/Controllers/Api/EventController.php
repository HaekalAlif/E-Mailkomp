<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    // Menampilkan halaman events
    public function index()
    {
        $events = Event::all(); // Ambil semua data acara dari database
        return response()->json($events);
    }

    // Menampilkan detail acara berdasarkan ID
    public function show($id)
    {
        $event = Event::findOrFail($id); // Cari acara berdasarkan ID
        return response()->json($event);
    }
}
