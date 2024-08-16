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
    describe('ReportItemReference', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ReportItemReference();
      });

      it('should create an instance of ReportItemReference', function() {
        // TODO: update the code to test ReportItemReference
        expect(instance).to.be.a(CodebeamerSwaggerApi.ReportItemReference);
      });

      it('should have the property itemId (base name: "itemId")', function() {
        // TODO: update the code to test the property itemId
        expect(instance).to.have.property('itemId');
        // expect(instance.itemId).to.be(expectedValueLiteral);
      });

      it('should have the property trackerId (base name: "trackerId")', function() {
        // TODO: update the code to test the property trackerId
        expect(instance).to.have.property('trackerId');
        // expect(instance.trackerId).to.be(expectedValueLiteral);
      });

    });
  });

}));
