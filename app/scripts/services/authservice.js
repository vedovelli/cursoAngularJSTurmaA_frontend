'use strict';

/**
 * @ngdoc service
 * @name chetApp.AuthService
 * @description
 * # AuthService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('AuthService', function ($http, $location) {

    var self = this;

    this.isLoggedIn = function(request, callback)
    {

      var storedSession = JSON.parse(window.localStorage.getItem('chet'));
      if(storedSession.token !== undefined)
      {
        self.token = storedSession.token;
        $http.defaults.headers.common.Authorization = 'Basic ' + self.token;
      }

      self.request = request;
      if(self.token === undefined)
      {
        $location.path('login');
      } else {
        callback();
      }
    };

    this.login = function(email, password, remember)
    {
      $http
      .post('http://curso-angular-api.app/login',{email: email, password: password})
      .success(function(data)
      {
        self.token = data.token;

        if(remember)
        {
          var sessionInfo = {token: self.token};
          window.localStorage.setItem('chet', JSON.stringify(sessionInfo));
        }

        $http.defaults.headers.common.Authorization = 'Basic ' + self.token;
        if(self.request !== undefined)
        {
          $location.path(self.request.attempt);
        } else {
          $location.path('/');
        }
      });
    };

    this.logout = function()
    {
      self.token = undefined;
      self.request = undefined;
      var sessionInfo = {token: self.token};
      window.localStorage.setItem('chet', JSON.stringify(sessionInfo));
      $http.defaults.headers.common.Authorization = undefined;
      $location.path('login');
    };

  });
