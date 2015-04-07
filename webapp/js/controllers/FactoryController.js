'use strict';

define ([
	'mainApp',
	'factories/FactoryTest'
	],

	function (mainApp){

		mainApp.controller('FactoryController', function($scope,FactoryTest){
			
			console.log('FactoryController Call');

			$scope.hello= FactoryTest.sayHello("World");
				
			
			});

		});
		
	