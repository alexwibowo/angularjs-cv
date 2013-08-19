require({
	baseUrl: 'js',
	paths: {
        'domReady': 'lib/require/domReady',
        'angular': 'lib/angular/angular',
        'resource' : 'lib/angular/angular-resource',
        'jquery': 'lib/jquery/jquery-1.10.2.min',
        'bootstrap': 'lib/bootstrap/js/bootstrap',
        'states' : 'lib/angular-ui/angular-ui-states'
	},
	shim:{
		'angular':{ exports: 'angular' },
        'bootstrap': {'deps':['jquery']},
        'states' : {'deps':['angular'],'exports':'states'},
        'resource': {'deps':['angular'], 'exports':'resource'}
	},
    priority: [
        'angular'
    ],
    urlArgs: 'v=0.1'
},['app','modules/routes', 'modules/controllers', 'modules/services','startup','bootstrap'], function(app){
	app.run(['$rootScope','$state','$stateParams',
        function($rootScope, $state, $stateParams){
            $rootScope.$state=$state;
            $rootScope.$stateParams = $stateParams;
	    }]);
});