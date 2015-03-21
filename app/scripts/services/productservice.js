'use strict';

/**
 * @ngdoc service
 * @name chetApp.ProductService
 * @description
 * # ProductService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('ProductService', ['$resource',  'API_URL', function ($resource, API_URL) {

    this.Product = $resource(API_URL+'/product/:productId', {productId: '@id'}, {'update': { method:'PUT' }});
  }]);