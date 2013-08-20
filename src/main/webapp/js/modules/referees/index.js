define([
    'angular'
],
    function(angular){
        console.log("Initializing referees module");
        var module = angular.module('referees', []);
        module.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function ($stateProvider, $routeProvider, $urlRouterProvider) {
            $routeProvider.
                when("/referees",{
                    templateUrl: 'js/modules/referees/views/referees.html'
                })
        }]);
        return module;
    }
);