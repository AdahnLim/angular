'use strict';

define ([
	//'angular',
	'mainApp',

	// Import Controller
	'controllers/BaseController',
	'controllers/GnBController',
	'controllers/SnBController',
	'controllers/views/HomeController',
	'controllers/components/GridController',
	'controllers/components/AccordionController',
	'controllers/components/AlertController',
	'controllers/components/ButtonController',
	'controllers/components/ModalController',
	'controllers/components/DatePickerController',
	'controllers/components/DropDownController',
	'controllers/components/TabController',
	'controllers/components/ProgressBarController',
	'controllers/components/TypeAheadController',
	'controllers/FactoryController',
	'controllers/ServiceController',
	'controllers/DirectiveController',
	'controllers/FilterController'
	], 

	function (mainApp){

		mainApp.config(function($routeProvider,$locationProvider){
			
			$routeProvider
			.when('/',
			{
				controller : 'HomeController',
				templateUrl : './partials/views/home.html'
			})
			.when('/grid',
			{
				controller : 'GridController',
				templateUrl : './partials/views/components/grid.html'
			})
			.when('/accordion',
			{
				controller : 'AccodionController',
				templateUrl : './partials/views/components/accordion.html'
			})
			.when('/alert',
			{
				controller : 'AlertController',
				templateUrl : './partials/views/components/alert.html'
			})
			.when('/button',
			{
				controller : 'ButtonController',
				templateUrl : './partials/views/components/button.html'
			})
			.when('/modal',
			{
				controller : 'ModalController',
				templateUrl : './partials/views/components/modal.html'
			})
			.when('/datepicker',
			{
				controller : 'DatePickerController',
				templateUrl : './partials/views/components/datepicker.html'
			})
			.when('/dropdown',
			{
				controller : 'DropDownController',
				templateUrl : './partials/views/components/dropdown.html'
			})
			.when('/tab',
			{
				controller : 'TabController',
				templateUrl : './partials/views/components/tab.html'
			})
			.when('/progressbar',
			{
				controller : 'ProgressBarController',
				templateUrl : './partials/views/components/progressbar.html'
			})
			.when('/typeahead',
			{
				controller : 'TypeAheadController',
				templateUrl : './partials/views/components/typeahead.html'
			})
			.when('/factory',
			{
				controller : 'FactoryController',
				templateUrl : './partials/factory.html'
			})
			.when('/service',
			{
				controller : 'ServiceController',
				templateUrl : './partials/service.html'
			})
			.when('/directive',
			{
				controller : 'DirectiveController',
				templateUrl : './partials/directive.html'
			})
			.when('/filter',
			{
				controller : 'FilterController',
				templateUrl : './partials/filter.html'
			})
			.otherwise({
				redirectTo : '/'
			});
		});  
	});
