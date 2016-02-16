app = angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/../views/index.html',
        controller: 'foodCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });