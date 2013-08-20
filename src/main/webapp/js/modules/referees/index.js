define([
    'angular'
],
    function(angular){
        console.log("Initializing referees module");
        var module = angular.module('refereesModule', []);
        module.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function ($stateProvider, $routeProvider, $urlRouterProvider) {
            $stateProvider.
                state("refereesState",{
                    url: "/referees",
                    templateUrl: 'js/modules/referees/views/referees.html'
                })
        }]);
        return module;
    }
);