'use strict';

describe('Service: ImageService', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var ImageService;
  beforeEach(inject(function (_ImageService_) {
    ImageService = _ImageService_;
  }));

  it('should do something', function () {
    expect(!!ImageService).toBe(true);
  });

});
