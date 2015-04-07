'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('AlertController', function($scope,$alert){
			
			console.log('AlertController Call');
     $scope.alert = {
      "title": "Alert입니다!",
      "content": "입니다.",
      "type": "info"
    };

    // 로딩될때 바로 실행
    $alert({title: 'Alert입니다!', content: '입니다.',  container:'.ngViewArea', type: 'info', show: true});




    });
	});

