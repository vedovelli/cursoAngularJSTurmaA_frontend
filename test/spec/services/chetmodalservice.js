'use strict';

describe('Service: ChetModalService', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var ChetModalService;
  beforeEach(inject(function (_ChetModalService_) {
    ChetModalService = _ChetModalService_;
  }));

  it('should do something', function () {
    expect(!!ChetModalService).toBe(true);
  });

});
