'use strict';

/**
 * @ngdoc service
 * @name chetApp.PaginationService
 * @description
 * # PaginationService
 * Service in the chetApp.
 */
angular.module('chetApp')
  .service('PaginationService', function () {

    this.generatePagesArray = function(currentPage, collectionLength, rowsPerPage, paginationRange) {

        var pages = [];
        var totalPages = Math.ceil(collectionLength / rowsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var position;

        if (currentPage <= halfWay) {
            position = 'start';
        } else if (totalPages - halfWay < currentPage) {
            position = 'end';
        } else {
            position = 'middle';
        }

        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...');
            } else {
                pages.push(pageNumber);
            }
            i ++;
        }
        return pages;
    };

    this.calculatePageNumber = function(i, currentPage, paginationRange, totalPages) {
      var halfWay = Math.ceil(paginationRange/2);
      if (i === paginationRange) {
          return totalPages;
      } else if (i === 1) {
          return i;
      } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
              return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
              return currentPage - halfWay + i;
          } else {
              return i;
          }
      } else {
          return i;
      }
    };

  });
