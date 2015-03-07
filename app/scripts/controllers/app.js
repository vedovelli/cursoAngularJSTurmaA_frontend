'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('AppCtrl', ['$scope', 'AuthService', function ($scope, auth) {

    $scope.auth = auth;

    $scope.$watch('auth.token', function(newValue)
    {
      $scope.token = newValue;
    });

    $scope.logout = function()
    {
      auth.logout();
    };
  }]);
