define(['angular','states','modules/services','modules/controllers','../data/history','../data/skills'], function(angular){
    'use strict';
    console.log("Constructing main module");
    return angular.module('alexResume', [
            'ui.compat',
            'services',
            'controllers'
        ]).config(function($httpProvider) {
            $httpProvider.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
            $httpProvider.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
        }).constant('REST_HOST', 'http://localhost:8080\:8080/web');
});