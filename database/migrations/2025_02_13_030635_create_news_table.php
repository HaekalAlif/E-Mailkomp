<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Judul berita
            $table->string('slug')->unique(); // Slug untuk URL
            $table->text('content'); // Isi berita
            $table->string('image')->nullable(); // Gambar berita (opsional)
            $table->foreignId('category_id')->constrained('news_categories')->onDelete('cascade'); // Relasi ke kategori berita
            $table->date('event_date'); // Tanggal kegiatan
            $table->timestamps(); // created_at & updated_at otomatis
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
