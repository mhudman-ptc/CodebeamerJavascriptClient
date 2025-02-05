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
    describe('WorkflowTransition', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.WorkflowTransition();
      });

      it('should create an instance of WorkflowTransition', function() {
        // TODO: update the code to test WorkflowTransition
        expect(instance).to.be.a(CodebeamerSwaggerApi.WorkflowTransition);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property descriptionFormat (base name: "descriptionFormat")', function() {
        // TODO: update the code to test the property descriptionFormat
        expect(instance).to.have.property('descriptionFormat');
        // expect(instance.descriptionFormat).to.be(expectedValueLiteral);
      });

      it('should have the property fromStatus (base name: "fromStatus")', function() {
        // TODO: update the code to test the property fromStatus
        expect(instance).to.have.property('fromStatus');
        // expect(instance.fromStatus).to.be(expectedValueLiteral);
      });

      it('should have the property hidden (base name: "hidden")', function() {
        // TODO: update the code to test the property hidden
        expect(instance).to.have.property('hidden');
        // expect(instance.hidden).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property permissions (base name: "permissions")', function() {
        // TODO: update the code to test the property permissions
        expect(instance).to.have.property('permissions');
        // expect(instance.permissions).to.be(expectedValueLiteral);
      });

      it('should have the property toStatus (base name: "toStatus")', function() {
        // TODO: update the code to test the property toStatus
        expect(instance).to.have.property('toStatus');
        // expect(instance.toStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));
