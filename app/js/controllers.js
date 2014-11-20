'use strict';

var portfolioControllers = angular.module('portfolioControllers',[]);

portfolioControllers.controller('homePageController',['$scope',function($scope){

	$scope.menubarItems = [
		{
			'menu' : 'HOME',
			'url' : 'home'
		},
		{
			'menu' : 'MY WORK',
			'url' : 'work'
		},
		{
			'menu' : 'RESUME',
			'url' : 'resume'
		},
		{
			'menu' : 'GALLERY',
			'url' : 'gallery'
		},
		{
			'menu' : 'CONTACT',
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