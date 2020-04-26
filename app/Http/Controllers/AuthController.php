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
        /* 已经登陆，则返回用户信息 */
//        if(Auth::check()){
//            dd(Auth::user()->toArray(0));
//        }
//        Auth::user();


        dd( $request->session()->token() );

    }

}
