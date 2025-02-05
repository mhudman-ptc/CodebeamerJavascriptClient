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
import AbstractFieldValue from './AbstractFieldValue';

/**
 * The ReferredTestStepFieldValue model module.
 * @module model/ReferredTestStepFieldValue
 * @version 3.0
 */
export default class ReferredTestStepFieldValue extends AbstractFieldValue {
  /**
   * Constructs a new <code>ReferredTestStepFieldValue</code>.
   * Value container of a referred test step
   * @alias module:model/ReferredTestStepFieldValue
   * @class
   * @extends module:model/AbstractFieldValue
   * @param referredStepId {} Id of the referred test step
   * @param referredTestCaseId {} Id of the test case where the referred test step comes
   * @param type {} Type of the field
   */
  constructor(referredStepId, referredTestCaseId, type) {
    super(type);
    this.referredStepId = referredStepId;
    this.referredTestCaseId = referredTestCaseId;
  }

  /**
   * Constructs a <code>ReferredTestStepFieldValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferredTestStepFieldValue} obj Optional instance to populate.
   * @return {module:model/ReferredTestStepFieldValue} The populated <code>ReferredTestStepFieldValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReferredTestStepFieldValue();
      AbstractFieldValue.constructFromObject(data, obj);
      if (data.hasOwnProperty('referredStepId'))
        obj.referredStepId = ApiClient.convertToType(data['referredStepId'], 'String');
      if (data.hasOwnProperty('referredTestCaseId'))
        obj.referredTestCaseId = ApiClient.convertToType(data['referredTestCaseId'], 'Number');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * Id of the referred test step
 * @member {String} referredStepId
 */
ReferredTestStepFieldValue.prototype.referredStepId = undefined;

/**
 * Id of the test case where the referred test step comes
 * @member {Number} referredTestCaseId
 */
ReferredTestStepFieldValue.prototype.referredTestCaseId = undefined;

/**
 * Id of the Test Step
 * @member {String} value
 */
ReferredTestStepFieldValue.prototype.value = undefined;

