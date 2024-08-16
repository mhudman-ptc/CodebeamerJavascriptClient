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
import ApiClient from '../ApiClient';
import TrackerItem from './TrackerItem';
import TrackerItemReference from './TrackerItemReference';

/**
 * The CreateTestRunFromTestSetsRequest model module.
 * @module model/CreateTestRunFromTestSetsRequest
 * @version 3.0
 */
export default class CreateTestRunFromTestSetsRequest {
  /**
   * Constructs a new <code>CreateTestRunFromTestSetsRequest</code>.
   * Request model to create a test run from multiple test sets
   * @alias module:model/CreateTestRunFromTestSetsRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateTestRunFromTestSetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTestRunFromTestSetsRequest} obj Optional instance to populate.
   * @return {module:model/CreateTestRunFromTestSetsRequest} The populated <code>CreateTestRunFromTestSetsRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTestRunFromTestSetsRequest();
      if (data.hasOwnProperty('runOnlyAcceptedTestCases'))
        obj.runOnlyAcceptedTestCases = ApiClient.convertToType(data['runOnlyAcceptedTestCases'], 'Boolean');
      if (data.hasOwnProperty('testRunModel'))
        obj.testRunModel = TrackerItem.constructFromObject(data['testRunModel']);
      if (data.hasOwnProperty('testSetRefs'))
        obj.testSetRefs = ApiClient.convertToType(data['testSetRefs'], [TrackerItemReference]);
    }
    return obj;
  }
}

/**
 * Generate Test Runs only from accepted Test Cases.
 * @member {Boolean} runOnlyAcceptedTestCases
 * @default false
 */
CreateTestRunFromTestSetsRequest.prototype.runOnlyAcceptedTestCases = false;

/**
 * @member {module:model/TrackerItem} testRunModel
 */
CreateTestRunFromTestSetsRequest.prototype.testRunModel = undefined;

/**
 * Test set ids to include into the test run. Only the first test set will be considered.
 * @member {Array.<module:model/TrackerItemReference>} testSetRefs
 */
CreateTestRunFromTestSetsRequest.prototype.testSetRefs = undefined;

