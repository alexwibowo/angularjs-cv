Namespace("com.wibowo.alex.resume.controller");

com.wibowo.alex.resume.controller.ProfessionalHistoryController = function($scope){
    $scope.works = [];
    this.getHistory($scope);
};

com.wibowo.alex.resume.controller.ProfessionalHistoryController.prototype.getHistory = function(scope){
    var workHistory = window.workHistory.workHistory;

    for(var i=0; i < workHistory.length; i++) {
        var currentEntry = workHistory[i];
        scope.works.push(new com.wibowo.alex.resume.model.WorkHistoryItem(currentEntry));
    }
};
