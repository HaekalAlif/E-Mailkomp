<?php

namespace App\Http\Controllers\Api;

use App\Models\Article;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::with('category');

        // Filter by category
        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        // Search
        if ($request->has('search')) {
            $query->where(function($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
            });
        }

        // Pagination
        $articles = $query->paginate(9);
        
        return response()->json($articles);
    }

  public function show($slug) 
{
    $article = Article::with('category')->where('slug', $slug)->firstOrFail();
    
    // Clean and format content
    $content = strval($article->content);
    $content = str_replace('\\n', "\n", $content); 
    $content = preg_replace('/\n+/', "\n", $content); 
    $article->content = $content;
    
    return response()->json($article);
}
    public function byCategory($category)
    {
        $articles = Article::whereHas('category', function($query) use ($category) {
            $query->where('slug', $category);
        })->with('category')->paginate(9);

        return response()->json($articles);
    }

    public function search($query)
    {
        $articles = Article::where('title', 'like', "%{$query}%")
            ->orWhere('content', 'like', "%{$query}%")
            ->with('category')
            ->paginate(9);

        return response()->json($articles);
    }
}