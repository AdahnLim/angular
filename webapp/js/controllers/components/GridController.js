'use strict';

define ([
	'mainApp'
	],

	function (mainApp){

		mainApp.controller('GridController', function($scope,$http){
			
			console.log('GridController Call');
      
			$http({
		        method:'GET',
		        // Server Side (REST Call)
		        url:'rest/griddata',
		        header: {'Content-Type': 'application/json; charset=utf-8'} 
			})
      .success(function(data,status,headers,config)
      {
        if(data){
       //   console.log(data.result_list);
          $scope.myData= data.result_list;
        }
        else{
          console.log('Not Exist Data');
        }
      })
      .error(function(data,status,headers,config)
      {
        console.log(status);
      });

      $scope.gridOptions = { 
    		    enableCellEditOnFocus: true,
                data: 'myData',
                enableSorting: true,
                columnDefs: [
                  { name:'firstName', field: 'firstName' },
                  { name:'lastName', field: 'lastName' },
                  { name:'company', field: 'company'},
                  { name:'employed', field: 'employed'}
                ]
                
            };

      $scope.msg = {};
      
      $scope.gridOptions.onRegisterApi = function(gridApi){
               //set gridApi on scope
               $scope.gridApi = gridApi;
               gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                 $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
                 $scope.$apply();
               });
             };
      

    });
	});

