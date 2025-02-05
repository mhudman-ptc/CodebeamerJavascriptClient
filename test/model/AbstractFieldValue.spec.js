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
    describe('AbstractFieldValue', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.AbstractFieldValue();
      });

      it('should create an instance of AbstractFieldValue', function() {
        // TODO: update the code to test AbstractFieldValue
        expect(instance).to.be.a(CodebeamerSwaggerApi.AbstractFieldValue);
      });

      it('should have the property fieldId (base name: "fieldId")', function() {
        // TODO: update the code to test the property fieldId
        expect(instance).to.have.property('fieldId');
        // expect(instance.fieldId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sharedFieldName (base name: "sharedFieldName")', function() {
        // TODO: update the code to test the property sharedFieldName
        expect(instance).to.have.property('sharedFieldName');
        // expect(instance.sharedFieldName).to.be(expectedValueLiteral);
      });

      it('should have the property sharedFieldNames (base name: "sharedFieldNames")', function() {
        // TODO: update the code to test the property sharedFieldNames
        expect(instance).to.have.property('sharedFieldNames');
        // expect(instance.sharedFieldNames).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
