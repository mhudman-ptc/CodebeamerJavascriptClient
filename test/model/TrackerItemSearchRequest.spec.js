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
    describe('TrackerItemSearchRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TrackerItemSearchRequest();
      });

      it('should create an instance of TrackerItemSearchRequest', function() {
        // TODO: update the code to test TrackerItemSearchRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.TrackerItemSearchRequest);
      });

      it('should have the property baselineId (base name: "baselineId")', function() {
        // TODO: update the code to test the property baselineId
        expect(instance).to.have.property('baselineId');
        // expect(instance.baselineId).to.be(expectedValueLiteral);
      });

      it('should have the property page (base name: "page")', function() {
        // TODO: update the code to test the property page
        expect(instance).to.have.property('page');
        // expect(instance.page).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "pageSize")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

      it('should have the property queryString (base name: "queryString")', function() {
        // TODO: update the code to test the property queryString
        expect(instance).to.have.property('queryString');
        // expect(instance.queryString).to.be(expectedValueLiteral);
      });

    });
  });

}));
