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
import RoleReference from './RoleReference';
import TrackerPermissionReference from './TrackerPermissionReference';

/**
 * The RoleWithPermissions model module.
 * @module model/RoleWithPermissions
 * @version 3.0
 */
export default class RoleWithPermissions {
  /**
   * Constructs a new <code>RoleWithPermissions</code>.
   * Model that contains permissions connected to roles
   * @alias module:model/RoleWithPermissions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RoleWithPermissions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleWithPermissions} obj Optional instance to populate.
   * @return {module:model/RoleWithPermissions} The populated <code>RoleWithPermissions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RoleWithPermissions();
      if (data.hasOwnProperty('role'))
        obj.role = RoleReference.constructFromObject(data['role']);
      if (data.hasOwnProperty('trackerPermissions'))
        obj.trackerPermissions = ApiClient.convertToType(data['trackerPermissions'], [TrackerPermissionReference]);
    }
    return obj;
  }
}

/**
 * @member {module:model/RoleReference} role
 */
RoleWithPermissions.prototype.role = undefined;

/**
 * Permission for the role
 * @member {Array.<module:model/TrackerPermissionReference>} trackerPermissions
 */
RoleWithPermissions.prototype.trackerPermissions = undefined;

