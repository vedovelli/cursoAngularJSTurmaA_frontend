'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('ProductsCtrl', ['$scope', 'AuthService', function ($scope, auth) {

    auth.isLoggedIn({attempt: 'products'}, function()
    {
      
    });

    //...

  }]);
