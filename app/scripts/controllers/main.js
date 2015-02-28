'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('MainCtrl', ['$scope', 'AuthService', function ($scope, auth) {
    auth.isLoggedIn({attempt: '/'});
  }]);
