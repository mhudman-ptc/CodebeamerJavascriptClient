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
import BaseTrackerFieldPermission from './BaseTrackerFieldPermission';

/**
 * The SameAsFieldPermission model module.
 * @module model/SameAsFieldPermission
 * @version 3.0
 */
export default class SameAsFieldPermission extends BaseTrackerFieldPermission {
  /**
   * Constructs a new <code>SameAsFieldPermission</code>.
   * Describes a Same As field permission.
   * @alias module:model/SameAsFieldPermission
   * @class
   * @extends module:model/BaseTrackerFieldPermission
   * @param type {} 
   */
  constructor(type) {
    super(type);
  }

  /**
   * Constructs a <code>SameAsFieldPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SameAsFieldPermission} obj Optional instance to populate.
   * @return {module:model/SameAsFieldPermission} The populated <code>SameAsFieldPermission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SameAsFieldPermission();
      BaseTrackerFieldPermission.constructFromObject(data, obj);
      if (data.hasOwnProperty('sameAsId'))
        obj.sameAsId = ApiClient.convertToType(data['sameAsId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} sameAsId
 */
SameAsFieldPermission.prototype.sameAsId = undefined;

