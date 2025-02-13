<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewsCategory;
use Illuminate\Http\Request;

class NewsCategoryController extends Controller
{
    public function index()
    {
        $categories = NewsCategory::withCount('news')->get();
        return response()->json($categories);
    }


    public function news($id)
    {
        $category = NewsCategory::findOrFail($id);
        $news = $category->news()->with('category')->paginate(9);
        return response()->json($news);
    }
}
