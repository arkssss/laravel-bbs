<?php

namespace App\Http\Middleware;

use Closure;

class EnsureEmailIsVerified
{
    /**
     * Handle an incoming request.
     *
     * 登陆的游客需要被验证邮箱
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if($request->user()
            && !$request->user()->hasVerifiedEmail()
            && !$request->is('email/*', 'logout')){

            /* 未验证，重定向 */
            /* 根据客户端返回对应的内容    */
            /* 可能是 Json 请求， 获得不是 */
            return $request->expectsJson()
                ? abort(403, 'Your email address is not verified.')
                : redirect()->route('verification.notice');
        }

        return $next($request);
    }
}
