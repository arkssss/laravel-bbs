<?php

namespace App\Handlers;
/*
    使用百度翻译接口翻译发布的文章title提供友好的SEO
 */
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use Overtrue\Pinyin\Pinyin;

class SlugTranslateHandler{


    private $appId;
    private $appKey;

    private $requestUrl = 'http://api.fanyi.baidu.com/api/trans/vip/translate?';


    /* DI */
    public function __construct($appId, $appKey)
    {
        $this->appId = $appId;
        $this->appKey = $appKey;
    }

    public function translate($text){

        return $this->BaiDuTranslate($text) ?: $this->pinyin($text);

    }

    private function pinyin($text)
    {
        $pinYin = new Pinyin();

        return \Str::slug($pinYin->permalink($text));

    }

    private function BaiDuTranslate($text){

        if(empty($this->appKey) || empty($this->appId)){
            return false;
        }

        /* random byte */
        $salt = time();

        $sign = md5($this->appId. $text. $salt. $this->appKey);

        // 构建请求参数
        $query = http_build_query([
            "q"     =>  $text,
            "from"  => "zh",
            "to"    => "en",
            "appid" => $this->appId,
            "salt"  => $salt,
            "sign"  => $sign,
        ]);

        $httpClient = new Client();
        $response = $httpClient->get($this->requestUrl.$query);

        $result = json_decode($response->getBody(), true);

        if(isset($result['trans_result'][0]['dst'])){
            return \Str::slug($result['trans_result'][0]['dst']);
        }else{
            Log::debug('baidu translate error');
            return false;
        }
    }

}
