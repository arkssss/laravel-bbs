<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'LaraBBS') - LaraBBS 论坛 by Ark</title>
  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

</head>

<body>
<div id="app" class="{{ route_class() }}-page">
{{--  @include('layouts._header')--}}
{{--  <div id="Index"></div>--}}
{{--  <div class="container">--}}
{{--    @include('shared._messages')--}}
{{--    @yield('content')--}}
{{--  </div>--}}
{{--  @include('layouts._footer')--}}
</div>
<!-- Scripts -->
{{-- For react recomponent mount --}}
<script src="{{ mix('js/app.js') }}"></script>
</body>

</html>
