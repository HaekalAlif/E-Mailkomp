<?php

namespace App\Filament\Pages;

use App\Models\Message;
use App\Models\Article;
use App\Models\News;
use App\Models\Event;
use Filament\Actions\Action;
use App\Filament\Resources\MessageResource;
use App\Filament\Resources\ArticleResource;
use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Support\Colors\Color;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\HtmlString;
use Filament\Support\UI\Enums\FontWeight;
use Filament\Support\Enums\FontFamily;
use Illuminate\Contracts\View\View;
use App\Filament\Widgets\EmailStatsWidget;
use App\Filament\Widgets\LatestMessagesWidget;

class Dashboard extends BaseDashboard
{
    protected static ?string $navigationIcon = 'heroicon-o-home';
    
    protected static ?string $navigationIconColor = 'primary';
    
    protected static ?string $title = 'E-Mailkomp Dashboard';
    
    protected static ?int $navigationSort = -2;
    
    public function getWidgets(): array
    {
        return [
            EmailStatsWidget::class,
            LatestMessagesWidget::class,
        ];
    }
    
    protected function getHeaderActions(): array
    {
        return [
            Action::make('view_messages')
                ->label('View Messages')
                ->url(MessageResource::getUrl())
                ->icon('heroicon-m-envelope')
                ->color('danger'),
            Action::make('new_article')
                ->label('Create Article')
                ->url(ArticleResource::getUrl('create'))
                ->icon('heroicon-m-plus')
                ->color('secondary'),
        ];
    }
    
    public function getTitle(): string 
    {
        return 'E-Mailkomp Admin Dashboard';
    }
}
