'use strict';

/**
 * @ngdoc directive
 * @name chetApp.directive:chetUserCard
 * @description
 * # chetUserCard
 */
angular.module('chetApp')
  .directive('chetUserCard', function () {
    return {

      templateUrl: 'views/directives/chet-user-card.html',

      restrict: 'E',

      link: function postLink(scope) {

        scope.showControls = false;

        scope.toggleControls = function(showHide)
        {
          scope.showControls = showHide;
        };

      }
    };
  });
