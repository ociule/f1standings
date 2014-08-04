'use strict';

    
// Declare app level module which depends on filters, and services
angular.module('F1FeederApp', [
  'ngRoute',
  //'myApp.filters',
  'F1FeederApp.services',
  //'myApp.directives',
  'F1FeederApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drivers', {templateUrl: 'views/drivers.html', controller: 'driversController'});
  $routeProvider.when('/drivers/:id', {templateUrl: 'views/driverDetail.html', controller: 'driverDetailController'});
  $routeProvider.otherwise({redirectTo: '/drivers'});
}]);
