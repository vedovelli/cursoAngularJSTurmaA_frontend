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
    '$timeout',
    'AuthService',
    'UserService',
    'EnderecoService',
    'PaginationService',
    // 'ChetModalService',
    // function ($scope, $location, $routeParams, auth, userService, modal) {
    function ($scope, $location, $routeParams, $timeout, auth, userService, enderecoService, paginationService) {

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
        if($scope.currentPage > 1)
        {
          $scope.currentPage--;
          queryString();
          $scope.fetch();
        }
      };

      $scope.nextPage = function()
      {
        if($scope.currentPage < $scope.pagination.last_page)
        {
          $scope.currentPage++;
          queryString();
          $scope.fetch();
        }
      };

      $scope.setPage = function()
      {
        $scope.currentPage = this.page;
        queryString();
        $scope.fetch();
      };

      var queryString = function()
      {
        $location.search('page', $scope.currentPage);

        if($scope.filterCities !== undefined)
        {
          $location.search('cities', encodeURIComponent($scope.filterCities));
        }

        if($scope.filterOrderBy !== undefined)
        {
          $location.search('orderBy', encodeURIComponent($scope.filterOrderBy));
        }
      };

      $scope.filterCitiesHandler = function()
      {
        if($scope.filterCities !== undefined)
        {
          $scope.currentPage = 1;
          queryString();
          $scope.fetch();
        }
      };

      $scope.filterOrderByHandler = function()
      {
        if($scope.filterOrderBy !== undefined)
        {
          $scope.currentPage = 1;
          queryString();
          $scope.fetch();
        }
      };

      $scope.voltar = function()
      {
        $location.path('users');
      };

      $scope.save = function(form)
      {
        if(form.$valid)
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
          }).error(function(error)
          {
            $scope.serverSideValidationErrors = '<strong>Mensagem do servidor:</strong><br>';

            for(var prop in error.errors)
            {
              $scope.serverSideValidationErrors += error.errors[prop] + '<br>';
            }
          });
        }
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

      $scope.gravatar = function(email)
      {
        userService.getGravatar(email).success(function(gravatar)
        {
          window.console.log(gravatar);
        }).error(function(error)
        {
          window.console.log(error);
        });
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

      $scope.endereco = function(zipInput)
      {
        if(zipInput.$valid)
        {
          enderecoService.getEndereco($scope.user.zip, function(endereco)
          {
            if($scope.user !== undefined)
            {
              $scope.user.city = endereco.localidade;
              $scope.user.state = endereco.uf;
            }
          });
        }
      };

      var init = function()
      {
        if($routeParams.page)
        {
          $scope.currentPage = $routeParams.page;
        }

        if($routeParams.cities)
        {
          $scope.filterCities = decodeURIComponent($routeParams.cities).split(',');
        }

        if($routeParams.orderBy)
        {
          $scope.filterOrderBy = decodeURIComponent($routeParams.orderBy);
        }

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
