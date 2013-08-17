Namespace("com.wibowo.alex.resume.model");

com.wibowo.alex.resume.model.Project = function(data){
    this.name = data.name;
    this.start = data.start;
    this.finish = data.finish;
    this.summary = data.summary;
    this.technology = [];
};