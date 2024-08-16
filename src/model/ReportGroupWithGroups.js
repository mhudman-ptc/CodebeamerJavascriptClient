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
import ReportAggregate from './ReportAggregate';
import ReportGroup from './ReportGroup';

/**
 * The ReportGroupWithGroups model module.
 * @module model/ReportGroupWithGroups
 * @version 3.0
 */
export default class ReportGroupWithGroups extends ReportGroup {
  /**
   * Constructs a new <code>ReportGroupWithGroups</code>.
   * ReportGroup having subgroups.
   * @alias module:model/ReportGroupWithGroups
   * @class
   * @extends module:model/ReportGroup
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ReportGroupWithGroups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportGroupWithGroups} obj Optional instance to populate.
   * @return {module:model/ReportGroupWithGroups} The populated <code>ReportGroupWithGroups</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReportGroupWithGroups();
      ReportGroup.constructFromObject(data, obj);
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [ReportGroup]);
    }
    return obj;
  }
}

/**
 * Subgroups in the group.
 * @member {Array.<module:model/ReportGroup>} groups
 */
ReportGroupWithGroups.prototype.groups = undefined;

