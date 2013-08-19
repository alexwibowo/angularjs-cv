define(['angular',
    'app/com/wibowo/alex/resume/controller/TechnicalSkillsController',
	'app/com/wibowo/alex/resume/controller/ProfessionalHistoryController'
	],
	function(angular, TechnicalSkillsController, ProfessionalHistoryController){
		console.log("Constructing controllers");
        var controllers = angular.module('controllers', ['services']);
        controllers.controller('TechnicalSkillsController', TechnicalSkillsController);
        controllers.controller('ProfessionalHistoryController', ProfessionalHistoryController);
		return controllers;
	}
);