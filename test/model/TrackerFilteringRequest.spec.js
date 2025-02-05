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
    describe('TrackerFilteringRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TrackerFilteringRequest();
      });

      it('should create an instance of TrackerFilteringRequest', function() {
        // TODO: update the code to test TrackerFilteringRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.TrackerFilteringRequest);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property hidden (base name: "hidden")', function() {
        // TODO: update the code to test the property hidden
        expect(instance).to.have.property('hidden');
        // expect(instance.hidden).to.be(expectedValueLiteral);
      });

      it('should have the property keyName (base name: "keyName")', function() {
        // TODO: update the code to test the property keyName
        expect(instance).to.have.property('keyName');
        // expect(instance.keyName).to.be(expectedValueLiteral);
      });

      it('should have the property types (base name: "types")', function() {
        // TODO: update the code to test the property types
        expect(instance).to.have.property('types');
        // expect(instance.types).to.be(expectedValueLiteral);
      });

    });
  });

}));
