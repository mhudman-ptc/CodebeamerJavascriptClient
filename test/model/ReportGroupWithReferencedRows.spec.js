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
    describe('ReportGroupWithReferencedRows', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ReportGroupWithReferencedRows();
      });

      it('should create an instance of ReportGroupWithReferencedRows', function() {
        // TODO: update the code to test ReportGroupWithReferencedRows
        expect(instance).to.be.a(CodebeamerSwaggerApi.ReportGroupWithReferencedRows);
      });

      it('should have the property groupingLevel (base name: "groupingLevel")', function() {
        // TODO: update the code to test the property groupingLevel
        expect(instance).to.have.property('groupingLevel');
        // expect(instance.groupingLevel).to.be(expectedValueLiteral);
      });

      it('should have the property rows (base name: "rows")', function() {
        // TODO: update the code to test the property rows
        expect(instance).to.have.property('rows');
        // expect(instance.rows).to.be(expectedValueLiteral);
      });

      it('should have the property starRow (base name: "starRow")', function() {
        // TODO: update the code to test the property starRow
        expect(instance).to.have.property('starRow');
        // expect(instance.starRow).to.be(expectedValueLiteral);
      });

    });
  });

}));
