<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->string('slug')->default('temporary-slug')->after('title');
        });

        // Update existing records with unique slugs
        DB::table('articles')->get()->each(function ($article) {
            DB::table('articles')
                ->where('id', $article->id)
                ->update(['slug' => Str::slug($article->title) . '-' . $article->id]);
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->string('slug')->unique()->change();
        });
    }

    public function down()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
};
