define([], function(){
	function Project(data){
	    this.name = data.name;
	    this.start = data.start;
	    this.finish = data.finish;
	    this.summary = data.summary;
	    this.technology = [];
	};
	return Project;
});