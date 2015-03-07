'use strict';

/**
 * @ngdoc service
 * @name chetApp.CityService
 * @description
 * # CityService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('CityService', function ($http) {

    this.getCities = function(apiUrl)
    {
      return $http.get(apiUrl);
    };
  });
