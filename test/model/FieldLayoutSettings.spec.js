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
    describe('FieldLayoutSettings', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.FieldLayoutSettings();
      });

      it('should create an instance of FieldLayoutSettings', function() {
        // TODO: update the code to test FieldLayoutSettings
        expect(instance).to.be.a(CodebeamerSwaggerApi.FieldLayoutSettings);
      });

      it('should have the property groups (base name: "groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property showDefault (base name: "showDefault")', function() {
        // TODO: update the code to test the property showDefault
        expect(instance).to.have.property('showDefault');
        // expect(instance.showDefault).to.be(expectedValueLiteral);
      });

    });
  });

}));
