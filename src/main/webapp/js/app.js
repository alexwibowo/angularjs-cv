define(
    [
        'angular',
        'states',
        'modules/education/index',
        'modules/professionalHistory/index',
        'modules/profile/index',
        'modules/skills/index',
        'modules/referees/index',
        'modules/services',
        'data/history',
        'data/skills'
    ],
    function(angular){
        'use strict';
        console.log("Constructing main module");
        var app = angular.module('alexResume', [
            'ui.compat',
            'services',
            'technicalSkills',
            'education',
            'professionalHistory',
            'profile',
            'education',
            'referees'
            ]).config(['$httpProvider','$routeProvider',function($httpProvider, $routeProvider) {
                $httpProvider.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
                $httpProvider.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';

                $routeProvider.
                    when("/",{
                        redirectTo: '/profile'
                    });
            }]).constant('REST_HOST', 'http://localhost:8080\:8080/'
        );

        return app;
});