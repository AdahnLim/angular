'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('ButtonController', function($scope){
			
			console.log('ButtonController Call');
      $scope.singleModel = 1;

      $scope.checkModel = {
        left: false,
        middle: true,
        right: false
      };              

      $scope.radioModel = 'Middle';




    });
	});

