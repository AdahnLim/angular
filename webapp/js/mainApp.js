'use strict';

define ([
	'angular',
	], 

	function(angular){

		// App Module Include
		var mainApp = angular.module('mainApp',[
			'ngAnimate',
			'ngRoute',
			'ngSanitize',
			'ui.grid',
			'ui.grid.edit',
			'mgcrea.ngStrap',
			// DatePicker에서 함수 디펜더시 관련해서 ngStrap을 먼저 로드해야한다.
			'ui.bootstrap',
			'angularTreeview'
			]);
		
		return mainApp;
	});