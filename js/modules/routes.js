define(['app'], function(app){
	    return app.config(['$stateProvider','$routeProvider', '$urlRouterProvider', function($stateProvider, $routeProvider, $urlRouterProvider){
	        $routeProvider.
	            when("/profile",{
	                templateUrl: 'partials/profile.html'
	            }).
	            when("/professional-history",{
	                templateUrl: 'partials/professionalHistory.html'
	            }).
	            when("/technical-skills",{
	                templateUrl: 'partials/technicalSkills.html'
                }).
	            when("/education",{
	                templateUrl: 'partials/education.html'
	            }).
	            when("/referees",{
	                templateUrl: 'partials/referees.html'
	            });
			}]);
	}
);