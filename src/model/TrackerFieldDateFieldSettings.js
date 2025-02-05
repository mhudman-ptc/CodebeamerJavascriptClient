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
 * The TrackerFieldDateFieldSettings model module.
 * @module model/TrackerFieldDateFieldSettings
 * @version 3.0
 */
export default class TrackerFieldDateFieldSettings {
  /**
   * Constructs a new <code>TrackerFieldDateFieldSettings</code>.
   * Describes the settings of a date type Field.
   * @alias module:model/TrackerFieldDateFieldSettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerFieldDateFieldSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerFieldDateFieldSettings} obj Optional instance to populate.
   * @return {module:model/TrackerFieldDateFieldSettings} The populated <code>TrackerFieldDateFieldSettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerFieldDateFieldSettings();
      if (data.hasOwnProperty('displayDay'))
        obj.displayDay = ApiClient.convertToType(data['displayDay'], 'Boolean');
      if (data.hasOwnProperty('displayMonth'))
        obj.displayMonth = ApiClient.convertToType(data['displayMonth'], 'Boolean');
      if (data.hasOwnProperty('displayTime'))
        obj.displayTime = ApiClient.convertToType(data['displayTime'], 'Boolean');
      if (data.hasOwnProperty('displayYear'))
        obj.displayYear = ApiClient.convertToType(data['displayYear'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {Boolean} displayDay
 */
TrackerFieldDateFieldSettings.prototype.displayDay = undefined;

/**
 * @member {Boolean} displayMonth
 */
TrackerFieldDateFieldSettings.prototype.displayMonth = undefined;

/**
 * @member {Boolean} displayTime
 */
TrackerFieldDateFieldSettings.prototype.displayTime = undefined;

/**
 * @member {Boolean} displayYear
 */
TrackerFieldDateFieldSettings.prototype.displayYear = undefined;

