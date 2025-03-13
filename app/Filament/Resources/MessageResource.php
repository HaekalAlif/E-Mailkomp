<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MessageResource\Pages;
use App\Filament\Resources\MessageResource\RelationManagers;
use App\Models\Message;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Support\Colors\Color;
use Filament\Forms\Components\Section;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationGroup = 'Message Management';

    protected static ?string $navigationIcon = 'heroicon-o-envelope';
    
    protected static ?string $navigationIconColor = 'primary';
    
    protected static ?string $recordTitleAttribute = 'subject';
    
    protected static ?string $modelLabel = 'Message';
    
    protected static ?string $pluralModelLabel = 'Messages';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Message Details')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Sender Name')
                            ->disabled(),
                        Forms\Components\TextInput::make('email')
                            ->email()
                            ->disabled(),
                        Forms\Components\TextInput::make('phone')
                            ->tel()
                            ->disabled(),
                        Forms\Components\TextInput::make('subject')
                            ->disabled(),
                        Forms\Components\Textarea::make('message')
                            ->disabled()
                            ->columnSpanFull(),
                        Forms\Components\Select::make('status')
                            ->options([
                                'unread' => 'Unread',
                                'read' => 'Read',
                                'replied' => 'Replied',
                                'archived' => 'Archived',
                            ])
                            ->disabled(),
                        Forms\Components\DateTimePicker::make('read_at')
                            ->disabled(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subject')
                    ->searchable()
                    ->limit(30),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\BadgeColumn::make('status')
                    ->colors([
                        'danger' => 'unread',
                        'success' => 'read',
                        'primary' => 'replied',
                        'gray' => 'archived',
                    ]),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'unread' => 'Unread',
                        'read' => 'Read',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->mutateRecordDataUsing(function (array $data): array {
                        // Mark as read when viewed if status is unread
                        if ($data['status'] === 'unread') {
                            Message::find($data['id'])->markAsRead();
                            $data['status'] = 'read';
                            $data['read_at'] = now()->format('Y-m-d H:i:s');
                        }
                        
                        return $data;
                    }),
            ])
            ->defaultSort('created_at', 'desc')
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMessages::route('/'),
            'view' => Pages\ViewMessage::route('/{record}'),
        ];
    }
}
