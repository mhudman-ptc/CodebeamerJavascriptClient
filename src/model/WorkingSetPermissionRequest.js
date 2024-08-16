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
import TrackerReference from './TrackerReference';

/**
 * The WorkingSetPermissionRequest model module.
 * @module model/WorkingSetPermissionRequest
 * @version 3.0
 */
export default class WorkingSetPermissionRequest {
  /**
   * Constructs a new <code>WorkingSetPermissionRequest</code>.
   * Request model trackers, roles and permissions.
   * @alias module:model/WorkingSetPermissionRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WorkingSetPermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkingSetPermissionRequest} obj Optional instance to populate.
   * @return {module:model/WorkingSetPermissionRequest} The populated <code>WorkingSetPermissionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WorkingSetPermissionRequest();
      if (data.hasOwnProperty('permissions'))
        obj.permissions = ApiClient.convertToType(data['permissions'], [TrackerPermissionReference]);
      if (data.hasOwnProperty('roles'))
        obj.roles = ApiClient.convertToType(data['roles'], [RoleReference]);
      if (data.hasOwnProperty('trackers'))
        obj.trackers = ApiClient.convertToType(data['trackers'], [TrackerReference]);
    }
    return obj;
  }
}

/**
 * Permission references.
 * @member {Array.<module:model/TrackerPermissionReference>} permissions
 */
WorkingSetPermissionRequest.prototype.permissions = undefined;

/**
 * Role references.
 * @member {Array.<module:model/RoleReference>} roles
 */
WorkingSetPermissionRequest.prototype.roles = undefined;

/**
 * Tracker references.
 * @member {Array.<module:model/TrackerReference>} trackers
 */
WorkingSetPermissionRequest.prototype.trackers = undefined;

