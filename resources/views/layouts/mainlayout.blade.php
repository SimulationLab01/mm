<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
    @include('layouts.partials.head')
</head>

<!--
The #page-top ID is part of the scrolling feature.
The data-spy and data-target are part of the built-in Bootstrap scrollspy function.
-->
<body id="body" data-spy="scroll" data-target=".one-page-header" class="demo-lightbox-gallery">

    <!--=== Header nav===-->
    @include('layouts.partials.nav')
    <!--=== End Header nav ===-->

    @yield('content')

    <!-- Contact Section -->
    @include('layouts.partials.footer')
    <!-- End Contact Section -->

    <!-- JS Global Compulsory -->
    @include('layouts.partials.footer-scripts')

    <script>
        jQuery(document).ready(function() {
            App.init();
            //LoginForm.initLoginForm();
            // ContactForm.initContactForm();
            // OwlCarousel.initOwlCarousel();
            // RevolutionSlider.initRSfullScreen();
        });
    </script>
    <!--[if lt IE 9]>
        <script src="assets/plugins/respond.js"></script>
        <script src="assets/plugins/html5shiv.js"></script>
        <script src="assets/js/plugins/placeholder-IE-fixes.js"></script>
        <script src="assets/plugins/sky-forms-pro/skyforms/js/sky-forms-ie8.js"></script>
    <![endif]-->

    <!--[if lt IE 10]>
        <script src="assets/plugins/sky-forms-pro/skyforms/js/jquery.placeholder.min.js"></script>
    <![endif]-->
</body>
</html>