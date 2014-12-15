'use strict';

angular
  .module('revealcmApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'wysiwyg.module'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/adminSlide', {
        templateUrl: 'views/adminslide.html',
        controller: 'AdminslideCtrl'
      })
      .when('/reveal', {
        templateUrl: 'views/reveal.html',
        controller: 'RevealCtrl'
      })
      .when('/presentation', {
        templateUrl: 'views/presentation.html',
        controller: 'PresentationCtrl'
      })
      .otherwise({
        redirectTo: '/adminSlide'
      });
  });
