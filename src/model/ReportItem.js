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
import TrackerItem from './TrackerItem';

/**
 * The ReportItem model module.
 * @module model/ReportItem
 * @version 3.0
 */
export default class ReportItem {
  /**
   * Constructs a new <code>ReportItem</code>.
   * An item of the report.
   * @alias module:model/ReportItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportItem} obj Optional instance to populate.
   * @return {module:model/ReportItem} The populated <code>ReportItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReportItem();
      if (data.hasOwnProperty('isRealResult'))
        obj.isRealResult = ApiClient.convertToType(data['isRealResult'], 'Boolean');
      if (data.hasOwnProperty('item'))
        obj.item = TrackerItem.constructFromObject(data['item']);
      if (data.hasOwnProperty('outlineLevel'))
        obj.outlineLevel = ApiClient.convertToType(data['outlineLevel'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicator if the item is a real query result (e.g. not an ancestor item).
 * @member {Boolean} isRealResult
 */
ReportItem.prototype.isRealResult = undefined;

/**
 * @member {module:model/TrackerItem} item
 */
ReportItem.prototype.item = undefined;

/**
 * Item's level in the tracker outline.
 * @member {Number} outlineLevel
 */
ReportItem.prototype.outlineLevel = undefined;

