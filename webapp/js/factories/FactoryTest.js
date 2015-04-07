'use strict';

define ([
	'mainApp'
	], 
	function (mainApp){

		mainApp.factory('FactoryTest', function() { 
			 return {
			        sayHello: function(text){
			            return "Factory says \"Hello " + text + "\"";
			        }  
			    };       
			});
	});