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
import ProjectReference from './ProjectReference';
import RoleReference from './RoleReference';

/**
 * The ReportPermission model module.
 * @module model/ReportPermission
 * @version 3.0
 */
export default class ReportPermission {
  /**
   * Constructs a new <code>ReportPermission</code>.
   * Access permissions for the report.
   * @alias module:model/ReportPermission
   * @class
   * @param access {module:model/ReportPermission.AccessEnum} Access level
   * @param project {module:model/ProjectReference} 
   * @param role {module:model/RoleReference} 
   */
  constructor(access, project, role) {
    this.access = access;
    this.project = project;
    this.role = role;
  }

  /**
   * Constructs a <code>ReportPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportPermission} obj Optional instance to populate.
   * @return {module:model/ReportPermission} The populated <code>ReportPermission</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReportPermission();
      if (data.hasOwnProperty('access'))
        obj.access = ApiClient.convertToType(data['access'], 'String');
      if (data.hasOwnProperty('project'))
        obj.project = ProjectReference.constructFromObject(data['project']);
      if (data.hasOwnProperty('role'))
        obj.role = RoleReference.constructFromObject(data['role']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>access</code> property.
 * @enum {String}
 * @readonly
 */
ReportPermission.AccessEnum = {
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
 * @member {module:model/ReportPermission.AccessEnum} access
 */
ReportPermission.prototype.access = undefined;

/**
 * @member {module:model/ProjectReference} project
 */
ReportPermission.prototype.project = undefined;

/**
 * @member {module:model/RoleReference} role
 */
ReportPermission.prototype.role = undefined;

