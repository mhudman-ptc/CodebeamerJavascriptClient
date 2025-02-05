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
    describe('ReferredTestStepFieldValue', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ReferredTestStepFieldValue();
      });

      it('should create an instance of ReferredTestStepFieldValue', function() {
        // TODO: update the code to test ReferredTestStepFieldValue
        expect(instance).to.be.a(CodebeamerSwaggerApi.ReferredTestStepFieldValue);
      });

      it('should have the property referredStepId (base name: "referredStepId")', function() {
        // TODO: update the code to test the property referredStepId
        expect(instance).to.have.property('referredStepId');
        // expect(instance.referredStepId).to.be(expectedValueLiteral);
      });

      it('should have the property referredTestCaseId (base name: "referredTestCaseId")', function() {
        // TODO: update the code to test the property referredTestCaseId
        expect(instance).to.have.property('referredTestCaseId');
        // expect(instance.referredTestCaseId).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
