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
import TrackerItemHistoryRevision from './TrackerItemHistoryRevision';

/**
 * The TrackerItemHistory model module.
 * @module model/TrackerItemHistory
 * @version 3.0
 */
export default class TrackerItemHistory {
  /**
   * Constructs a new <code>TrackerItemHistory</code>.
   * Tracker item history containing all versions of an item.
   * @alias module:model/TrackerItemHistory
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerItemHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemHistory} obj Optional instance to populate.
   * @return {module:model/TrackerItemHistory} The populated <code>TrackerItemHistory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemHistory();
      if (data.hasOwnProperty('versions'))
        obj.versions = ApiClient.convertToType(data['versions'], [TrackerItemHistoryRevision]);
    }
    return obj;
  }
}

/**
 * List of version changes.
 * @member {Array.<module:model/TrackerItemHistoryRevision>} versions
 */
TrackerItemHistory.prototype.versions = undefined;

