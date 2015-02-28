'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('LoginCtrl', ['$scope', 'AuthService', function ($scope, auth) {

    $scope.email = 'vedovelli@gmail.com';
    $scope.password = '123456';
    $scope.login = function()
    {
      auth.login($scope.email, $scope.password);
    };

  }]);
