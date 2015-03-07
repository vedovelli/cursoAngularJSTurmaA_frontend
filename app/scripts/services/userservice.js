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

    var apiURL = 'http://curso-angular-api.app/api';

    this.getUsers = function(config)
    {
      return $http.get(apiURL + '/user?limit='+encodeURIComponent(config.limit)+'&page='+encodeURIComponent(config.page)+'&cities='+encodeURIComponent(config.cities)+'&orderBy='+encodeURIComponent(config.orderBy));
    };

    this.saveUser = function(userData)
    {
      if(userData.id === undefined)
      {
        return $http.post(apiURL + '/user', userData);
      } else {
        return $http.put(apiURL + '/user/' + userData.id, userData);
      }
    };

    this.removeUser = function(userData)
    {
      return $http.delete(apiURL + '/user/' + userData.id);
    };

  });
