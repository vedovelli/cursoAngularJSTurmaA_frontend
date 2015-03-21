'use strict';

/**
 * @ngdoc overview
 * @name chetApp
 * @description
 * # chetApp
 *
 * Main module of the application.
 */
angular
  .module('chetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload'
  ])
  .constant('API_URL', 'http://cursoangular.vedovelli.com.br/api')
  // .constant('API_URL', 'http://curso-angular-api.app/api')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/new', {
        templateUrl: 'views/users-form.html',
        controller: 'UsersCtrl'
      })
      .when('/users/edit/:id', {
        templateUrl: 'views/users-form.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
