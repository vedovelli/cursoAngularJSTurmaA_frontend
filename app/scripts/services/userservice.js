'use strict';

/**
 * @ngdoc service
 * @name chetApp.UserService
 * @description
 * # UserService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('UserService', function ($http) {

    this.getUsers = function(callback)
    {
      $http.get('http://curso-angular-api.app/api/user').success(function(data)
      {
        callback(data);
      });
    };

  });
