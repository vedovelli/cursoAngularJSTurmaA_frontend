'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
