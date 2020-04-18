<?php
// 推文
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //



    /* 关联 post类型表 */
    public function category(){
        return $this->belongsTo('App\Models\PostCategory', 'category_id');
    }

    public function user(){
        return $this->belongsTo('App\Models\User','u_id');
    }


}
