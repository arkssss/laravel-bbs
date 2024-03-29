<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', "PagesController@root")->name('home');


# Auth::routes() 为自动生成，功能同下
//Auth::routes();

// 用户身份验证相关的路由
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// 用户注册相关路由
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// 密码重置相关路由
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Email 认证相关路由
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');


// 用户相关操作
Route::resource('users', 'UsersController', ['only' => ['show', 'edit', 'update']]);


// 推文相关操作
Route::resource('posts', 'PostsController');
Route::get('posts/category/{category_id}', 'PostsController@getPostsByCategory');
Route::get('posts/order/{order}', 'PostsController@getAllPostsByOrder');
Route::get('posts/order/{order}/category/{category_id}', 'PostsController@getPostsByCategoryWithOrder');


// 推文类型
Route::get('posts/postCategory/all', 'PostsController@getAllPostsCategory');


// 权限
Route::get('auth', 'AuthController@index');
Route::post('auth', 'AuthController@index');
