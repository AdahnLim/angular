'use strict';

requirejs.config({

	// js파일 Base 경로 설정
	baseUrl:'js',

	// baseUrl 을 기준으로 모듊명과 경로 매
	paths:{
		'jquery' : '../libs/jquery-2.1.3/jquery-2.1.3.min',
		'angular' : '../libs/angular-1.3.8/angular',
		'ngRoute' : '../libs/angular-1.3.8/angular-route',
		'ngAnimate' : '../libs/angular-1.3.8/angular-animate.min',
		'ngSanitize' : '../libs/angular-1.3.8/angular-sanitize.min',
		'angularTreeview' : '../libs/angular-1.3.8/angular.treeview',
		'ui.grid' : '../libs/angular-1.3.8/ui-grid-unstable',
		'ui.bootstrap' : '../libs/angular-1.3.8/ui-bootstrap-tpls-0.12.0.min',
		'bootstrap' : '../libs/bootstrap-3.3.2/js/bootstrap.min',
		'ngStrap' : '../libs/angular-1.3.8/angular-strap.min',
		'ngStrapTpl' : '../libs/angular-1.3.8/angular-strap.tpl.min',

	},
	/*
	shim:
	AMD 형식을 지원하지 않는 라이브러리의 경우 아래와 같이 SHIM을 사용해서 모듈로 불러올 수 있다.
	참고 : http://gregfranko.com/blog/require-dot-js-2-dot-0-shim-configuration/
	*/
	shim:{
		'angular' : {
			exports:'angular'
		},
		'ngRoute' : {
			deps : ['angular']
		},
		'ngSanitize' : {
			deps : ['angular']
		},		
		'ngAnimate' : {
			deps : ['angular']
		},
		'ui.grid' : {
			deps : ['angular']
		},
		'ngStrap' : {
			deps : ['angular']
		},
		'ngStrapTpl' : {
			deps : ['angular','ngStrap']
		},
		'bootstrap' : {
			deps : ['jquery']
		},
		'ui.bootstrap' : {
			deps : ['angular','jquery','bootstrap']
		},
		'angularTreeview' : {
			deps : ['angular']
		}
		
	},

	// ts값을 배포시간으로 설정하여 캐싱을 피할 수 있다.
	urlArgs : 'ts=' + (new Date()).getTime()
});


// 모듈 로드
requirejs([
	'jquery',
	'angular',
	'ngAnimate',
	'ngRoute',
	'ngSanitize',
	'ui.grid',
	'ngStrap',
	'ngStrapTpl',
	'bootstrap',
	'ui.bootstrap',
	'angularTreeview',
	'mainApp',
	'mainRoutes'
	],

	// 로드 완료 된 뒤 콜백 
	function ($,angular) {

		// 페이지 완전히 로드 된 뒤에
		angular.element(document).ready(function() {

			// mainApp 부트스트리
			angular.bootstrap(document,['mainApp']);
		});
	}
);