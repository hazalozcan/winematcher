app.controller('foodCtrl', function ($scope, $http) {
  $scope.search= {}
  $scope.wineResults;

   var getWines = function () {
    return $http({
      method: "POST"
      url: '/search'
      data: $search.wines
    )}.then(function(resp) {
    return $scope.wineResults = resp.data
  })
  };

})