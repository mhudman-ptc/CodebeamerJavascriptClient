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
    describe('ExportProject', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.ExportProject();
      });

      it('should create an instance of ExportProject', function() {
        // TODO: update the code to test ExportProject
        expect(instance).to.be.a(CodebeamerSwaggerApi.ExportProject);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property selectedTrackerIds (base name: "selectedTrackerIds")', function() {
        // TODO: update the code to test the property selectedTrackerIds
        expect(instance).to.have.property('selectedTrackerIds');
        // expect(instance.selectedTrackerIds).to.be(expectedValueLiteral);
      });

      it('should have the property skipAssociations (base name: "skipAssociations")', function() {
        // TODO: update the code to test the property skipAssociations
        expect(instance).to.have.property('skipAssociations');
        // expect(instance.skipAssociations).to.be(expectedValueLiteral);
      });

      it('should have the property skipReports (base name: "skipReports")', function() {
        // TODO: update the code to test the property skipReports
        expect(instance).to.have.property('skipReports');
        // expect(instance.skipReports).to.be(expectedValueLiteral);
      });

      it('should have the property skipTrackerItems (base name: "skipTrackerItems")', function() {
        // TODO: update the code to test the property skipTrackerItems
        expect(instance).to.have.property('skipTrackerItems');
        // expect(instance.skipTrackerItems).to.be(expectedValueLiteral);
      });

      it('should have the property skipWikiPages (base name: "skipWikiPages")', function() {
        // TODO: update the code to test the property skipWikiPages
        expect(instance).to.have.property('skipWikiPages');
        // expect(instance.skipWikiPages).to.be(expectedValueLiteral);
      });

    });
  });

}));
