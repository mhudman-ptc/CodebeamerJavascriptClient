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
    describe('JsonView', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.JsonView();
      });

      it('should create an instance of JsonView', function() {
        // TODO: update the code to test JsonView
        expect(instance).to.be.a(CodebeamerSwaggerApi.JsonView);
      });

      it('should have the property contentType (base name: "contentType")', function() {
        // TODO: update the code to test the property contentType
        expect(instance).to.have.property('contentType');
        // expect(instance.contentType).to.be(expectedValueLiteral);
      });

      it('should have the property json (base name: "json")', function() {
        // TODO: update the code to test the property json
        expect(instance).to.have.property('json');
        // expect(instance.json).to.be(expectedValueLiteral);
      });

      it('should have the property jsonObject (base name: "jsonObject")', function() {
        // TODO: update the code to test the property jsonObject
        expect(instance).to.have.property('jsonObject');
        // expect(instance.jsonObject).to.be(expectedValueLiteral);
      });

    });
  });

}));
