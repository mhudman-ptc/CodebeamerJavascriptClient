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

/**
 * The BackgroundJobStep model module.
 * @module model/BackgroundJobStep
 * @version 3.0
 */
export default class BackgroundJobStep {
  /**
   * Constructs a new <code>BackgroundJobStep</code>.
   * Information about a background job step
   * @alias module:model/BackgroundJobStep
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BackgroundJobStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BackgroundJobStep} obj Optional instance to populate.
   * @return {module:model/BackgroundJobStep} The populated <code>BackgroundJobStep</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BackgroundJobStep();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], 'String');
      if (data.hasOwnProperty('resultMessage'))
        obj.resultMessage = ApiClient.convertToType(data['resultMessage'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Id of the background job step
 * @member {Number} id
 */
BackgroundJobStep.prototype.id = undefined;

/**
 * Name of the background job step
 * @member {String} name
 */
BackgroundJobStep.prototype.name = undefined;

/**
 * Allowed values for the <code>result</code> property.
 * @enum {String}
 * @readonly
 */
BackgroundJobStep.ResultEnum = {
  /**
   * value: "SUCCESSFUL"
   * @const
   */
  SUCCESSFUL: "SUCCESSFUL",

  /**
   * value: "FAILED"
   * @const
   */
  FAILED: "FAILED"
};
/**
 * Result of a background job step
 * @member {module:model/BackgroundJobStep.ResultEnum} result
 */
BackgroundJobStep.prototype.result = undefined;

/**
 * Result message of the background job step
 * @member {String} resultMessage
 */
BackgroundJobStep.prototype.resultMessage = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
BackgroundJobStep.StatusEnum = {
  /**
   * value: "NEW"
   * @const
   */
  NEW: "NEW",

  /**
   * value: "IN_PROGRESS"
   * @const
   */
  IN_PROGRESS: "IN_PROGRESS",

  /**
   * value: "FINISHED"
   * @const
   */
  FINISHED: "FINISHED"
};
/**
 * Status of a background job step
 * @member {module:model/BackgroundJobStep.StatusEnum} status
 */
BackgroundJobStep.prototype.status = undefined;

