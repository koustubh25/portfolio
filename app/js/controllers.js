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


//japanese language resume link


$scope.resume_language = "docs\\resume\\rirekisyo_stu.pdf";

//Switch Resumes
$scope.changeResume = function(lang)
{
	if(lang == 'japanese')
		$scope.resume_language = "docs\\resume\\rirekisyo_stu.pdf";
	else
		$scope.resume_language = "docs\\resume\\KoustubhGaikwad_resume.pdf";
}



}]);

portfolioControllers.controller('galleryController',['$scope',function($scope){

}]);

portfolioControllers.controller('contactController',['$scope',function($scope){

}]);