'use strict';

var portfolioApp = angular.module('portfolioApp',[

	'ngAnimate',
	'portfolioControllers',
	'ngMaterial',
	'ui.router',
	'ngTouch'

	]);


portfolioApp.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){

	$stateProvider.
	state('work',{

		url:'work',
		templateUrl : 'partials/myWork.html',
		controller : 'workController'
	}).
	state('resume',{
		url:'resume',
		templateUrl : 'partials/resume.html',
		controller : 'resumeController'
	}).
	state('gallery',{
		url:'gallery',
		templateUrl : 'partials/gallery.html',
		controller : 'galleryController'
	}).
	state('contact',{
		url:'contact',
		templateUrl : 'partials/contact.html',
		controller : 'contactController'
	}).
	state('home',{
		url : 'home',
		templateUrl : 'partials/home.html',
		controller : 'homePageController'
	});

	$urlRouterProvider.otherwise('home');

}]);
