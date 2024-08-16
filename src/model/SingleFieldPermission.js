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
import TrackerFieldPermissionAccessPermission from './TrackerFieldPermissionAccessPermission';

/**
 * The SingleFieldPermission model module.
 * @module model/SingleFieldPermission
 * @version 3.0
 */
export default class SingleFieldPermission extends BaseTrackerFieldPermission {
  /**
   * Constructs a new <code>SingleFieldPermission</code>.
   * Describes a Single field permission.
   * @alias module:model/SingleFieldPermission
   * @class
   * @extends module:model/BaseTrackerFieldPermission
   * @param type {} 
   */
  constructor(type) {
    super(type);
  }

  /**
   * Constructs a <code>SingleFieldPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleFieldPermission} obj Optional instance to populate.
   * @return {module:model/SingleFieldPermission} The populated <code>SingleFieldPermission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SingleFieldPermission();
      BaseTrackerFieldPermission.constructFromObject(data, obj);
      if (data.hasOwnProperty('accessPermissions'))
        obj.accessPermissions = ApiClient.convertToType(data['accessPermissions'], [TrackerFieldPermissionAccessPermission]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TrackerFieldPermissionAccessPermission>} accessPermissions
 */
SingleFieldPermission.prototype.accessPermissions = undefined;

