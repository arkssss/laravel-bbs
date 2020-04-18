<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePosts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id')->index();
            $table->timestamps();
            $table->string('title')->comment('post标题');
            $table->text('body')->comment('post内容');
            $table->integer('u_id')->unsigned()->comment('发表post用户');
            $table->integer('category_id')->unsigned()->comment('post类别');
            $table->integer('reply_count')->unsigned()->default(0)->comment('回复人数');
            $table->integer('view_count')->unsigned()->default(0)->comment('查看总数');
            $table->unsignedInteger('last_reply_user_id')->unsigned()->nullable()->comment('最后一个回复人的id');
            // 排序
            $table->integer('order')->nullable()->comment('可用来做排序使用');
            // 文章摘要，SEO 优化时使用
            $table->text('excerpt')->nullable()->comment('文章摘要，SEO 优化时使用');
            // SEO 友好的 URI
            $table->string('slug')->nullable()->comment('SEO 友好的 URI');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
