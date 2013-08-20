define(['modules/shared/model/Project'], function(Project){
	function WorkHistoryItem(data){
	    this.company = data.company;
	    this.start = data.start;
	    this.finish = data.finish;
	    this.position = data.position;
	    this.projects = [];

	    for (var i=0; i< data.projects.length; i++) {
	        var project = data.projects[i];
	        this.projects.push(new Project(project));
	    }
	};
	return WorkHistoryItem;
});