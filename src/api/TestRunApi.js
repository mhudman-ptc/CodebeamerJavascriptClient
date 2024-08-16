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
import ApiClient from "../ApiClient";
import AutomatedTestRunRequest from '../model/AutomatedTestRunRequest';
import BadRequestException from '../model/BadRequestException';
import CreateTestRunFromTestSetsRequest from '../model/CreateTestRunFromTestSetsRequest';
import CreateTestRunRequest from '../model/CreateTestRunRequest';
import InternalServerErrorException from '../model/InternalServerErrorException';
import ResourceForbiddenException from '../model/ResourceForbiddenException';
import ResourceLockedException from '../model/ResourceLockedException';
import ResourceNotFoundException from '../model/ResourceNotFoundException';
import ResourceUnauthorizedException from '../model/ResourceUnauthorizedException';
import TestRunResult from '../model/TestRunResult';
import TooManyRequestsException from '../model/TooManyRequestsException';
import TrackerItem from '../model/TrackerItem';
import UpdateTestRunRequest from '../model/UpdateTestRunRequest';

/**
* TestRun service.
* @module api/TestRunApi
* @version 3.0
*/
export default class TestRunApi {

    /**
    * Constructs a new TestRunApi. 
    * @alias module:api/TestRunApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createTestRunForTestCase operation.
     * @callback moduleapi/TestRunApi~createTestRunForTestCaseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackerItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new test run for test cases or test sets
     * For multiple test sets please use trackers/{testRunTrackerId}/testruns/generatefromtestset endpoint.
     * @param {module:model/CreateTestRunRequest} body 
     * @param {Number} testRunTrackerId 
     * @param {module:api/TestRunApi~createTestRunForTestCaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTestRunForTestCase(body, testRunTrackerId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTestRunForTestCase");
      }
      // verify the required parameter 'testRunTrackerId' is set
      if (testRunTrackerId === undefined || testRunTrackerId === null) {
        throw new Error("Missing the required parameter 'testRunTrackerId' when calling createTestRunForTestCase");
      }

      let pathParams = {
        'testRunTrackerId': testRunTrackerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TrackerItem;

      return this.apiClient.callApi(
        '/v3/trackers/{testRunTrackerId}/testruns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createTestRunForTestSets operation.
     * @callback moduleapi/TestRunApi~createTestRunForTestSetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestRunResult{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new test run for test cases or test sets
     * @param {module:model/CreateTestRunFromTestSetsRequest} body 
     * @param {Number} testRunTrackerId 
     * @param {module:api/TestRunApi~createTestRunForTestSetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTestRunForTestSets(body, testRunTrackerId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTestRunForTestSets");
      }
      // verify the required parameter 'testRunTrackerId' is set
      if (testRunTrackerId === undefined || testRunTrackerId === null) {
        throw new Error("Missing the required parameter 'testRunTrackerId' when calling createTestRunForTestSets");
      }

      let pathParams = {
        'testRunTrackerId': testRunTrackerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TestRunResult;

      return this.apiClient.callApi(
        '/v3/trackers/{testRunTrackerId}/testruns/generatefromtestset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTestRunResult operation.
     * @callback moduleapi/TestRunApi~updateTestRunResultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackerItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update result of a Test Run. 
     * @param {module:model/UpdateTestRunRequest} body 
     * @param {Number} testRunId 
     * @param {module:api/TestRunApi~updateTestRunResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTestRunResult(body, testRunId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTestRunResult");
      }
      // verify the required parameter 'testRunId' is set
      if (testRunId === undefined || testRunId === null) {
        throw new Error("Missing the required parameter 'testRunId' when calling updateTestRunResult");
      }

      let pathParams = {
        'testRunId': testRunId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TrackerItem;

      return this.apiClient.callApi(
        '/v3/testruns/{testRunId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the uploadAutomatedTestResults operation.
     * @callback moduleapi/TestRunApi~uploadAutomatedTestResultsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackerItem{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new test run for large number of automated test cases
     * Upload large amount of automated test case run results into a single test run. This process may take a while, please check your proxy settings to prevent timeout.
     * @param {module:model/AutomatedTestRunRequest} body 
     * @param {Number} testRunTrackerId 
     * @param {module:api/TestRunApi~uploadAutomatedTestResultsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    uploadAutomatedTestResults(body, testRunTrackerId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadAutomatedTestResults");
      }
      // verify the required parameter 'testRunTrackerId' is set
      if (testRunTrackerId === undefined || testRunTrackerId === null) {
        throw new Error("Missing the required parameter 'testRunTrackerId' when calling uploadAutomatedTestResults");
      }

      let pathParams = {
        'testRunTrackerId': testRunTrackerId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TrackerItem;

      return this.apiClient.callApi(
        '/v3/trackers/{testRunTrackerId}/automatedtestruns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}