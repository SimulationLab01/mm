<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        
        @section('sidebar')
            master
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>