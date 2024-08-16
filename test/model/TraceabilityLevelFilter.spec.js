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
    describe('TraceabilityLevelFilter', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TraceabilityLevelFilter();
      });

      it('should create an instance of TraceabilityLevelFilter', function() {
        // TODO: update the code to test TraceabilityLevelFilter
        expect(instance).to.be.a(CodebeamerSwaggerApi.TraceabilityLevelFilter);
      });

      it('should have the property cbQL (base name: "cbQL")', function() {
        // TODO: update the code to test the property cbQL
        expect(instance).to.have.property('cbQL');
        // expect(instance.cbQL).to.be(expectedValueLiteral);
      });

      it('should have the property foldersAndInformation (base name: "foldersAndInformation")', function() {
        // TODO: update the code to test the property foldersAndInformation
        expect(instance).to.have.property('foldersAndInformation');
        // expect(instance.foldersAndInformation).to.be(expectedValueLiteral);
      });

      it('should have the property historyBaselineId (base name: "historyBaselineId")', function() {
        // TODO: update the code to test the property historyBaselineId
        expect(instance).to.have.property('historyBaselineId');
        // expect(instance.historyBaselineId).to.be(expectedValueLiteral);
      });

      it('should have the property historyDate (base name: "historyDate")', function() {
        // TODO: update the code to test the property historyDate
        expect(instance).to.have.property('historyDate');
        // expect(instance.historyDate).to.be(expectedValueLiteral);
      });

      it('should have the property incomingAssociation (base name: "incomingAssociation")', function() {
        // TODO: update the code to test the property incomingAssociation
        expect(instance).to.have.property('incomingAssociation');
        // expect(instance.incomingAssociation).to.be(expectedValueLiteral);
      });

      it('should have the property incomingReference (base name: "incomingReference")', function() {
        // TODO: update the code to test the property incomingReference
        expect(instance).to.have.property('incomingReference');
        // expect(instance.incomingReference).to.be(expectedValueLiteral);
      });

      it('should have the property outgoingAssociation (base name: "outgoingAssociation")', function() {
        // TODO: update the code to test the property outgoingAssociation
        expect(instance).to.have.property('outgoingAssociation');
        // expect(instance.outgoingAssociation).to.be(expectedValueLiteral);
      });

      it('should have the property outgoingReference (base name: "outgoingReference")', function() {
        // TODO: update the code to test the property outgoingReference
        expect(instance).to.have.property('outgoingReference');
        // expect(instance.outgoingReference).to.be(expectedValueLiteral);
      });

      it('should have the property previousLevelItems (base name: "previousLevelItems")', function() {
        // TODO: update the code to test the property previousLevelItems
        expect(instance).to.have.property('previousLevelItems');
        // expect(instance.previousLevelItems).to.be(expectedValueLiteral);
      });

      it('should have the property showTestStepReferences (base name: "showTestStepReferences")', function() {
        // TODO: update the code to test the property showTestStepReferences
        expect(instance).to.have.property('showTestStepReferences');
        // expect(instance.showTestStepReferences).to.be(expectedValueLiteral);
      });

    });
  });

}));
