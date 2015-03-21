'use strict';

/**
 * @ngdoc service
 * @name chetApp.UserService
 * @description
 * # UserService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('UserService', ['$http', 'API_URL', function ($http, API_URL) {

    this.getGravatar = function(email)
    {
      return $http.get(API_URL+'/gravatar/'+email);
    };

    this.getUsers = function(config)
    {
      return $http.get(API_URL + '/user?limit='+encodeURIComponent(config.limit)+'&page='+encodeURIComponent(config.page)+'&cities='+encodeURIComponent(config.cities)+'&orderBy='+encodeURIComponent(config.orderBy));
    };

    this.saveUser = function(userData)
    {
      if(userData.id === undefined)
      {
        return $http.post(API_URL + '/user', userData);
      } else {
        return $http.put(API_URL + '/user/' + userData.id, userData);
      }
    };

    this.removeUser = function(userData)
    {
      return $http.delete(API_URL + '/user/' + userData.id);
    };

    this.getUser = function(id)
    {
      return $http.get(API_URL+'/user/'+id);
    };

  }]);
