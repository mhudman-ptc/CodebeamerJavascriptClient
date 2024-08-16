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
 * The TrackerIdIconBody model module.
 * @module model/TrackerIdIconBody
 * @version 3.0
 */
export default class TrackerIdIconBody {
  /**
   * Constructs a new <code>TrackerIdIconBody</code>.
   * @alias module:model/TrackerIdIconBody
   * @class
   * @param icon {Blob} Icon image file
   */
  constructor(icon) {
    this.icon = icon;
  }

  /**
   * Constructs a <code>TrackerIdIconBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerIdIconBody} obj Optional instance to populate.
   * @return {module:model/TrackerIdIconBody} The populated <code>TrackerIdIconBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerIdIconBody();
      if (data.hasOwnProperty('icon'))
        obj.icon = ApiClient.convertToType(data['icon'], 'Blob');
    }
    return obj;
  }
}

/**
 * Icon image file
 * @member {Blob} icon
 */
TrackerIdIconBody.prototype.icon = undefined;

