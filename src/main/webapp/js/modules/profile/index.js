define([
    'angular'
],
    function(angular){
        console.log("Initializing profile module");
        var module = angular.module('profileModule', []);
        module.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function ($stateProvider, $routeProvider, $urlRouterProvider) {
            $stateProvider.
                state("profile",{
                    url: "/profile",
                    templateUrl: 'js/modules/profile/views/profile.html'
                }).
                state("profile.summary", {
                    url: "/summary",
                    templateUrl: 'js/modules/profile/views/profile.summary.html'
                }).
                state("profile.education", {
                    url: "/education",
                    templateUrl: 'js/modules/profile/views/profile.education.html'
                })
        }]);
        return module;
    }
);