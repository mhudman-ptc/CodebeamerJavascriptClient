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
    describe('CreateTestRunRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.CreateTestRunRequest();
      });

      it('should create an instance of CreateTestRunRequest', function() {
        // TODO: update the code to test CreateTestRunRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.CreateTestRunRequest);
      });

      it('should have the property runOnlyAcceptedTestCases (base name: "runOnlyAcceptedTestCases")', function() {
        // TODO: update the code to test the property runOnlyAcceptedTestCases
        expect(instance).to.have.property('runOnlyAcceptedTestCases');
        // expect(instance.runOnlyAcceptedTestCases).to.be(expectedValueLiteral);
      });

      it('should have the property testCaseIds (base name: "testCaseIds")', function() {
        // TODO: update the code to test the property testCaseIds
        expect(instance).to.have.property('testCaseIds');
        // expect(instance.testCaseIds).to.be(expectedValueLiteral);
      });

      it('should have the property testCaseRefs (base name: "testCaseRefs")', function() {
        // TODO: update the code to test the property testCaseRefs
        expect(instance).to.have.property('testCaseRefs');
        // expect(instance.testCaseRefs).to.be(expectedValueLiteral);
      });

      it('should have the property testRunModel (base name: "testRunModel")', function() {
        // TODO: update the code to test the property testRunModel
        expect(instance).to.have.property('testRunModel');
        // expect(instance.testRunModel).to.be(expectedValueLiteral);
      });

      it('should have the property testSetIds (base name: "testSetIds")', function() {
        // TODO: update the code to test the property testSetIds
        expect(instance).to.have.property('testSetIds');
        // expect(instance.testSetIds).to.be(expectedValueLiteral);
      });

      it('should have the property testSetRefs (base name: "testSetRefs")', function() {
        // TODO: update the code to test the property testSetRefs
        expect(instance).to.have.property('testSetRefs');
        // expect(instance.testSetRefs).to.be(expectedValueLiteral);
      });

    });
  });

}));
