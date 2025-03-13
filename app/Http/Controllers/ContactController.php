<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validate the request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
            'phone' => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // Save to database
            Message::create([
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'subject' => $request->subject ?? null,
                'phone' => $request->phone ?? null,
                'status' => 'unread',
            ]);

            return response()->json(['message' => 'Message sent successfully'], 200);
        } catch (\Exception $e) {
            // Log the error
            \Log::error('Failed to save contact message: ' . $e->getMessage());
            
            return response()->json(['message' => 'Failed to send message'], 500);
        }
    }
}
