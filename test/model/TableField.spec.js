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
    describe('TableField', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TableField();
      });

      it('should create an instance of TableField', function() {
        // TODO: update the code to test TableField
        expect(instance).to.be.a(CodebeamerSwaggerApi.TableField);
      });

      it('should have the property columns (base name: "columns")', function() {
        // TODO: update the code to test the property columns
        expect(instance).to.have.property('columns');
        // expect(instance.columns).to.be(expectedValueLiteral);
      });

    });
  });

}));
