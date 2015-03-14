'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('UsersCtrl', [
    '$scope',
    '$location',
    '$routeParams',
    'AuthService',
    'UserService',
    'PaginationService',
    // 'ChetModalService',
    // function ($scope, $location, $routeParams, auth, userService, modal) {
    function ($scope, $location, $routeParams, auth, userService, paginationService) {

    auth.isLoggedIn({attempt: 'users'}, function()
    {

      $scope.user = {};

      $scope.loading = false;

      $scope.itemsPerPage = 9;

      $scope.currentPage = 1;

      $scope.pagination = {};

      $scope.paginationRange = 16;

      $scope.prevPage = function()
      {
        window.console.log($scope.currentPage);
        if($scope.currentPage > 1)
        {
          $scope.currentPage--;
          $scope.fetch();
        }
      };

      $scope.nextPage = function()
      {
        if($scope.currentPage < $scope.pagination.last_page)
        {
          $scope.currentPage++;
          $scope.fetch();
        }
      };


      $scope.setPage = function()
      {
        $scope.currentPage = this.page;
        $scope.fetch();
      };

      $scope.filterCitiesHandler = function()
      {
        if($scope.filterCities !== undefined)
        {
          $scope.currentPage = 1;
          $scope.fetch();
        }
      };

      $scope.filterOrderByHandler = function()
      {
        if($scope.orderBy !== undefined)
        {
          $scope.currentPage = 1;
          $scope.fetch();
        }
      };

      $scope.voltar = function()
      {
        $location.path('users');
      };

      $scope.save = function()
      {
        userService.saveUser($scope.user).success(function(data)
        {
          if(data.success)
          {
            $scope.user = {};
            $scope.fetch();
            $location.path('users');
            // modal.close();
          }
        });
      };

      $scope.new = function()
      {
        $scope.user = {};
        // modal.open();
        $location.path('users/new');
      };

      $scope.edit = function(userData)
      {
        $scope.user = userData;
        $location.path('users/edit/'+userData.id);
        // modal.open();
      };

      $scope.remove = function(userData)
      {
        var confirm = window.confirm('Tem certeza que deseja excluir ' + userData.fullname);

        if(confirm)
        {
          userService.removeUser(userData).success(function(data)
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
          limit: $scope.itemsPerPage,
          page: $scope.currentPage
        };

        $scope.loading = true;

        userService.getUsers(config).success(function(data)
        {
          $scope.users =  data.users;
          $scope.loading = false;
          $scope.pagination = data.pagination;

          $scope.range = paginationService.generatePagesArray(
            $scope.currentPage,
            $scope.pagination.total,
            $scope.itemsPerPage,
            $scope.paginationRange
          );

        });
      };

      var init = function()
      {
        if($routeParams.id)
        {
          userService.getUser($routeParams.id).success(function(data)
          {
            $scope.user = data.user;
          });
        } else {
          $scope.fetch();
        }
      };

      init();


    });

  }]);
