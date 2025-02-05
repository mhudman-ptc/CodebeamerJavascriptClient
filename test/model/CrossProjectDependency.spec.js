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
    describe('CrossProjectDependency', function() {
      beforeEach(function() {
        instance = new CodebeamerSwaggerApi.CrossProjectDependency();
      });

      it('should create an instance of CrossProjectDependency', function() {
        // TODO: update the code to test CrossProjectDependency
        expect(instance).to.be.a(CodebeamerSwaggerApi.CrossProjectDependency);
      });

      it('should have the property referredFrom (base name: "referredFrom")', function() {
        // TODO: update the code to test the property referredFrom
        expect(instance).to.have.property('referredFrom');
        // expect(instance.referredFrom).to.be(expectedValueLiteral);
      });

      it('should have the property sourceProject (base name: "sourceProject")', function() {
        // TODO: update the code to test the property sourceProject
        expect(instance).to.have.property('sourceProject');
        // expect(instance.sourceProject).to.be(expectedValueLiteral);
      });

      it('should have the property targetProject (base name: "targetProject")', function() {
        // TODO: update the code to test the property targetProject
        expect(instance).to.have.property('targetProject');
        // expect(instance.targetProject).to.be(expectedValueLiteral);
      });

    });
  });

}));
