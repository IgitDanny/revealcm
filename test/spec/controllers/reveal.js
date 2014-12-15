'use strict';

describe('Controller: RevealCtrl', function () {

  // load the controller's module
  beforeEach(module('revealcmApp'));

  var RevealCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RevealCtrl = $controller('RevealCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
