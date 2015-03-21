'use strict';

describe('Service: ProductSevice', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var ProductSevice;
  beforeEach(inject(function (_ProductSevice_) {
    ProductSevice = _ProductSevice_;
  }));

  it('should do something', function () {
    expect(!!ProductSevice).toBe(true);
  });

});
