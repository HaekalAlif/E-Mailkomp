<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'content', 'image', 'news_category_id', 'event_date'];

    /**
     * Relasi: Berita memiliki satu kategori.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(NewsCategory::class, 'news_category_id');
    }

}
