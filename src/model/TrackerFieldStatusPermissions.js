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
import AccessPermission from './AccessPermission';
import ChoiceOptionReference from './ChoiceOptionReference';

/**
 * The TrackerFieldStatusPermissions model module.
 * @module model/TrackerFieldStatusPermissions
 * @version 3.0
 */
export default class TrackerFieldStatusPermissions {
  /**
   * Constructs a new <code>TrackerFieldStatusPermissions</code>.
   * Field permissions by role for specific status
   * @alias module:model/TrackerFieldStatusPermissions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerFieldStatusPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerFieldStatusPermissions} obj Optional instance to populate.
   * @return {module:model/TrackerFieldStatusPermissions} The populated <code>TrackerFieldStatusPermissions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerFieldStatusPermissions();
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [AccessPermission]);
      if (data.hasOwnProperty('status'))
        obj.status = ChoiceOptionReference.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * Access permissions by role
 * @member {Array.<module:model/AccessPermission>} permissions
 */
TrackerFieldStatusPermissions.prototype.permissions = undefined;

/**
 * @member {module:model/ChoiceOptionReference} status
 */
TrackerFieldStatusPermissions.prototype.status = undefined;

