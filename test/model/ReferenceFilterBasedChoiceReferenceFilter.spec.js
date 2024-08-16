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
    describe('ReferenceFilterBasedChoiceReferenceFilter', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ReferenceFilterBasedChoiceReferenceFilter();
      });

      it('should create an instance of ReferenceFilterBasedChoiceReferenceFilter', function() {
        // TODO: update the code to test ReferenceFilterBasedChoiceReferenceFilter
        expect(instance).to.be.a(CodebeamerSwaggerApi.ReferenceFilterBasedChoiceReferenceFilter);
      });

      it('should have the property domainId (base name: "domainId")', function() {
        // TODO: update the code to test the property domainId
        expect(instance).to.have.property('domainId');
        // expect(instance.domainId).to.be(expectedValueLiteral);
      });

      it('should have the property domainType (base name: "domainType")', function() {
        // TODO: update the code to test the property domainType
        expect(instance).to.have.property('domainType');
        // expect(instance.domainType).to.be(expectedValueLiteral);
      });

      it('should have the property filterId (base name: "filterId")', function() {
        // TODO: update the code to test the property filterId
        expect(instance).to.have.property('filterId');
        // expect(instance.filterId).to.be(expectedValueLiteral);
      });

      it('should have the property filterStatusId (base name: "filterStatusId")', function() {
        // TODO: update the code to test the property filterStatusId
        expect(instance).to.have.property('filterStatusId');
        // expect(instance.filterStatusId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property targetIds (base name: "targetIds")', function() {
        // TODO: update the code to test the property targetIds
        expect(instance).to.have.property('targetIds');
        // expect(instance.targetIds).to.be(expectedValueLiteral);
      });

      it('should have the property targetPermissions (base name: "targetPermissions")', function() {
        // TODO: update the code to test the property targetPermissions
        expect(instance).to.have.property('targetPermissions');
        // expect(instance.targetPermissions).to.be(expectedValueLiteral);
      });

    });
  });

}));
