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

/**
 * The TestRunResult model module.
 * @module model/TestRunResult
 * @version 3.0
 */
export default class TestRunResult {
  /**
   * Constructs a new <code>TestRunResult</code>.
   * Multiple Test Runs
   * @alias module:model/TestRunResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TestRunResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TestRunResult} obj Optional instance to populate.
   * @return {module:model/TestRunResult} The populated <code>TestRunResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TestRunResult();
      if (data.hasOwnProperty('testRuns'))
        obj.testRuns = ApiClient.convertToType(data['testRuns'], [TrackerItem]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TrackerItem>} testRuns
 */
TestRunResult.prototype.testRuns = undefined;

