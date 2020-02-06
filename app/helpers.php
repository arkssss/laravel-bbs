<?php
/* 辅助函数库 */

function route_class()
{
    return str_replace('.', '-', Route::currentRouteName());
}
