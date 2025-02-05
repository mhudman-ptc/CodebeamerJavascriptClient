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
    describe('LayoutField', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.LayoutField();
      });

      it('should create an instance of LayoutField', function() {
        // TODO: update the code to test LayoutField
        expect(instance).to.be.a(CodebeamerSwaggerApi.LayoutField);
      });

      it('should have the property field (base name: "field")', function() {
        // TODO: update the code to test the property field
        expect(instance).to.have.property('field');
        // expect(instance.field).to.be(expectedValueLiteral);
      });

      it('should have the property fieldId (base name: "fieldId")', function() {
        // TODO: update the code to test the property fieldId
        expect(instance).to.have.property('fieldId');
        // expect(instance.fieldId).to.be(expectedValueLiteral);
      });

      it('should have the property width (base name: "width")', function() {
        // TODO: update the code to test the property width
        expect(instance).to.have.property('width');
        // expect(instance.width).to.be(expectedValueLiteral);
      });

    });
  });

}));
