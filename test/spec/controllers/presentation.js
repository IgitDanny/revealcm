'use strict';

describe('Controller: PresentationCtrl', function () {

  // load the controller's module
  beforeEach(module('revealcmApp'));

  var PresentationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PresentationCtrl = $controller('PresentationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
