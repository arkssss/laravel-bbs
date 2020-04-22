<?php
/*
    数据数据层接口
 */

namespace App\Repository;

interface IPostCategoryRepository{

    /* 获得所有的推文类别信息 */
    public function getAllPostCategories();

}
