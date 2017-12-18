/**
 * Created by Paul Chidi on 12/13/2017.
 */
angular.module('starter')
  .controller('MenuController', function ($scope, $http, $sce) {
    $scope.posts = [];
    $http.get("http://donbaystips.com.ng/api/get_posts/").then(function (returnedData) {
        $scope.posts = returnedData.data.posts;
        $scope.posts.forEach(function (element, index, array) {
          element.title = $sce.trustAsHtml(element.title);
        });
        console.log(returnedData);
      },
      function (error) {
        console.log(error);
      })

  })
  .controller('PostController', function () {
  })
  .controller('NewsController', function ($scope, $http, $sce) {
    $scope.articles = [];
    $http.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=d3a6e97988bd43a1833061e16e5b9b5c").then(function (newsData) {
        $scope.articles = newsData.data.articles;
        console.log(newsData);
      },
      function (error) {
        console.log(error);
      })

  })
  .controller('LivescoreController', function () {
  });
