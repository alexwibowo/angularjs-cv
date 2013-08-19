define(['app/com/wibowo/alex/resume/model/WorkHistoryItem'], function(WorkHistoryItem){
        'use strict';

        function ProfessionalHistoryController($scope){
            $scope.works = [];
            this.getHistory($scope);
        }


        ProfessionalHistoryController.prototype.getHistory = function(scope){
            var workHistory = window.workHistory.workHistory;

            for(var i=0; i < workHistory.length; i++) {
                var currentEntry = workHistory[i];
                scope.works.push(new WorkHistoryItem(currentEntry));
            }
        };

	
        ProfessionalHistoryController.$inject = ['$scope'];
        return ProfessionalHistoryController;
});

