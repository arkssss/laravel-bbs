<?php
namespace App\Repository\ImplMysql;

use App\Models\PostCategory;
use App\Repository\IPostCategoryRepository;

class ImplPostCategoryRepository implements IPostCategoryRepository{

    private $postCategoryModel;


    public function __construct(PostCategory $postCategory)
    {
        $this->postCategoryModel = $postCategory;
    }


    public function getAllPostCategories()
    {
        // TODO: Implement getAllPostCategories() method.

        return $this->postCategoryModel->all();

    }
}
