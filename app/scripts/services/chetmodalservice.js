'use strict';

/**
 * @ngdoc service
 * @name chetApp.ChetModalService
 * @description
 * # ChetModalService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('ChetModalService', function () {

    /**
    * Acessado pela diretiva para setar o elemento que ficará a disposicao do controller
    */
    this.set = function(element)
    {
      this.modalElement = element;
    };

    this.open = function()
    {
      this.modalElement.modal('show');
    };

    this.close = function()
    {
      this.modalElement.modal('hide');
    };
  });
