<?php

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\User;
use App\Models\PostCategory;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @throws Exception
     */
    public function run()
    {
        $users = User::all()->toArray();
        $length_user = count($users);

        $postCategories = PostCategory::all()->toArray();
        $length_cat = count($postCategories);

        $posts = factory(Post::class)->times(2000)->make();
        $posts = $posts->toArray();

        foreach ($posts as &$post){

            $fake_post_user = random_int(0, $length_user-1);
            $fake_post_user_id = $users[$fake_post_user]['id'];

            $fake_post_category = random_int(0, $length_cat-1);
            $fake_post_category_id = $postCategories[$fake_post_category];

            $post['u_id'] = $fake_post_user_id;
            $post['category_id'] = $fake_post_category_id['id'];

        }

        // insert
        Post::insert($posts);
    }
}
