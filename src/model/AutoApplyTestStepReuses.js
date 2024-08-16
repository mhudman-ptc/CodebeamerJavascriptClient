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
import TrackerItemReference from './TrackerItemReference';

/**
 * The AutoApplyTestStepReuses model module.
 * @module model/AutoApplyTestStepReuses
 * @version 3.0
 */
export default class AutoApplyTestStepReuses {
  /**
   * Constructs a new <code>AutoApplyTestStepReuses</code>.
   * Specifies which Test Cases are checked for duplicate Steps
   * @alias module:model/AutoApplyTestStepReuses
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AutoApplyTestStepReuses</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutoApplyTestStepReuses} obj Optional instance to populate.
   * @return {module:model/AutoApplyTestStepReuses} The populated <code>AutoApplyTestStepReuses</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AutoApplyTestStepReuses();
      if (data.hasOwnProperty('scanTestCaseLibraries'))
        obj.scanTestCaseLibraries = ApiClient.convertToType(data['scanTestCaseLibraries'], 'Boolean');
      if (data.hasOwnProperty('testCases'))
        obj.testCases = ApiClient.convertToType(data['testCases'], [TrackerItemReference]);
    }
    return obj;
  }
}

/**
 * If it scans/finds the duplicate Steps in Test Case libraries of the user? Note: that only Reusable Steps will be reused from these libraries!
 * @member {Boolean} scanTestCaseLibraries
 */
AutoApplyTestStepReuses.prototype.scanTestCaseLibraries = undefined;

/**
 * The Test Cases to find the duplicated steps inside: if these Test Cases has duplicated Steps these will be converted to Step-Reuses.
 * @member {Array.<module:model/TrackerItemReference>} testCases
 */
AutoApplyTestStepReuses.prototype.testCases = undefined;

