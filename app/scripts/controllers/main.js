'use strict';

/**
 * # MainCtrl
 * Controller of the mydashboard
 */
angular.module('mydashboard')
  .controller('MainCtrl',['$scope','myService', function ($scope,myService) {

  	 myService.getResponse("data/dashboard.json").then(function (response) {
     
            $scope.list = response.data.dashboard;

        });

  	 $scope.data = [
      {
        value: 300,
        color:'#F7464A',
        highlight: '#FF5A5E'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870'
      }
    ];

  }]);
