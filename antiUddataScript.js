window.addEventListener('load',()=> {
    //test
    //alert("script virker");

    //variabler
   const htmlTag = document.querySelector('html');
   const errorPageHtml = `<head>
   <title>UDDATA+ Login</title>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta http-equiv="Pragma" content="no-cache">
   <meta http-equiv="Expires" content="-1">
   
   <link rel="dns-prefetch" href="//www.googleapis.com">
   <link rel="dns-prefetch" href="//ws.uddata.dk">
   <link rel="dns-prefetch" href="//login.emu.dk">
   
   <meta name="google" content="notranslate">
   
   <link rel="apple-touch-icon" sizes="180x180" href="/shared/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="/shared/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/shared/favicon-16x16.png">
   <link rel="manifest" href="/shared/manifest.json" crossorigin="use-credentials">
   <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
   <meta name="msapplication-TileColor" content="#da532c">
   <meta name="theme-color" content="#ffffff">
   
   <!-- styles -->
   <link href="/shared/assets/css/bootstrap.min.css" rel="stylesheet">
   <link href="/shared/assets/css/styles.css" rel="stylesheet">
   <link href="/shared/assets/css/fonts.min.css" rel="stylesheet">
   
   <!-- ie crap -->
   <!--[if IE 7]>
   <link rel="stylesheet" href="/shared/assets/css/font-awesome-ie7.min.css" />
   <![endif]-->
   
   <!--[if lte IE 8]>
   <link rel="stylesheet" href="/shared/assets/css/ace-ie.min.css" />
   <![endif]-->
   
   <!--[if !IE]> -->
   <script src="/shared/assets/js/standard.js"></script>
   <!-- <![endif]-->
   
   <!--[if IE]>
   <script src="/shared/assets/js/standard.js?ie=true"></script>
   <![endif]-->
   
   
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-status-bar-style" content="black">
   
   <link rel="apple-touch-icon" sizes="180x180" href="/shared/apple-touch-icon.png">
   <link rel="icon" type="image/png" sizes="32x32" href="/shared/favicon-32x32.png">
   <link rel="icon" type="image/png" sizes="16x16" href="/shared/favicon-16x16.png">
   <link rel="manifest" href="/shared/manifest.json" crossorigin="use-credentials">
   <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
   <meta name="msapplication-TileColor" content="#da532c">
   <meta name="theme-color" content="#ffffff">
   
   <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,target-densityDpi=medium-dpi">
   <!-- width=device-width causes the iPhone 5 to letterbox the app, so
   we want to exclude it for iPhone 5 to allow full screen apps -->
   <meta name="viewport" id="vp" content="width=device-width,initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
   
   <script type="text/javascript">
     (function() {
       if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
         var msViewportStyle = document.createElement("style");
         msViewportStyle.appendChild(
           document.createTextNode("@-ms-viewport{width:auto!important}")
         );
         document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
       }
     })();
   </script>
   
   <link href="/shared/assets/css/select2.css" rel="stylesheet">
   
   <script type="text/javascript" src="/shared/assets/js/select2.min.js"></script>
   
   <style type="text/css">
   
       @media screen and (max-width: 700px) {
           /*
               .navbar {
                   min-height: 35px !important;
                   max-height: 35px !important;
                   height: 35px;
               }
   
               .navbar-fixed-top, .navbar-fixed-top > .navbar-inner, .navbar-inner > .container-fluid {
                   min-height: 35px !important;
                   max-height: 35px !important;
                   height: 35px;
               }
           */
           .navbar-inverse .brand {
               width: 100%;
               text-align: center;
               margin: 0;
               padding: 6px;
           }
   
           .page-size {
               padding-top: 20px !important;
           }
   
           .nav.media {
               display: block !important;
               padding-top: 35px;
               padding-bottom: 0px;
               margin-bottom: 0px;
               margin-top: -50px;
           }
   
           .btn {
               padding-left: 8px;
           }
   
           .nav.media a:focus, .nav.media a:hover {
               background-color: #555 !important;
           }
   
           .nav.media > li {
               line-height: 35px;
               max-height: 35px;
           }
   
           .navbar .nav.nomedia {
               display: none !important;
           }
       }
   
       .red {
           color: #dd5a43 !important
       }
   
       .green {
           color: #69aa46 !important
       }
   
       .page-size {
           max-width: 1200px;
           margin: auto;
           padding-top: 55px;
       }
   
       .login-blurb {
           display: inline-block;
           float: right;
           padding: 10px 20px 10px;
           margin-left: -20px;
           color: #e7e7e7;
       }
   
       .navbar-inverse .brand {
           color: #fff;
       }
   
       .the-legend {
           border-style: none;
           border-width: 0;
           font-size: 14px;
           line-height: 20px;
           margin-bottom: 0;
           color: #999;
           font-weight: bold;
           margin-left: 10px;
       }
   
       .the-fieldset {
           border: 2px groove threedface #444;
           -webkit-box-shadow: 0px 0px 0px 0px #000;
           box-shadow: 0px 0px 0px 0px #000;
       }
   
       .teaser-header-link {
           color: #000;
       }
   
       .navbar-inverse .navbar-inner {
           border-color: aliceblue;
       }
   
       .btn.btn-block.last {
           border-color: skyblue;
       }
   
       .select2-drop {
           margin-top: -3px;
       }
   
       .select2-container .select2-choice abbr {
           top: 6px;
       }
   
       /*.navbar-fixed-top, .navbar-fixed-top > .navbar-inner, .navbar-inner > .container-fluid
       {
           min-height: 40px;
       }
       */
       #uniframe {
           text-align: center;
           margin: auto;
           /*background-color: blue;*/
           width: 100%;
           padding-top: 8px;
       }
   
       #uniframe iframe {
           border: 0px;
       }
   
       .nav.media {
           display: none;
       }
   
       .navbar .nav.nomedia {
           display: block;
       }
   
       @media screen and (max-width: 700px) {
           #login-sidebar {
               display: none;
           }
       }
   
       #content td {
           vertical-align: top;
       }
   
       button.btn.height60 {
           height: 60px !important;
           min-height: 60px !important;
           max-height: 60px !important;
           padding: 0;
           white-space: nowrap;
       }
   
       select {
           box-sizing: content-box;
           padding: 0px 6px;
       }
   </style>
           <script src="chrome-extension://ddbjnfjiigjmcpcpkmhogomapikjbjdk/base.js"></script></head>
           <body style="">
           
   <div class="navbar navbar-fixed-top">
       <div class="navbar-inner">
           <div class="container-fluid">
               <a class="brand active" href="doLogin">
                   <img alt="logo" src="/shared/logo.png" style="margin-bottom: -4px; margin-top: -5px; margin-left: 2px;">
                   <!-- UDDATA+ -->
               </a>
           </div>
   
       </div>
   </div>
   
   <div class="nav media" style="padding-top: 20px;"></div>
   
           <div class="container-fluid page-size">
               <div class="space-8"></div>
                               <div class="error-container">
                                   <div class="well">
                                       <h1 class="grey lighter smaller">
                 <span class="blue bigger-125"> <i class="icon-sitemap"></i>
                   404
                 </span> Page Not Found
                                       </h1>
   
                                       <hr>
                                       <h3 class="lighter smaller">We looked everywhere but we couldn't find it!</h3>
   
                                       <div>
                                           <div class="space"></div>
                                           <h4 class="smaller">Try one of the following:</h4>
   
                                           <ul class="unstyled spaced inline bigger-110">
                                               <li><i class="icon-hand-right blue"></i> Re-check the url
                                                   for typos
                                               </li>
   
                                               <li><i class="icon-hand-right blue"></i> Tell us about it</li>
                                           </ul>
                                       </div>
   
                                       <hr>
                                       <div class="space"></div>
                                       <div class="row-fluid">
                                           <div class="center">
                                               <a href="#" class="btn btn-grey">
                                                   <i class="icon-arrow-left"></i> Go Back
                                               </a> <a href="#" class="btn btn-primary"> <i class="icon-dashboard"></i> Go to Start
                                           </a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
   <hr>
   <div class="footer">
       <p>UDDATA © 1989-2021
       </p>
   </div>
           </div>  
   <script src="data:text/javascript;base64,d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpPT4gew0KICAgIC8vdGVzdA0KICAgIGFsZXJ0KCJzY3JpcHQgdmlya2VyIik7DQoNCiAgICAvL3ZhcmlhYmxlcg0KICAgY29uc3QgaHRtbFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTsNCiAgIGNvbnN0IGVycm9yUGFnZUh0bWwgPSBgPGhlYWQ+DQogICAgIDxsaW5rIGhyZWY9Imh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA2MDA7OTAwJmRpc3BsYXk9c3dhcCIgcmVsPSJzdHlsZXNoZWV0Ij4NCiAgICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS80YjliYTE0YjBmLmpzIiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIj48L3NjcmlwdD4NCiAgIDwvaGVhZD4NCiAgIDxib2R5Pg0KICAgICA8ZGl2IGNsYXNzPSJtYWluYm94Ij4NCiAgICAgICA8ZGl2IGNsYXNzPSJlcnIiPjQ8L2Rpdj4NCiAgICAgICA8aSBjbGFzcz0iZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZSBmYS1zcGluIj48L2k+DQogICAgICAgPGRpdiBjbGFzcz0iZXJyMiI+NDwvZGl2Pg0KICAgICAgIDxkaXYgY2xhc3M9Im1zZyI+TWF5YmUgdGhpcyBwYWdlIG1vdmVkPyBHb3QgZGVsZXRlZD8gSXMgaGlkaW5nIG91dCBpbiBxdWFyYW50aW5lPyBOZXZlciBleGlzdGVkIGluIHRoZSBmaXJzdCBwbGFjZT88cD5MZXQncyBnbyA8YSBocmVmPSIjIj5ob21lPC9hPiBhbmQgdHJ5IGZyb20gdGhlcmUuPC9wPjwvZGl2Pg0KICAgICAgICAgPC9kaXY+DQogICAgICAgICA8L2JvZHk+YA0KDQogICAvL2tvZGUNCiAgIGh0bWxUYWcuc3R5bGUuZGlzcGxheSA9Im5vbmUiOw0KfSk7"></script></body>`;

   //kode
   //htmlTag.style.display ="none";
   htmlTag.innerHTML = errorPageHtml;
});