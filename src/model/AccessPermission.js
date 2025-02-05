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
import FieldReference from './FieldReference';
import ProjectReference from './ProjectReference';
import RoleReference from './RoleReference';

/**
 * The AccessPermission model module.
 * @module model/AccessPermission
 * @version 3.0
 */
export default class AccessPermission {
  /**
   * Constructs a new <code>AccessPermission</code>.
   * Access permission of specific role
   * @alias module:model/AccessPermission
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AccessPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessPermission} obj Optional instance to populate.
   * @return {module:model/AccessPermission} The populated <code>AccessPermission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AccessPermission();
      if (data.hasOwnProperty('accessLevel'))
        obj.accessLevel = ApiClient.convertToType(data['accessLevel'], 'String');
      if (data.hasOwnProperty('field'))
        obj.field = FieldReference.constructFromObject(data['field']);
      if (data.hasOwnProperty('project'))
        obj.project = ProjectReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('role'))
        obj.role = RoleReference.constructFromObject(data['role']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessLevel</code> property.
 * @enum {String}
 * @readonly
 */
AccessPermission.AccessLevelEnum = {
  /**
   * value: "NONE"
   * @const
   */
  NONE: "NONE",

  /**
   * value: "READ"
   * @const
   */
  READ: "READ",

  /**
   * value: "WRITE"
   * @const
   */
  WRITE: "WRITE",

  /**
   * value: "READ_WRITE"
   * @const
   */
  READ_WRITE: "READ_WRITE"
};
/**
 * Access level
 * @member {module:model/AccessPermission.AccessLevelEnum} accessLevel
 */
AccessPermission.prototype.accessLevel = undefined;

/**
 * @member {module:model/FieldReference} field
 */
AccessPermission.prototype.field = undefined;

/**
 * @member {module:model/ProjectReference} project
 */
AccessPermission.prototype.project = undefined;

/**
 * @member {module:model/RoleReference} role
 */
AccessPermission.prototype.role = undefined;

