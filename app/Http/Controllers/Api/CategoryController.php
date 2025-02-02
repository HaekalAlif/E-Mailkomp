<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::withCount('articles')->get();
        return response()->json($categories);
    }

    public function articles($id)
    {
        $category = Category::findOrFail($id);
        $articles = $category->articles()->with('category')->paginate(9);
        return response()->json($articles);
    }
}