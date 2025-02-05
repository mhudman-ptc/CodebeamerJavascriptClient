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
 * The TraceabilityInitialLevelFilter model module.
 * @module model/TraceabilityInitialLevelFilter
 * @version 3.0
 */
export default class TraceabilityInitialLevelFilter {
  /**
   * Constructs a new <code>TraceabilityInitialLevelFilter</code>.
   * Settings to filter items
   * @alias module:model/TraceabilityInitialLevelFilter
   * @class
   * @param cbQL {String} cbQL
   */
  constructor(cbQL) {
    this.cbQL = cbQL;
  }

  /**
   * Constructs a <code>TraceabilityInitialLevelFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TraceabilityInitialLevelFilter} obj Optional instance to populate.
   * @return {module:model/TraceabilityInitialLevelFilter} The populated <code>TraceabilityInitialLevelFilter</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TraceabilityInitialLevelFilter();
      if (data.hasOwnProperty('cbQL'))
        obj.cbQL = ApiClient.convertToType(data['cbQL'], 'String');
      if (data.hasOwnProperty('historyBaselineId'))
        obj.historyBaselineId = ApiClient.convertToType(data['historyBaselineId'], 'Number');
      if (data.hasOwnProperty('historyDate'))
        obj.historyDate = ApiClient.convertToType(data['historyDate'], 'Date');
      if (data.hasOwnProperty('showAncestorItems'))
        obj.showAncestorItems = ApiClient.convertToType(data['showAncestorItems'], 'Boolean');
      if (data.hasOwnProperty('showDescendantItems'))
        obj.showDescendantItems = ApiClient.convertToType(data['showDescendantItems'], 'Boolean');
    }
    return obj;
  }
}

/**
 * cbQL
 * @member {String} cbQL
 */
TraceabilityInitialLevelFilter.prototype.cbQL = undefined;

/**
 * Snapshot view of given baseline
 * @member {Number} historyBaselineId
 */
TraceabilityInitialLevelFilter.prototype.historyBaselineId = undefined;

/**
 * Snapshot view of given date
 * @member {Date} historyDate
 */
TraceabilityInitialLevelFilter.prototype.historyDate = undefined;

/**
 * Show ancestor items
 * @member {Boolean} showAncestorItems
 * @default false
 */
TraceabilityInitialLevelFilter.prototype.showAncestorItems = false;

/**
 * Show descendant items
 * @member {Boolean} showDescendantItems
 * @default false
 */
TraceabilityInitialLevelFilter.prototype.showDescendantItems = false;

