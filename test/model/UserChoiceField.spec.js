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
    describe('UserChoiceField', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.UserChoiceField();
      });

      it('should create an instance of UserChoiceField', function() {
        // TODO: update the code to test UserChoiceField
        expect(instance).to.be.a(CodebeamerSwaggerApi.UserChoiceField);
      });

      it('should have the property multipleValues (base name: "multipleValues")', function() {
        // TODO: update the code to test the property multipleValues
        expect(instance).to.have.property('multipleValues');
        // expect(instance.multipleValues).to.be(expectedValueLiteral);
      });

      it('should have the property referenceType (base name: "referenceType")', function() {
        // TODO: update the code to test the property referenceType
        expect(instance).to.have.property('referenceType');
        // expect(instance.referenceType).to.be(expectedValueLiteral);
      });

    });
  });

}));
