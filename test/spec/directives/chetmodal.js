'use strict';

describe('Directive: chetModal', function () {

  // load the directive's module
  beforeEach(module('chetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chet-modal></chet-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chetModal directive');
  }));
});
