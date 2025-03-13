<?php

namespace App\Filament\Resources\MessageResource\Pages;

use App\Filament\Resources\MessageResource;
use Filament\Resources\Pages\ViewRecord;
use App\Models\Message;

class ViewMessage extends ViewRecord
{
    protected static string $resource = MessageResource::class;
    
    public function getTitle(): string
    {
        return 'View Message';
    }
    
    protected function mutateFormDataBeforeFill(array $data): array
    {
        // Mark message as read when viewing it
        if ($data['status'] === 'unread') {
            Message::find($this->record->id)->markAsRead();
            $data['status'] = 'read';
            $data['read_at'] = now()->format('Y-m-d H:i:s');
        }
        
        return $data;
    }
}
