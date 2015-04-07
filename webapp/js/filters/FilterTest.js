'use strict';

define ([
	'mainApp'
	], 
	function (mainApp){

		mainApp.filter('filtertest', function() {
		return function(input) {
			return input ? '참이다' : '거짓이다';
		};
		});
	});
