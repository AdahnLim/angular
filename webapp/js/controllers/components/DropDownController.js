'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('DropDownController', function($scope){
			
			console.log('DropDownController Call');

      // dropdown 메뉴
      $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
      ];

      $scope.status = {
        isopen: false
      };

      // 토글 버튼 드롭다운
      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };
    });
  });

