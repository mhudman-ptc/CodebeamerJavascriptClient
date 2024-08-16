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
    describe('TrackerBasicInformation', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.TrackerBasicInformation();
      });

      it('should create an instance of TrackerBasicInformation', function() {
        // TODO: update the code to test TrackerBasicInformation
        expect(instance).to.be.a(CodebeamerSwaggerApi.TrackerBasicInformation);
      });

      it('should have the property alwaysUseQuickTransitions (base name: "alwaysUseQuickTransitions")', function() {
        // TODO: update the code to test the property alwaysUseQuickTransitions
        expect(instance).to.have.property('alwaysUseQuickTransitions');
        // expect(instance.alwaysUseQuickTransitions).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property defaultLayout (base name: "defaultLayout")', function() {
        // TODO: update the code to test the property defaultLayout
        expect(instance).to.have.property('defaultLayout');
        // expect(instance.defaultLayout).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property hidden (base name: "hidden")', function() {
        // TODO: update the code to test the property hidden
        expect(instance).to.have.property('hidden');
        // expect(instance.hidden).to.be(expectedValueLiteral);
      });

      it('should have the property inboxId (base name: "inboxId")', function() {
        // TODO: update the code to test the property inboxId
        expect(instance).to.have.property('inboxId');
        // expect(instance.inboxId).to.be(expectedValueLiteral);
      });

      it('should have the property issueTypeId (base name: "issueTypeId")', function() {
        // TODO: update the code to test the property issueTypeId
        expect(instance).to.have.property('issueTypeId');
        // expect(instance.issueTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property key (base name: "key")', function() {
        // TODO: update the code to test the property key
        expect(instance).to.have.property('key');
        // expect(instance.key).to.be(expectedValueLiteral);
      });

      it('should have the property locked (base name: "locked")', function() {
        // TODO: update the code to test the property locked
        expect(instance).to.have.property('locked');
        // expect(instance.locked).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property onlyWorkflowActionsCanCreateNewReferringItems (base name: "onlyWorkflowActionsCanCreateNewReferringItems")', function() {
        // TODO: update the code to test the property onlyWorkflowActionsCanCreateNewReferringItems
        expect(instance).to.have.property('onlyWorkflowActionsCanCreateNewReferringItems');
        // expect(instance.onlyWorkflowActionsCanCreateNewReferringItems).to.be(expectedValueLiteral);
      });

      it('should have the property projectId (base name: "projectId")', function() {
        // TODO: update the code to test the property projectId
        expect(instance).to.have.property('projectId');
        // expect(instance.projectId).to.be(expectedValueLiteral);
      });

      it('should have the property sharedInWorkingSets (base name: "sharedInWorkingSets")', function() {
        // TODO: update the code to test the property sharedInWorkingSets
        expect(instance).to.have.property('sharedInWorkingSets');
        // expect(instance.sharedInWorkingSets).to.be(expectedValueLiteral);
      });

      it('should have the property showAncestorItems (base name: "showAncestorItems")', function() {
        // TODO: update the code to test the property showAncestorItems
        expect(instance).to.have.property('showAncestorItems');
        // expect(instance.showAncestorItems).to.be(expectedValueLiteral);
      });

      it('should have the property showDescendantItems (base name: "showDescendantItems")', function() {
        // TODO: update the code to test the property showDescendantItems
        expect(instance).to.have.property('showDescendantItems');
        // expect(instance.showDescendantItems).to.be(expectedValueLiteral);
      });

      it('should have the property template (base name: "template")', function() {
        // TODO: update the code to test the property template
        expect(instance).to.have.property('template');
        // expect(instance.template).to.be(expectedValueLiteral);
      });

      it('should have the property templateId (base name: "templateId")', function() {
        // TODO: update the code to test the property templateId
        expect(instance).to.have.property('templateId');
        // expect(instance.templateId).to.be(expectedValueLiteral);
      });

      it('should have the property trackerId (base name: "trackerId")', function() {
        // TODO: update the code to test the property trackerId
        expect(instance).to.have.property('trackerId');
        // expect(instance.trackerId).to.be(expectedValueLiteral);
      });

      it('should have the property workflowIsActive (base name: "workflowIsActive")', function() {
        // TODO: update the code to test the property workflowIsActive
        expect(instance).to.have.property('workflowIsActive');
        // expect(instance.workflowIsActive).to.be(expectedValueLiteral);
      });

    });
  });

}));
