'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('SnBController', function($scope,$window,$rootScope){
			
			console.log('SnBController Call');

      $scope.roleList= [
      { "roleName" : "Menu", "roleId" : "role1", "link":"#/", "children" : [
      { "roleName" : "Grid", "roleId" : "role11", "link": "#/grid", "children" : [] },
      { "roleName" : "Accordion", "roleId" : "role12", "link": "#/accordion","children" : []},
      { "roleName" : "Alert", "roleId" : "role13", "link": "#/alert","children" : []},
      { "roleName" : "Button", "roleId" : "role15", "link": "#/button","children" : []},
      { "roleName" : "Modal", "roleId" : "role16", "link": "#/modal","children" : []},
      { "roleName" : "DatePicker", "roleId" : "role17", "link": "#/datepicker","children" : []},
      { "roleName" : "Dropdown", "roleId" : "role18", "link": "#/dropdown","children" : []},
      { "roleName" : "Tab", "roleId" : "role19", "link": "#/tab","children" : []},
      { "roleName" : "ProgressBar", "roleId" : "role20", "link": "#/progressbar","children" : []},
      { "roleName" : "TypeAhead", "roleId" : "role21", "link": "#/typeahead","children" : []}
      ]}

      ];

      $scope.$watch('menuTree.currentNode', function(newValue){
        if( $scope.menuTree && angular.isObject($scope.menuTree.currentNode) ) {
          $window.location=$scope.menuTree.currentNode['link'];
        }
      },true);

 

    });
});

