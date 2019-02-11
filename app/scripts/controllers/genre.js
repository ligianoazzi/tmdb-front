'use strict';

/**
 * @ngdoc function
 * @name ourAppApp.controller:GenreCtrl
 * @description
 * # GenreCtrl
 * Controller of the ourAppApp
 */
angular.module('ourAppApp')
  .controller('GenreCtrl', function ($scope, $routeParams, $http) {

  	$scope._id = $routeParams.id_genre;

	$http.get("https://api.themoviedb.org/3/genre/"+$scope._id+"/movies?api_key=448b0b79eba8d5a6b2e16bcd0e741d39")	
	
		.then(function(response) {
		$scope.films_genre = angular.fromJson(response).data;
	});


		


  });


