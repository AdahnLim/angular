'use strict';

define ([
	'mainApp',
	'filters/FilterTest'
	],

	function (mainApp){

		mainApp.controller('FilterController', function($scope){
			
			console.log('FilterController Call');

			$scope.text = "true";
				
			});

		});
		
	