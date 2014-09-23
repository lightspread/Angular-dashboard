var dashBoard = angular.module('dashBoard',[ 
	'ngRoute',
	'DashBoard'
]);

dashBoard.config(function($routeProvider){
	$routeProvider.
	when('/dashboard', {
		templateUrl: 'dashboard.html'
		//controller:'DashBoard'
	}).
	otherwise({
		redirectTo: '/dashboard'
	});
});