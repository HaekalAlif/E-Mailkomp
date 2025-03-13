<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'message',
        'subject',
        'phone',
        'status',
        'read_at',
    ];

    protected $casts = [
        'read_at' => 'datetime',
    ];

    public function markAsRead()
    {
        $this->status = 'read';
        $this->read_at = now();
        $this->save();
    }

    public function markAsReplied()
    {
        $this->status = 'replied';
        $this->save();
    }
    
    public function markAsArchived()
    {
        $this->status = 'archived';
        $this->save();
    }

    public function scopeUnread($query)
    {
        return $query->where('status', 'unread');
    }
}
