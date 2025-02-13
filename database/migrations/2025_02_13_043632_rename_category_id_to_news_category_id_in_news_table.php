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
        Schema::table('news', function (Blueprint $table) {
            $table->renameColumn('category_id', 'news_category_id');
        });
    }

    public function down()
    {
        Schema::table('news', function (Blueprint $table) {
            $table->renameColumn('news_category_id', 'category_id');
        });
    }
};
