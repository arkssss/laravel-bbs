<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'created_at' => $faker->dateTimeBetween('-5 years', '-1 years'),
        'updated_at' => $faker->dateTimeBetween('-1 years'),
        'body' => $faker->paragraph,
    ];
});
