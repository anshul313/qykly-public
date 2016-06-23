"use strict";angular.module("sbAdminApp",["oc.lazyLoad","ui.router","ui.bootstrap","angular-loading-bar","datatables"]).config(["$stateProvider","$urlRouterProvider","$ocLazyLoadProvider","$httpProvider",function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,$httpProvider){$ocLazyLoadProvider.config({debug:!1,events:!0}),$urlRouterProvider.otherwise("/login"),$stateProvider.state("dashboard",{url:"/dashboard",templateUrl:"views/dashboard/main.html",resolve:{loadMyDirectives:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/directives/header/header.js","scripts/directives/header/header-notification/header-notification.js","scripts/directives/sidebar/sidebar.js","scripts/services/restful.js"]})}}}).state("dashboard.home",{url:"/home",controller:"homeCtrl",templateUrl:"views/home.html",resolve:{loadMyFiles:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/home.js"]})}}}).state("dashboard.sms",{url:"/sms",controller:"smsCtrl",templateUrl:"views/sms.html",resolve:{loadMyFiles:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/sms.js"]})}}}).state("dashboard.shortcodes",{url:"/shortcodes",controller:"shortcodesCtrl",templateUrl:"views/shortcodes.html",resolve:{loadMyFiles:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/shortcodes.js"]})}}}).state("dashboard.regex",{url:"/regex",controller:"regexCtrl",templateUrl:"views/regex.html",resolve:{loadMyFiles:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/regex.js"]})}}}).state("dashboard.users",{url:"/users",controller:"usersCtrl",templateUrl:"views/users.html",resolve:{loadMyFiles:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/users.js"]})}}}).state("dashboard.moreUserDetail",{url:"/user/:userId/:id",templateUrl:"views/userDetail.html",controller:"userDetailCtrl",resolve:{loadMyFile:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/userDetail.js"]})}}}).state("login",{templateUrl:"views/login.html",url:"/login",controller:"loginCtrl",resolve:{loadMyFile:function($ocLazyLoad){return $ocLazyLoad.load({name:"sbAdminApp",files:["scripts/controllers/login.js"]}),$ocLazyLoad.load({name:"ngCookies",files:["bower_components/angular-cookies/angular-cookies.js"]})}}})}]);