/*******************************************/
/***            APP MODULE               ***/
/*******************************************/

var app = angular.module('myAppModule', []);



/*******************************************/
/***            CONTROLLERS              ***/
/*******************************************/

app.controller('myFilterDemoCtrl', function($scope){
		
		// Data goes here in Array or Object form!
		$scope.data = {
			
			firstname: 'JANET',
			lastname: 'michaels',
			dateJoined: new Date(2010, 2, 23),
			consumption: 123.5698745983,
			plan: 'super-duper-plan',
            myArray: ["str1", "str2", "str3", "str4", "str5"]
			
		};
        
        // Behaviour functions 
        $scope.welcome = function (){
            alert("Welcome!");
        }
		
	}
);



/*******************************************/
/***           CUSTOM FILTERS            ***/
/*******************************************/

app.filter('stripDashes', function(){
	return function(str){
		return str.split('-').join(' ');
	};
});

app.filter('toTitleCase', function(){
	return function(str){
		return str.replace(/\w\S*/g, function(txt){ return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
});