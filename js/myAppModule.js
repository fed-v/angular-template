/*******************************************/
/***            APP MODULE               ***/
/*******************************************/

var app = angular.module('myAppModule', []);



/*******************************************/
/***            CONTROLLERS              ***/
/*******************************************/

app.controller('myFilterDemoCtrl', function($scope){
		
		// ADD VARIABLES TO YOUR CONTROLLER SCOPE
		$scope.data = {
			
			firstname: 'JANET',
			lastname: 'michaels',
			dateJoined: new Date(2010, 2, 23),
			consumption: 123.5698745983,
			plan: 'super-duper-plan',
            myArray: ["str1", "str2", "str3", "str4", "str5"]
			
		};
        
        // YOU CAN ALSO ADD BEHAVIOURS TO YOUR SCOPE
        $scope.welcome = function (){
            alert("Welcome!");
        }
        
        // YOU CAN ADD ANY VARIABLES TO YOUR SCOPE
		$scope.myNum = 25;
        
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