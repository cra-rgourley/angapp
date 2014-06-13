'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name angappApp
 * @description
 * # angappApp
 *
 * Main module of the application.
 */
 
var app = angular
  .module('angappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
