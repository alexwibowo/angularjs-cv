angular.module('alexResume',[])
    .controller('TechnicalSkillsController', com.wibowo.alex.resume.controller.TechnicalSkillsController)
    .controller('ProfessionalHistoryController', com.wibowo.alex.resume.controller.ProfessionalHistoryController)
    .config(["$routeProvider", function($routeProvider){
        $routeProvider.
            when("/profile",{
                templateUrl: 'partials/profile.html'
            }).
            when("/professional-history",{
                templateUrl: 'partials/professionalHistory.html',
                controller: 'TechnicalSkillsController'
            }).
            when("/technical-skills",{
                templateUrl: 'partials/technicalSkills.html'
            }).
            when("/education",{
                templateUrl: 'partials/education.html'
            }).
            when("/referees",{
                templateUrl: 'partials/referees.html'
            }).
            otherwise({
                redirectTo: '/profile'
            })
    }]);
