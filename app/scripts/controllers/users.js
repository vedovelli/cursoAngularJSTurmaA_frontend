'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('UsersCtrl', ['$scope', 'AuthService', 'UserService', function ($scope, auth, user) {

    auth.isLoggedIn({attempt: 'users'});

    //...
    user.getUsers(function(data)
    {
      $scope.users =  data.users;
    });


  }]);
