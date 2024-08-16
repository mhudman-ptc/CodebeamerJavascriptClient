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
 * The TrackerItemField model module.
 * @module model/TrackerItemField
 * @version 3.0
 */
export default class TrackerItemField {
  /**
   * Constructs a new <code>TrackerItemField</code>.
   * @alias module:model/TrackerItemField
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerItemField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemField} obj Optional instance to populate.
   * @return {module:model/TrackerItemField} The populated <code>TrackerItemField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemField();
      if (data.hasOwnProperty('editableFields'))
        obj.editableFields = ApiClient.convertToType(data['editableFields'], [AbstractFieldValue]);
      if (data.hasOwnProperty('editableTableFields'))
        obj.editableTableFields = ApiClient.convertToType(data['editableTableFields'], [TableFieldValue]);
      if (data.hasOwnProperty('readOnlyFields'))
        obj.readOnlyFields = ApiClient.convertToType(data['readOnlyFields'], [AbstractFieldValue]);
      if (data.hasOwnProperty('readOnlyTableFields'))
        obj.readOnlyTableFields = ApiClient.convertToType(data['readOnlyTableFields'], [TableFieldValue]);
    }
    return obj;
  }
}

/**
 * Fields which can be modified
 * @member {Array.<module:model/AbstractFieldValue>} editableFields
 */
TrackerItemField.prototype.editableFields = undefined;

/**
 * Table fields which can be modified
 * @member {Array.<module:model/TableFieldValue>} editableTableFields
 */
TrackerItemField.prototype.editableTableFields = undefined;

/**
 * Fields which are not writable in the current state
 * @member {Array.<module:model/AbstractFieldValue>} readOnlyFields
 */
TrackerItemField.prototype.readOnlyFields = undefined;

/**
 * Table fields which are not writable in the current state
 * @member {Array.<module:model/TableFieldValue>} readOnlyTableFields
 */
TrackerItemField.prototype.readOnlyTableFields = undefined;

