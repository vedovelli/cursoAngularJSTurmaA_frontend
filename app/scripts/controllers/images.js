'use strict';

/**
 * @ngdoc function
 * @name chetApp.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the chetApp
 */
angular.module('chetApp').controller('ImagesCtrl', ImagesCtrl);

ImagesCtrl.$inject = ['$scope', 'AuthService', '$upload', 'API_URL'];

function ImagesCtrl ($scope, auth, $upload, API_URL) {
  auth.isLoggedIn({attempt: 'images'}, function()
  {

    $scope.upload = function()
    {
      if($scope.files !== undefined && $scope.files.length > 0)
      {
        $upload.upload({
          url: API_URL+'/upload',
          file: $scope.files[0],
          headers: { 'Authorization': 'Basic ' + auth.token }
        }).progress(function(event)
        {
          var progressPercentage = parseInt(100.0 * event.loaded / event.total);
          console.log('progress: ' + progressPercentage + '% ' + event.config.file.name);
        }).success(function(data)
        {
          window.console.log(data);
          $scope.imgSrc =  'http://curso-angular-api.app/'+data.imgUrl;
        });
      }
    };

  });
}