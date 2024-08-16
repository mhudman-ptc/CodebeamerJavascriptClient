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
 * The TrackerFieldServiceDeskField model module.
 * @module model/TrackerFieldServiceDeskField
 * @version 3.0
 */
export default class TrackerFieldServiceDeskField {
  /**
   * Constructs a new <code>TrackerFieldServiceDeskField</code>.
   * Describes the Service Desk related configurations.
   * @alias module:model/TrackerFieldServiceDeskField
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerFieldServiceDeskField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerFieldServiceDeskField} obj Optional instance to populate.
   * @return {module:model/TrackerFieldServiceDeskField} The populated <code>TrackerFieldServiceDeskField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerFieldServiceDeskField();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
TrackerFieldServiceDeskField.prototype.description = undefined;

/**
 * @member {String} label
 */
TrackerFieldServiceDeskField.prototype.label = undefined;

