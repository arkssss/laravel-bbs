<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostCategory extends Model
{
    // 不需要维护时间字段
    public $timestamps = false;

    // 可以改变的字段
    protected $fillable = [
        'description', 'post_count'
    ];

    protected $table = 'postCategories';
}
