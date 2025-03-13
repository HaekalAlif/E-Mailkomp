<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->brandName('E-Mailkomp')
            ->colors([
                'primary' => Color::hex('#ED8200'),   // Orange as primary color
                'secondary' => Color::hex('#1C073F'), // Purple 
                'danger' => Color::hex('#056BF1'),    // Blue moved to danger
                'warning' => Color::hex('#ED8200'),   // Orange
                'success' => Color::hex('#1F39D4'),   // Indigo
                'info' => Color::hex('#1F39D4'),      // Indigo
                'gray' => Color::hex('#170036'),      // Dark
            ])
            ->darkMode(true) // Keep dark mode enabled
            ->theme('app')
            ->navigationGroups(['Message Management', 'Content Management', 'Settings'])
            ->topNavigation(false)                   
            ->sidebarCollapsibleOnDesktop(true)      // Allow sidebar to be collapsed
            ->sidebarWidth('260px')                  // Slightly wider sidebar
            ->brandLogo(fn () => view('filament.logo'))
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                \App\Filament\Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
