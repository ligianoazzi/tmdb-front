'use strict';

/**
 * @ngdoc overview
 * @name ourAppApp
 * @description
 * # ourAppApp
 *
 * Main module of the application.
 */
angular
  .module('ourAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/genre/:id_genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreCtrl',
        controllerAs: 'genre'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
