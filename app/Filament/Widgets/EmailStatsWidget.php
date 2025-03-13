<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Message;

class EmailStatsWidget extends BaseWidget
{
    protected static ?string $pollingInterval = '15s';
    
    protected int | string | array $columnSpan = 'full';
    
    protected function getStats(): array
    {
        $totalMessages = Message::count();
        $unreadCount = Message::unread()->count();
        
        // Calculate read rate
        $readRate = $totalMessages > 0
            ? round(($totalMessages - $unreadCount) / $totalMessages * 100)
            : 0;
            
        return [
            Stat::make('Total Messages', $totalMessages)
                ->description('All received messages')
                ->descriptionIcon('heroicon-m-envelope')
                ->color('primary'),
                
            Stat::make('Unread Messages', $unreadCount)
                ->description('Messages awaiting review')
                ->descriptionIcon('heroicon-m-envelope-open')
                ->color('danger'),
                
            Stat::make('Read Rate', $readRate . '%')
                ->description('Messages that have been viewed')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('secondary'),
        ];
    }
}
