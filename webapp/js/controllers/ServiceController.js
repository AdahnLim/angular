'use strict';

define ([
	'mainApp',
	'services/ServiceTest'
	],

	function (mainApp){

		mainApp.controller('ServiceController', function($scope,ServiceTest){
			
			console.log('ServiceController Call');
				
			$scope.hello= ServiceTest.sayHello("World");
				
			
			});

		});
		
	