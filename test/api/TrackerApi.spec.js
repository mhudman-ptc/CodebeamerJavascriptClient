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
    instance = new CodebeamerSwaggerApi.TrackerApi();
  });

  describe('(package)', function() {
    describe('TrackerApi', function() {
      describe('deleteTracker', function() {
        it('should call deleteTracker successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteTracker call
          /*

          instance.deleteTracker(trackerId, function(error, data, response) {
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
      describe('getChoiceOption', function() {
        it('should call getChoiceOption successfully', function(done) {
          // TODO: uncomment, update parameter values for getChoiceOption call and complete the assertions
          /*

          instance.getChoiceOption(trackerId, fieldId, optionId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.ChoiceOptionReference);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getItemsByTracker', function() {
        it('should call getItemsByTracker successfully', function(done) {
          // TODO: uncomment, update parameter values for getItemsByTracker call and complete the assertions
          /*
          var opts = {};

          instance.getItemsByTracker(trackerId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.TrackerItemReferenceSearchResult);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTracker', function() {
        it('should call getTracker successfully', function(done) {
          // TODO: uncomment, update parameter values for getTracker call and complete the assertions
          /*

          instance.getTracker(trackerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.Tracker);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerBaselines', function() {
        it('should call getTrackerBaselines successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerBaselines call and complete the assertions
          /*

          instance.getTrackerBaselines(trackerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.ReferenceSearchResult);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerConfiguration', function() {
        it('should call getTrackerConfiguration successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerConfiguration call and complete the assertions
          /*

          instance.getTrackerConfiguration(trackerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.TrackerConfiguration);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerField', function() {
        it('should call getTrackerField successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerField call and complete the assertions
          /*

          instance.getTrackerField(trackerId, fieldId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.AbstractField);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerFieldPermissions', function() {
        it('should call getTrackerFieldPermissions successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerFieldPermissions call and complete the assertions
          /*
          var opts = {};

          instance.getTrackerFieldPermissions(trackerId, fieldId, opts, function(error, data, response) {
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
              expect(data).to.be.a(CodebeamerSwaggerApi.TrackerFieldStatusPermissions);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerFields', function() {
        it('should call getTrackerFields successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerFields call and complete the assertions
          /*

          instance.getTrackerFields(trackerId, function(error, data, response) {
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
              expect(data).to.be.a(CodebeamerSwaggerApi.FieldReference);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerFieldsPermissions', function() {
        it('should call getTrackerFieldsPermissions successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerFieldsPermissions call and complete the assertions
          /*
          var opts = {};

          instance.getTrackerFieldsPermissions(trackerId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.TrackerFieldsStatusPermissions);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerOutline', function() {
        it('should call getTrackerOutline successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerOutline call and complete the assertions
          /*
          var opts = {};

          instance.getTrackerOutline(trackerId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.OutlineItemSearchResult);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerSchema', function() {
        it('should call getTrackerSchema successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerSchema call and complete the assertions
          /*

          instance.getTrackerSchema(trackerId, function(error, data, response) {
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
              expect(data).to.be.a(CodebeamerSwaggerApi.AbstractField);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerTransitions', function() {
        it('should call getTrackerTransitions successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerTransitions call and complete the assertions
          /*
          var opts = {};

          instance.getTrackerTransitions(trackerId, opts, function(error, data, response) {
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
              expect(data).to.be.a(CodebeamerSwaggerApi.WorkflowTransition);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerType', function() {
        it('should call getTrackerType successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerType call and complete the assertions
          /*

          instance.getTrackerType(trackerTypeId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.TrackerType);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getTrackerTypes', function() {
        it('should call getTrackerTypes successfully', function(done) {
          // TODO: uncomment, update parameter values for getTrackerTypes call and complete the assertions
          /*
          var opts = {};

          instance.getTrackerTypes(opts, function(error, data, response) {
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
              expect(data).to.be.a(CodebeamerSwaggerApi.TrackerTypeReference);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('postTrackerConfiguration', function() {
        it('should call postTrackerConfiguration successfully', function(done) {
          // TODO: uncomment, update parameter values for postTrackerConfiguration call and complete the assertions
          /*

          instance.postTrackerConfiguration(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.TrackerConfiguration);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTracker', function() {
        it('should call updateTracker successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTracker call and complete the assertions
          /*

          instance.updateTracker(body, trackerId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(CodebeamerSwaggerApi.Tracker);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateTrackerIcon', function() {
        it('should call updateTrackerIcon successfully', function(done) {
          // TODO: uncomment, update parameter values for updateTrackerIcon call
          /*
          var opts = {};

          instance.updateTrackerIcon(trackerId, opts, function(error, data, response) {
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
    });
  });

}));
