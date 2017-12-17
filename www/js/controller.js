/**
 * Created by Paul Chidi on 12/13/2017.
 */
angular.module('starter')
  .controller('MenuController', function ($scope, $http) {
    $scope.categories = [];
    $http.get("http://donbaystips.com.ng/api/get_category_index/").then(function (returnedData) {
        $scope.categories = returnedData.data.categories;
        console.log(returnedData);
      },
      function (error) {
        console.log(error);
      })

  })
  .controller('PostController', function () {
  })
  .controller('NewsController', function () {
  })
  .controller('LivescoreController', function () {
  });
