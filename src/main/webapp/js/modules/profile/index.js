define([
    'angular'
],
    function(angular){
        console.log("Initializing profile module");
        var module = angular.module('profile', []);
        module.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function ($stateProvider, $routeProvider, $urlRouterProvider) {
            $routeProvider.
                when("/profile",{
                    templateUrl: 'js/modules/profile/views/profile.html'
                })
        }]);
        return module;
    }
);