<?php
/* 辅助函数库 */

function route_class()
{
    return str_replace('.', '-', Route::currentRouteName());
}


/* 形成摘要 */
function make_excerpt($value, $length = 200)
{
    $excerpt = trim(preg_replace('/\r\n|\r|\n+/', ' ', strip_tags($value)));
    return Str::limit($excerpt, $length);
}
