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
import FieldLayoutGroups from './FieldLayoutGroups';

/**
 * The FieldLayoutSettings model module.
 * @module model/FieldLayoutSettings
 * @version 3.0
 */
export default class FieldLayoutSettings {
  /**
   * Constructs a new <code>FieldLayoutSettings</code>.
   * fieldLayoutSettingsModels of a tracker
   * @alias module:model/FieldLayoutSettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FieldLayoutSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldLayoutSettings} obj Optional instance to populate.
   * @return {module:model/FieldLayoutSettings} The populated <code>FieldLayoutSettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FieldLayoutSettings();
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [FieldLayoutGroups]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('showDefault'))
        obj.showDefault = ApiClient.convertToType(data['showDefault'], 'Boolean');
    }
    return obj;
  }
}

/**
 * groupsModels of a fieldLayoutSettingsModel
 * @member {Array.<module:model/FieldLayoutGroups>} groups
 */
FieldLayoutSettings.prototype.groups = undefined;

/**
 * name of a fieldLayoutSettingsModel
 * @member {String} name
 */
FieldLayoutSettings.prototype.name = undefined;

/**
 * showDefault of a fieldLayoutSettingsModel
 * @member {Boolean} showDefault
 */
FieldLayoutSettings.prototype.showDefault = undefined;

