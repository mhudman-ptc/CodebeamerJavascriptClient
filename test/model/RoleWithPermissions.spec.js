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
    describe('RoleWithPermissions', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.RoleWithPermissions();
      });

      it('should create an instance of RoleWithPermissions', function() {
        // TODO: update the code to test RoleWithPermissions
        expect(instance).to.be.a(CodebeamerSwaggerApi.RoleWithPermissions);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property trackerPermissions (base name: "trackerPermissions")', function() {
        // TODO: update the code to test the property trackerPermissions
        expect(instance).to.have.property('trackerPermissions');
        // expect(instance.trackerPermissions).to.be(expectedValueLiteral);
      });

    });
  });

}));
