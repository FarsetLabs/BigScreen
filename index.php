<html>
<head>
    <title>Magic Mirror</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" type="text/css" href="css/kenburns.css">
    <link rel="stylesheet" type="text/css" href="css/weather-icons.css">
    <link rel="stylesheet" type="text/css" href="https://assets.farsetlabs.org.uk/fonts/myriad-pro/stylesheet.css">
    <script type="text/javascript">
        $.getJSON('https://api.github.com/repos/FarsetLabs/BigScreen/git/refs/heads/gh-pages', function(data) {
            if (data.object && data.object.sha) {
                var currentVersion = data.object.sha;
            }
        });
    </script>
    <meta name="google" value="notranslate" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>

<body>
    <div id="slideshow">
        <img src="http://www.farsetlabs.org.uk/assets/img/carousels/frontpage/slide1.jpg">
        <img src="http://www.farsetlabs.org.uk/assets/img/carousels/frontpage/slide2.jpg">
        <img src="http://www.farsetlabs.org.uk/assets/img/carousels/frontpage/slide3.jpg">
    </div>
    <div class="vtop left">
        <div class="welcome">
            <h2>Welcome to</h2>
            <h1>Farset Labs</h1>
            <hr>
        </div>
    </div>
    <div class="top left">
        <div class="date small dimmed"></div>
        <div class="time"></div>
        <div class="calendar xxsmall"></div>
    </div>
    <div class="top right">
        <div class="windsun small dimmed"></div>
        <div class="temp"></div>
        <div class="forecast small dimmed"></div>
    </div>
    <div class="center-ver center-hor">
        <!-- <div class="dishwasher light">Vaatwasser is klaar!</div> -->
    </div>
    <div class="lower-third center-hor">
        <div class="compliment light"></div>
    </div>
    <div class="bottom center-hor">
        <div class="news medium"></div>
    </div>

<script src="js/kenburns.js"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/version/version.js" type="text/javascript"></script>
<script src="js/calendar/calendar.js" type="text/javascript"></script>
<script src="js/compliments/compliments.js" type="text/javascript"></script>
<script src="js/weather/weather.js" type="text/javascript"></script>
<script src="js/time/time.js" type="text/javascript"></script>
<script src="js/news/news.js" type="text/javascript"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->

</body>
</html>
