define([
    'angular',
    'modules/professionalHistory/controllers/ProfessionalHistoryController'
    ],
    function(angular, ProfessionalHistoryController){
        console.log("Initializing professionalHistory module");
        var module = angular.module('professionalHistory', []);
        module.controller('ProfessionalHistoryController', ProfessionalHistoryController);
        module.config(['$stateProvider', '$routeProvider', '$urlRouterProvider', function ($stateProvider, $routeProvider, $urlRouterProvider) {
                $routeProvider.
                    when("/professional-history",{
                        templateUrl: 'js/modules/professionalHistory/views/professionalHistory.html'
                    })
        }]);
        return module;
    }
);