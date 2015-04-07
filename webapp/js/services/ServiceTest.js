'use strict';

define ([
	'mainApp'
	], 
	function (mainApp){

		mainApp.service('ServiceTest', function() { 
			this.hello='aa';
			this.sayHello= function(text){
		        return "Service says \"Hello " + text + "\"";
		    };      
			});
	});

