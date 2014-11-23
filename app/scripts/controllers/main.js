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

  $scope.data = [[
      ['Heavy Industry', 12],['Retail', 9], ['Light Industry', 14], 
      ['Out of home', 16],['Commuting', 7], ['Orientation', 9]
    ]];

    $scope.chartOptions = { 
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.PieRenderer, 
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      }
    };


  }]);
