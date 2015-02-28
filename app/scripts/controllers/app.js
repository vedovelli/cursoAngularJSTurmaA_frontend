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
    $scope.logout = function()
    {
      auth.logout();
    };
  }]);
