'use strict';

define ([
	'mainApp'
	], 
	function (mainApp){

		mainApp.directive('myDirective', function() { 
			  return {
			      restrict: 'E',
			      template: 'Name: {{person.name}} </br> Address: {{person.address}}'
			    };     
			});
	});