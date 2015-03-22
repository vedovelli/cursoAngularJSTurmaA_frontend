'use strict';

/**
 * @ngdoc directive
 * @name chetApp.directive:chetSelect2
 * @description
 * # chetSelect2
 */
angular.module('chetApp')
  .directive('chetSelect2', ['CityService', function (city) {
    return {

      restrict: 'A',

      scope: {
        ngModel: '='
      },

      link: function postLink(scope, element, attrs) {

        var config = {};

        if(attrs.allowclear !== undefined)
        {
          config.allowClear = attrs.allowclear;
        }

        if(attrs.source)
        {
          city.getCities(attrs.source).success(function(data)
          {
            var html = '';

            data.data.forEach(function(item)
            {
              html += '<option value="'+item[attrs.property]+'">'+item[attrs.property]+'</option>';
            });
            element.html(html);

            // Este watcher atende a situações que PRECISAM pedir dados de forma assincrona
            scope.$watch('ngModel', function(newValue)
            {
              element.select2('val', newValue);
            });

          });
        }

        // Este watcher atende a situações que não precisam pedir dados de forma assincrona
        scope.$watch('ngModel', function(newValue)
        {
          element.select2('val', newValue);
        });

        element.select2(config);

      }
    };
  }]);