'use strict';

define ([
	'mainApp'
	
	],

	function (mainApp){

		mainApp.controller('BaseController', function($scope){
			
			console.log('BaseControoler Call');


			$scope.$on('updateCSS', function(event,args){

				$scope.stylesheets.push(args);
			});

		})
		
	});