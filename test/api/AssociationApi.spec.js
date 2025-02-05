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

  beforeEach(function() {
    instance = new CodebeamerSwaggerApi.AssociationApi();
  });

  describe('(package)', function() {
    describe('AssociationApi', function() {
      describe('createAssociation', function() {
        it('should call createAssociation successfully', function(done) {
          // TODO: uncomment, update parameter values for createAssociation call and complete the assertions
          /*

          instance.createAssociation(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.Association);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAssociation', function() {
        it('should call deleteAssociation successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAssociation call
          /*

          instance.deleteAssociation(associationId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAssociation', function() {
        it('should call getAssociation successfully', function(done) {
          // TODO: uncomment, update parameter values for getAssociation call and complete the assertions
          /*

          instance.getAssociation(associationId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.Association);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAssociationHistory', function() {
        it('should call getAssociationHistory successfully', function(done) {
          // TODO: uncomment, update parameter values for getAssociationHistory call and complete the assertions
          /*
          var opts = {};

          instance.getAssociationHistory(associationId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.ArtifactRevisionSearchResult);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAssociationType', function() {
        it('should call getAssociationType successfully', function(done) {
          // TODO: uncomment, update parameter values for getAssociationType call and complete the assertions
          /*

          instance.getAssociationType(associationTypeId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.AssociationType);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAvailableAssociationTypes', function() {
        it('should call getAvailableAssociationTypes successfully', function(done) {
          // TODO: uncomment getAvailableAssociationTypes call and complete the assertions
          /*

          instance.getAvailableAssociationTypes(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(CodebeamerSwaggerApi.AssociationType);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAssociation', function() {
        it('should call updateAssociation successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAssociation call and complete the assertions
          /*

          instance.updateAssociation(body, associationId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.Association);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
