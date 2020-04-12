<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use \Illuminate\Support\Facades\DB;

class SeedPostCategoriesData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        $initCategories = [
            [
                'name'        => '分享',
                'description' => '分享创造，分享发现',
            ],
            [
                'name'        => '教程',
                'description' => '开发技巧、推荐扩展包等',
            ],
            [
                'name'        => '问答',
                'description' => '请保持友善，互帮互助',
            ],
            [
                'name'        => '公告',
                'description' => '站点公告',
            ],
        ];

        DB::table('postCategories')->insert($initCategories);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // truncate() 方法为清空 categories 数据表里的所有数据。
        DB::table('postCategories')->truncate();
    }
}
