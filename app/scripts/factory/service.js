angular.module('mydashboard')
    .factory('myService',['$http','$rootScope', function($http,$rootScope){

return  {
        getResponse: function(url,params) {
         $rootScope.showPreloader=true;
         var promise =    $http({
            method: 'GET',
            url: url
        }).then(function(result) {
                         
                            return result;
                            
                        });

          return promise;
             //return the promise directly.

}
}
}]);