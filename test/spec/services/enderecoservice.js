'use strict';

describe('Service: EnderecoService', function () {

  // load the service's module
  beforeEach(module('chetApp'));

  // instantiate service
  var EnderecoService;
  beforeEach(inject(function (_EnderecoService_) {
    EnderecoService = _EnderecoService_;
  }));

  it('should do something', function () {
    expect(!!EnderecoService).toBe(true);
  });

});
