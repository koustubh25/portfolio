'use strict';

var portfolioApp = angular.module('portfolioApp',[

	'ngRoute',
	'portfolioControllers'

	]);


portfolioApp.config(['$routeProvider', function($routeProvider){

	$routeProvider.
	when('/work',{

		templateUrl : 'partials/myWork.html',
		controller : 'workController'
	}).
	when('/resume',{
		templateUrl : 'partials/resume.html',
		controller : 'resumeController'
	}).
	when('/gallery',{
		templateUrl : 'partials/gallery.html',
		controller : 'galleryController'
	}).
	when('/contact',{
		templateUrl : 'partials/contact.html',
		controller : 'contactController'
	}).
	when('/home',{
		templateUrl : 'partials/home.html',
		controller : 'homePageController'
	}).
	otherwise({
		redirectTo : '/home'
	});


}]);
