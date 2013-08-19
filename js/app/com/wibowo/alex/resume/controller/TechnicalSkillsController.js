define(['app/com/wibowo/alex/resume/model/Skill', 'app/com/wibowo/alex/resume/model/TechnologyItem'], function(Skill, TechnologyItem){
	function TechnicalSkillsController($scope){
        console.log('Constructing TechnicalSkillsController');
        $scope.skills = [];
	    this.getSkills($scope);
	}

	TechnicalSkillsController.prototype.getSkills = function(scope){
	    var skills = window.foo.skills;

	    for(var i=0; i < skills.length; i++) {
	        var currentSkill = skills[i];

	        var currentSkillItems = [];
	        for (var j=0; j < currentSkill.items.length; j++) {
	            var newSkillItem = new TechnologyItem(currentSkill.items[j]);
	            currentSkillItems.push(newSkillItem);
	        }
	        scope.skills.push(new Skill(currentSkill.type, currentSkillItems));
	    }
	};

    TechnicalSkillsController.$inject = ['$scope'];
	return TechnicalSkillsController;
});
