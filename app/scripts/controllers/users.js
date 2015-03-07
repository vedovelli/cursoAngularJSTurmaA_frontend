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

    auth.isLoggedIn({attempt: 'users'}, function()
    {

      $scope.user = {};

      $scope.$watch('filterCities', function(newValue)
      {
        if(newValue !== undefined)
        {
          $scope.fetch();
        }
      });

      $scope.$watch('filterOrderBy', function(newValue)
      {
        if(newValue !== undefined)
        {
          $scope.fetch();
        }
      });

      $scope.save = function()
      {
        user.saveUser($scope.user).success(function(data)
        {
          if(data.success)
          {
            $scope.user = {};
            $scope.fetch();
          }
        });
      };

      $scope.new = function(user)
      {
        $scope.user = {};
      };

      $scope.edit = function(user)
      {
        $scope.user = user;
      };

      $scope.remove = function(userData)
      {
        var confirm = window.confirm('Tem certeza que deseja excluir ' + user.fullname);

        if(confirm)
        {
          user.removeUser(userData).success(function(data)
          {
            if(data.success)
            {
              $scope.fetch();
            }
          });
        }
      };

      $scope.fetch = function()
      {
        var config = {
          cities: $scope.filterCities,
          orderBy: $scope.filterOrderBy,
          limit: 15,
          page: 1
        };

        user.getUsers(config).success(function(data)
        {
          $scope.users =  data.users;
        });
      };

      $scope.fetch();

    });

  }]);
