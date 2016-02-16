angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/../views/index.html',
        controller: 'foodCtrl'
      })
    })
  .controller('foodCtrl', function ($scope, $http) {
 
    $scope.search= {};
    $scope.wineResults;
    // var myObj = {data: "myChicken"}
    $scope.getWines = function (search) {
      console.log("get request happened");
      //console.log("mydata is :",);
      return $http({
        method: "POST",
        url: '/search',
        data: search
      }).then(function(resp) {
      return $scope.wineResults = resp.data
    })
    };
})



//   angular.module('shortly.shorten', [])

// .controller('ShortenController', function ($scope, $location, Links) {
//   // Your code here

//   $scope.link = {};
//   $scope.addLink = function () {
//     $scope.loading = true;
//     Links.addOne($scope.link)
//       .then(function () {
//         $scope.loading = false;
//         $location.path('/');
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   });