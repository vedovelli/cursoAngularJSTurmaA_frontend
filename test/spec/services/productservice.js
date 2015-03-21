'use strict';

describe('Service: ProductService', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var ProductService;
  beforeEach(inject(function (_ProductService_) {
    ProductService = _ProductService_;
  }));

  it('should do something', function () {
    expect(!!ProductService).toBe(true);
  });

});
