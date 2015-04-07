'use strict';

define ([
	'mainApp',
	'directives/myDirective'
	],

	function (mainApp){

		mainApp.controller('DirectiveController', function($scope){
			
			console.log('DirectiveController Call');

			 $scope.person = {
				      name: 'nextreeMember',
				      address: 'Gasan'
				    };
				
			
			});

		});
		
	