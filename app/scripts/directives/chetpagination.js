'use strict';

/**
 * @ngdoc directive
 * @name chetApp.directive:chetPagination
 * @description
 * # chetPagination
 */
angular.module('chetApp')
  .directive('chetPagination', function () {
    return {
      templateUrl: 'views/directives/chet-pagination.html',
      restrict: 'E'
    };
  });
