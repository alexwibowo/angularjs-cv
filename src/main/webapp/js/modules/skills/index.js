define([
    'angular',
    'modules/skills/controllers/TechnicalSkillsController'
],
    function(angular, TechnicalSkillsController){
        console.log("Initializing technicalSkills module");
        var module = angular.module('technicalSkills', ['services']);
        module.controller('TechnicalSkillsController', TechnicalSkillsController);
        module.config(['$stateProvider','$routeProvider', '$urlRouterProvider', function($stateProvider, $routeProvider, $urlRouterProvider){
            $routeProvider.
                when("/technical-skills",{
                    templateUrl: 'js/modules/skills/views/skills.html'
                });
        }]);
        return module;
    }
);