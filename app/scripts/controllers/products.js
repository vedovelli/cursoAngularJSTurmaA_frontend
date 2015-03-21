'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the chetApp
 */
angular.module('chetApp')
  .controller('ProductsCtrl', ['$scope', 'AuthService', 'ProductService', function ($scope, auth, productService) {


    auth.isLoggedIn({attempt: 'products'}, function()
    {

      var Product = productService.Product;

      $scope.loading = false;

      $scope.inserir = function()
      {
        var product = {};
        product.name = 'Nome do meu novo produto'; // Normalmente isso viria de um form!
        product.country = 'Brazil';
        Product.save(product, function()
        {
          // Nao estou checando se o resultado é o que eu espero!!!
          init();
        });
      };

      $scope.atualizar = function(produto)
      {
        var name = produto.name;
        produto.name = name+'X';
        Product.update({productId: produto.id}, produto, function()
        {
          init();
        });

      };

      $scope.remove = function(id)
      {
        Product.remove({productId: id}, function(data)
        {
          init();
        });
      };

      var init = function()
      {
        $scope.loading = true;
        var products = Product.query(function()
        {
          $scope.products = products;
          $scope.loading = false;
        });
      };

      init();
    });

    //...

  }]);
