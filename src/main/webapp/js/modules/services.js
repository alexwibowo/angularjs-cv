define(['angular', 'resource'],
    function (angular, resource) {
        console.log("Constructing services");

        var services = angular.module('services', ['ngResource']);

        return services;
    });