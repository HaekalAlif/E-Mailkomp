<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EventResource\Pages;
use App\Models\Event;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TextArea;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\Select;

class EventResource extends Resource
{
    protected static ?string $model = Event::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Title')
                    ->required(),
                DatePicker::make('date')
                    ->label('Event Date')
                    ->required(),
                TextInput::make('location')
                    ->label('Location')
                    ->required(),
                TextArea::make('description')
                    ->label('Description')
                    ->required(),
                FileUpload::make('image')
                    ->label('Event Image')
                    ->disk('public')
                    ->directory('EventImages')
                    ->visibility('public')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Title'),
                TextColumn::make('date')
                    ->label('Event Date')
                    ->date(),
                TextColumn::make('location')
                    ->label('Location'),
                TextColumn::make('description')
                    ->label('Description')
                    ->limit(50),
                ImageColumn::make('image')
                ->label('Gambar')
                ->disk('public')
                ->getStateUsing(fn($record) => asset('storage/' . $record->image)) 
                ->width(50)
                ->height(50),

            ])
            ->filters([
                // You can add filters here if necessary
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            // If there are any relations to display
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvents::route('/'),
            'create' => Pages\CreateEvent::route('/create'),
            'edit' => Pages\EditEvent::route('/{record}/edit'),
        ];
    }
}
