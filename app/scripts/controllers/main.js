'use strict';

/**
 * # MainCtrl
 * Controller of the mydashboard
 */
angular.module('mydashboard')
  .controller('MainCtrl',['$scope','myService', function ($scope,myService) {

  	 myService.getResponse("data/dashboard.json").then(function (response) {
     
            console.log(response.data);

        });

  }]);
