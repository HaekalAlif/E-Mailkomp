<?php

namespace App\Filament\Widgets;

use App\Models\Message;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;

class LatestMessagesWidget extends BaseWidget
{
    protected static ?string $heading = 'Latest Messages';
    
    protected static ?string $pollingInterval = '15s';
    
    protected int | string | array $columnSpan = 'full';
    
    public function table(Table $table): Table
    {
        return $table
            ->query(
                Message::query()->latest()->limit(5)
            )
            ->columns([
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('email')
                    ->searchable(),
                TextColumn::make('subject')
                    ->searchable()
                    ->limit(30),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
                BadgeColumn::make('status')
                    ->colors([
                        'danger' => 'unread',
                        'success' => 'read',
                        'primary' => 'replied',
                        'gray' => 'archived',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->url(fn (Message $record): string => route('filament.admin.resources.messages.view', ['record' => $record])),
            ]);
    }
}
