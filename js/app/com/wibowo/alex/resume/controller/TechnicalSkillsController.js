Namespace("com.wibowo.alex.resume.controller");

com.wibowo.alex.resume.controller.TechnicalSkillsController = function($scope){
    $scope.skills = [];
    this.getSkills($scope);
};


com.wibowo.alex.resume.controller.TechnicalSkillsController.prototype.getSkills = function(scope){
    var skills = window.foo.skills;

    for(var i=0; i < skills.length; i++) {
        var currentSkill = skills[i];

        var currentSkillItems = [];
        for (var j=0; j < currentSkill.items.length; j++) {
            var newSkillItem = new com.wibowo.alex.resume.model.TechnologyItem(currentSkill.items[j]);
            currentSkillItems.push(newSkillItem);
        }
        scope.skills.push(new com.wibowo.alex.resume.model.Skill(currentSkill.type, currentSkillItems));
    }
};
