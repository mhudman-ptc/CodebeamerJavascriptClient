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
 * The FailedOperation model module.
 * @module model/FailedOperation
 * @version 3.0
 */
export default class FailedOperation {
  /**
   * Constructs a new <code>FailedOperation</code>.
   * Holds the details of a failed operation
   * @alias module:model/FailedOperation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FailedOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FailedOperation} obj Optional instance to populate.
   * @return {module:model/FailedOperation} The populated <code>FailedOperation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FailedOperation();
      if (data.hasOwnProperty('exceptionMessage'))
        obj.exceptionMessage = ApiClient.convertToType(data['exceptionMessage'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * Exception message
 * @member {String} exceptionMessage
 */
FailedOperation.prototype.exceptionMessage = undefined;

/**
 * Entity id
 * @member {Number} id
 */
FailedOperation.prototype.id = undefined;

