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
    describe('AuditPermissionsRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.AuditPermissionsRequest();
      });

      it('should create an instance of AuditPermissionsRequest', function() {
        // TODO: update the code to test AuditPermissionsRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.AuditPermissionsRequest);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property eventTypes (base name: "eventTypes")', function() {
        // TODO: update the code to test the property eventTypes
        expect(instance).to.have.property('eventTypes');
        // expect(instance.eventTypes).to.be(expectedValueLiteral);
      });

      it('should have the property fromDate (base name: "fromDate")', function() {
        // TODO: update the code to test the property fromDate
        expect(instance).to.have.property('fromDate');
        // expect(instance.fromDate).to.be(expectedValueLiteral);
      });

      it('should have the property projectIds (base name: "projectIds")', function() {
        // TODO: update the code to test the property projectIds
        expect(instance).to.have.property('projectIds');
        // expect(instance.projectIds).to.be(expectedValueLiteral);
      });

      it('should have the property showChanges (base name: "showChanges")', function() {
        // TODO: update the code to test the property showChanges
        expect(instance).to.have.property('showChanges');
        // expect(instance.showChanges).to.be(expectedValueLiteral);
      });

      it('should have the property targetUserNames (base name: "targetUserNames")', function() {
        // TODO: update the code to test the property targetUserNames
        expect(instance).to.have.property('targetUserNames');
        // expect(instance.targetUserNames).to.be(expectedValueLiteral);
      });

      it('should have the property toDate (base name: "toDate")', function() {
        // TODO: update the code to test the property toDate
        expect(instance).to.have.property('toDate');
        // expect(instance.toDate).to.be(expectedValueLiteral);
      });

      it('should have the property trackerIds (base name: "trackerIds")', function() {
        // TODO: update the code to test the property trackerIds
        expect(instance).to.have.property('trackerIds');
        // expect(instance.trackerIds).to.be(expectedValueLiteral);
      });

      it('should have the property userNames (base name: "userNames")', function() {
        // TODO: update the code to test the property userNames
        expect(instance).to.have.property('userNames');
        // expect(instance.userNames).to.be(expectedValueLiteral);
      });

    });
  });

}));
