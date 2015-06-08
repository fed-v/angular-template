/*******************************************/
/***            APP MODULE               ***/
/*******************************************/

var myAppModule = angular.module('myAppModule', []);



/*******************************************/
/***            CONTROLLERS              ***/
/*******************************************/

myAppModule.controller('myFilterDemoCtrl', function($scope){
		
		// Data goes here in Array or Object form!
		$scope.myData = {
			
			firstname: 'JANET',
			lastname: 'michaels',
			dateJoined: new Date(2010, 2, 23),
			consumption: 123.5698745983,
			plan: 'super-duper-plan'
			
		};
		
	}
);



/*******************************************/
/***           CUSTOM FILTERS            ***/
/*******************************************/

myAppModule.filter('stripDashes', function(){
	return function(str){
		return str.split('-').join(' ');
	};
});

myAppModule.filter('toTitleCase', function(){
	return function(str){
		return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
});