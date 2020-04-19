<?php
// 推文
namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //


    /* 关联 post 表 */
    public function category(){
        return $this->belongsTo('App\Models\PostCategory', 'category_id');
    }

    /* 关联 user 表 */
    public function user(){
        return $this->belongsTo('App\Models\User','u_id');
    }

    /* updated_at 修改器 */
    public function getUpdatedAtAttribute(){

        return Carbon::parse($this->attributes['updated_at'])->diffForHumans();

    }

}
