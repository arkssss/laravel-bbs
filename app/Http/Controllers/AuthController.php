<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function __construct()
    {

    }

    public function index(Request $request){

        $user_info = [];

        /* 已经登陆，则返回用户信息 */
        if(Auth::check()){
            $user_info = Auth::user()->toArray();
        }
        $logged = $user_info ? true : false;

        /* json return */
        return json_encode([
            'logged' => $logged,
            'person_information' => $user_info,
        ]);
    }

}
