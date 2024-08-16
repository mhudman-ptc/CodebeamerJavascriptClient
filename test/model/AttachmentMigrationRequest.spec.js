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
    describe('AttachmentMigrationRequest', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.AttachmentMigrationRequest();
      });

      it('should create an instance of AttachmentMigrationRequest', function() {
        // TODO: update the code to test AttachmentMigrationRequest
        expect(instance).to.be.a(CodebeamerSwaggerApi.AttachmentMigrationRequest);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
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

      it('should have the property files (base name: "files")', function() {
        // TODO: update the code to test the property files
        expect(instance).to.have.property('files');
        // expect(instance.files).to.be(expectedValueLiteral);
      });

      it('should have the property migrationAction (base name: "migrationAction")', function() {
        // TODO: update the code to test the property migrationAction
        expect(instance).to.have.property('migrationAction');
        // expect(instance.migrationAction).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedAt (base name: "modifiedAt")', function() {
        // TODO: update the code to test the property modifiedAt
        expect(instance).to.have.property('modifiedAt');
        // expect(instance.modifiedAt).to.be(expectedValueLiteral);
      });

      it('should have the property modifiedBy (base name: "modifiedBy")', function() {
        // TODO: update the code to test the property modifiedBy
        expect(instance).to.have.property('modifiedBy');
        // expect(instance.modifiedBy).to.be(expectedValueLiteral);
      });

      it('should have the property targetItem (base name: "targetItem")', function() {
        // TODO: update the code to test the property targetItem
        expect(instance).to.have.property('targetItem');
        // expect(instance.targetItem).to.be(expectedValueLiteral);
      });

    });
  });

}));
