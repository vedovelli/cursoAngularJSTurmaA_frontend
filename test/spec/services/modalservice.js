'use strict';

describe('Service: ModalService', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var ModalService;
  beforeEach(inject(function (_ModalService_) {
    ModalService = _ModalService_;
  }));

  it('should do something', function () {
    expect(!!ModalService).toBe(true);
  });

});
