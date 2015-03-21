'use strict';

/**
 * @ngdoc service
 * @name chetApp.EnderecoService
 * @description
 * # EnderecoService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('EnderecoService', function ($http) {

    this.getEndereco = function(cep, callback)
    {

      var authHeader = $http.defaults.headers.common.Authorization;
      delete $http.defaults.headers.common.Authorization;

      $http.get('http://viacep.com.br/ws/'+cep+'/json/').success(function(endereco)
      {
        callback(endereco);
        $http.defaults.headers.common.Authorization = authHeader;
      }).error(function(error)
      {
        $http.defaults.headers.common.Authorization = authHeader;
        window.console.log(error);
      });
    };

  });
