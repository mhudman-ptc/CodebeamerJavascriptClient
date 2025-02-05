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
    describe('UpdateTestCaseRunRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.UpdateTestCaseRunRequest();
      });

      it('should create an instance of UpdateTestCaseRunRequest', function() {
        // TODO: update the code to test UpdateTestCaseRunRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.UpdateTestCaseRunRequest);
      });

      it('should have the property conclusion (base name: "conclusion")', function() {
        // TODO: update the code to test the property conclusion
        expect(instance).to.have.property('conclusion');
        // expect(instance.conclusion).to.be(expectedValueLiteral);
      });

      it('should have the property customFields (base name: "customFields")', function() {
        // TODO: update the code to test the property customFields
        expect(instance).to.have.property('customFields');
        // expect(instance.customFields).to.be(expectedValueLiteral);
      });

      it('should have the property reportedBugReferences (base name: "reportedBugReferences")', function() {
        // TODO: update the code to test the property reportedBugReferences
        expect(instance).to.have.property('reportedBugReferences');
        // expect(instance.reportedBugReferences).to.be(expectedValueLiteral);
      });

      it('should have the property result (base name: "result")', function() {
        // TODO: update the code to test the property result
        expect(instance).to.have.property('result');
        // expect(instance.result).to.be(expectedValueLiteral);
      });

      it('should have the property runTime (base name: "runTime")', function() {
        // TODO: update the code to test the property runTime
        expect(instance).to.have.property('runTime');
        // expect(instance.runTime).to.be(expectedValueLiteral);
      });

      it('should have the property testCaseReference (base name: "testCaseReference")', function() {
        // TODO: update the code to test the property testCaseReference
        expect(instance).to.have.property('testCaseReference');
        // expect(instance.testCaseReference).to.be(expectedValueLiteral);
      });

    });
  });

}));
