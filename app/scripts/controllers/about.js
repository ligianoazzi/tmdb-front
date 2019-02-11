'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.about_description = 'this is about param, sent by about controller ';
  });
