<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ArticleController; 
use App\Http\Controllers\Api\EventController;
use Illuminate\Support\Facades\Route;

// Articles
Route::prefix('articles')->group(function () {
    Route::get('/', [ArticleController::class, 'index']); // List all articles with filters
    Route::get('/{slug}', [ArticleController::class, 'show']); // Get single article
    Route::get('/category/{category}', [ArticleController::class, 'byCategory']); // Get articles by category
    Route::get('/search/{query}', [ArticleController::class, 'search']); // Search articles
});

// Categories
Route::prefix('categories')->group(function () {
    Route::get('/', [CategoryController::class, 'index']); // List all categories
    Route::get('/{id}/articles', [CategoryController::class, 'articles']); // Get articles for a category
});

// Events
Route::get('/events', [EventController::class, 'index']); // Untuk mendapatkan semua event
Route::get('/events/{id}', [EventController::class, 'show']); // Untuk mendapatkan event berdasarkan ID
