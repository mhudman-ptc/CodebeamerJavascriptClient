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
    describe('ReportPagingInformation', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ReportPagingInformation();
      });

      it('should create an instance of ReportPagingInformation', function() {
        // TODO: update the code to test ReportPagingInformation
        expect(instance).to.be.a(CodebeamerSwaggerApi.ReportPagingInformation);
      });

      it('should have the property page (base name: "page")', function() {
        // TODO: update the code to test the property page
        expect(instance).to.have.property('page');
        // expect(instance.page).to.be(expectedValueLiteral);
      });

      it('should have the property pageCount (base name: "pageCount")', function() {
        // TODO: update the code to test the property pageCount
        expect(instance).to.have.property('pageCount');
        // expect(instance.pageCount).to.be(expectedValueLiteral);
      });

      it('should have the property pageSize (base name: "pageSize")', function() {
        // TODO: update the code to test the property pageSize
        expect(instance).to.have.property('pageSize');
        // expect(instance.pageSize).to.be(expectedValueLiteral);
      });

    });
  });

}));
