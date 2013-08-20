define([
    'angular'
],
    function(angular){
        console.log("Initializing education module");
        var module = angular.module('education', ['services']);
        module.config(['$stateProvider','$routeProvider', '$urlRouterProvider', function($stateProvider, $routeProvider, $urlRouterProvider){
            $routeProvider.
                when("/education",{
                    templateUrl: 'js/modules/education/views/education.html'
                });
        }]);
        return module;
    }
);