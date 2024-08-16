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
    describe('TrackerItemFieldMappingPair', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TrackerItemFieldMappingPair();
      });

      it('should create an instance of TrackerItemFieldMappingPair', function() {
        // TODO: update the code to test TrackerItemFieldMappingPair
        expect(instance).to.be.a(CodebeamerSwaggerApi.TrackerItemFieldMappingPair);
      });

      it('should have the property sourceField (base name: "sourceField")', function() {
        // TODO: update the code to test the property sourceField
        expect(instance).to.have.property('sourceField');
        // expect(instance.sourceField).to.be(expectedValueLiteral);
      });

      it('should have the property targetField (base name: "targetField")', function() {
        // TODO: update the code to test the property targetField
        expect(instance).to.have.property('targetField');
        // expect(instance.targetField).to.be(expectedValueLiteral);
      });

    });
  });

}));
