<?php

namespace App\Http\Controllers\Api;

use App\Models\News;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Menampilkan semua berita dengan filter kategori dan pencarian.
     */
    public function index(Request $request)
    {
        $query = News::with('category');

        // Filter berdasarkan kategori (gunakan `news_category_id` yang benar)
        if ($request->has('category_id')) {
            $query->where('news_category_id', $request->category_id);
        }

        // Pencarian berdasarkan judul atau konten
        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
            });
        }

        // Pagination
        $news = $query->paginate(9);

        return response()->json($news);
    }

    /**
     * Menampilkan berita berdasarkan slug.
     */
    public function show($slug)
{
    $news = News::with('category')->where('slug', $slug)->firstOrFail();

    $news->content = html_entity_decode($news->content);

    return response()->json($news);
}


    /**
     * Menampilkan berita berdasarkan kategori.
     */
    public function byCategory($slug)
    {
        $news = News::whereHas('category', function ($query) use ($slug) {
            $query->where('slug', $slug);
        })->with('category')->paginate(9);

        return response()->json($news);
    }

    /**
     * Pencarian berita berdasarkan judul atau konten.
     */
    public function search(Request $request)
    {
        $query = $request->input('query');

        $news = News::where('title', 'like', "%{$query}%")
            ->orWhere('content', 'like', "%{$query}%")
            ->with('category')
            ->paginate(9);

        return response()->json($news);
    }
}
