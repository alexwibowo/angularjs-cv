define(
    [
        'angular',
        'states',
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
            'technicalSkillsModule',
            'professionalHistoryModule',
            'profileModule',
            'refereesModule'
            ]).config(['$httpProvider','$stateProvider', '$urlRouterProvider',function($httpProvider, $stateProvider, $urlRouterProvider) {
                $httpProvider.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
                $httpProvider.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';

                // by default, show summary
                $urlRouterProvider.otherwise("/profile/summary");
            }]).constant('REST_HOST', 'http://localhost:8080\:8080/'
        );

        return app;
});