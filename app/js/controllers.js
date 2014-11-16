'use strict';

var portfolioControllers = angular.module('portfolioControllers',[]);

portfolioControllers.controller('homePageController',['$scope',function($scope){

	$scope.menubarItems = [
		{
			'menu' : 'home',
			'url' : 'home'
		},
		{
			'menu' : 'My Work',
			'url' : 'work'
		},
		{
			'menu' : 'Resume',
			'url' : 'resume'
		},
		{
			'menu' : 'Gallery',
			'url' : 'gallery'
		},
		{
			'menu' : 'Contact',
			'url' : 'contact'
		}];
		$scope.profileName = 'Koustubh';
	

}]);

portfolioControllers.controller('workController',['$scope',function($scope){

}]);

portfolioControllers.controller('resumeController',['$scope',function($scope){

}]);

portfolioControllers.controller('galleryController',['$scope',function($scope){

}]);

portfolioControllers.controller('contactController',['$scope',function($scope){

}]);