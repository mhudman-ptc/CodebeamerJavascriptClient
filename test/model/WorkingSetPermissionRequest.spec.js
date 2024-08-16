/*
 * Codebeamer swagger API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.61
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CodebeamerSwaggerApi);
  }
}(this, function(expect, CodebeamerSwaggerApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('WorkingSetPermissionRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.WorkingSetPermissionRequest();
      });

      it('should create an instance of WorkingSetPermissionRequest', function() {
        // TODO: update the code to test WorkingSetPermissionRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.WorkingSetPermissionRequest);
      });

      it('should have the property permissions (base name: "permissions")', function() {
        // TODO: update the code to test the property permissions
        expect(instance).to.have.property('permissions');
        // expect(instance.permissions).to.be(expectedValueLiteral);
      });

      it('should have the property roles (base name: "roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property trackers (base name: "trackers")', function() {
        // TODO: update the code to test the property trackers
        expect(instance).to.have.property('trackers');
        // expect(instance.trackers).to.be(expectedValueLiteral);
      });

    });
  });

}));
