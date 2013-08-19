define(['require','angular','app'], function(require, angular){
    'use strict';

    return require(['domReady!'], function(document){
        console.log("Bootstrapping application");
		return angular.bootstrap(document, ['alexResume']);		
	});
});