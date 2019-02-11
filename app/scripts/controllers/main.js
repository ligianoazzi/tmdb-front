'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('MainCtrl', function ($scope, $http) {


	$http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=448b0b79eba8d5a6b2e16bcd0e741d39")
		.then(function(response) {
		$scope.genres = angular.fromJson(response).data;
	});



});
