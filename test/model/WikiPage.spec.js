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
    describe('WikiPage', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.WikiPage();
      });

      it('should create an instance of WikiPage', function() {
        // TODO: update the code to test WikiPage
        expect(instance).to.be.a(CodebeamerSwaggerApi.WikiPage);
      });

      it('should have the property changeComment (base name: "changeComment")', function() {
        // TODO: update the code to test the property changeComment
        expect(instance).to.have.property('changeComment');
        // expect(instance.changeComment).to.be(expectedValueLiteral);
      });

      it('should have the property childPages (base name: "childPages")', function() {
        // TODO: update the code to test the property childPages
        expect(instance).to.have.property('childPages');
        // expect(instance.childPages).to.be(expectedValueLiteral);
      });

      it('should have the property comments (base name: "comments")', function() {
        // TODO: update the code to test the property comments
        expect(instance).to.have.property('comments');
        // expect(instance.comments).to.be(expectedValueLiteral);
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

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property markup (base name: "markup")', function() {
        // TODO: update the code to test the property markup
        expect(instance).to.have.property('markup');
        // expect(instance.markup).to.be(expectedValueLiteral);
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

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property parent (base name: "parent")', function() {
        // TODO: update the code to test the property parent
        expect(instance).to.have.property('parent');
        // expect(instance.parent).to.be(expectedValueLiteral);
      });

      it('should have the property project (base name: "project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

    });
  });

}));
