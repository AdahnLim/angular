'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('TabController', function($scope,$window){
			
			console.log('TabController Call');

     // Tab Contents
     $scope.tabs = [
     { title:'Dynamic Title 1', content:'Dynamic content 1' },
     { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
     ];
    // alert Tab
    $scope.alertMe = function() {
      $window.alert('You\'ve selected the alert tab!');
    };

  });
  });

