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
import AbstractFieldValue from './AbstractFieldValue';
import TableFieldValue from './TableFieldValue';

/**
 * The UpdateTrackerItemFieldWithItemId model module.
 * @module model/UpdateTrackerItemFieldWithItemId
 * @version 3.0
 */
export default class UpdateTrackerItemFieldWithItemId {
  /**
   * Constructs a new <code>UpdateTrackerItemFieldWithItemId</code>.
   * Update fields of a tracker item and provide the itemId as well
   * @alias module:model/UpdateTrackerItemFieldWithItemId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateTrackerItemFieldWithItemId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateTrackerItemFieldWithItemId} obj Optional instance to populate.
   * @return {module:model/UpdateTrackerItemFieldWithItemId} The populated <code>UpdateTrackerItemFieldWithItemId</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateTrackerItemFieldWithItemId();
      if (data.hasOwnProperty('fieldValues'))
        obj.fieldValues = ApiClient.convertToType(data['fieldValues'], [AbstractFieldValue]);
      if (data.hasOwnProperty('itemId'))
        obj.itemId = ApiClient.convertToType(data['itemId'], 'Number');
      if (data.hasOwnProperty('tableValues'))
        obj.tableValues = ApiClient.convertToType(data['tableValues'], [TableFieldValue]);
    }
    return obj;
  }
}

/**
 * Fields of a tracker item
 * @member {Array.<module:model/AbstractFieldValue>} fieldValues
 */
UpdateTrackerItemFieldWithItemId.prototype.fieldValues = undefined;

/**
 * Id of a tracker item
 * @member {Number} itemId
 */
UpdateTrackerItemFieldWithItemId.prototype.itemId = undefined;

/**
 * Fields of a tracker item
 * @member {Array.<module:model/TableFieldValue>} tableValues
 */
UpdateTrackerItemFieldWithItemId.prototype.tableValues = undefined;

