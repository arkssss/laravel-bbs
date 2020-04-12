<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePostCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postCategories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->index()->comment('类别明');
            $table->text('description')->comment('类别描述');
            $table->integer('post_count')->default(0)->comment('该类别的帖子数量');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('postCategories');
    }
}
