'use strict';

/**
 * @ngdoc directive
 * @name chetApp.directive:chetModal
 * @description
 * # chetModal
 */
angular.module('chetApp')
  .directive('chetModal', ['ChetModalService', function (modal) {
    return {
      templateUrl: 'views/directives/chet-modal.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        title: '@', // one-way data binding
        closeButton: '=' // two-way data binding
      },
      link: function postLink(scope, element) {
        modal.set(element);
      }
    };
  }]);
