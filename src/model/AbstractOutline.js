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
import OutlineIndex from './OutlineIndex';

/**
 * The AbstractOutline model module.
 * @module model/AbstractOutline
 * @version 3.0
 */
export default class AbstractOutline {
  /**
   * Constructs a new <code>AbstractOutline</code>.
   * Abstract outline entity
   * @alias module:model/AbstractOutline
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AbstractOutline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbstractOutline} obj Optional instance to populate.
   * @return {module:model/AbstractOutline} The populated <code>AbstractOutline</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AbstractOutline();
      if (data.hasOwnProperty('outlineIndexes'))
        obj.outlineIndexes = ApiClient.convertToType(data['outlineIndexes'], [OutlineIndex]);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * Indexes of the entity in the outline.
 * @member {Array.<module:model/OutlineIndex>} outlineIndexes
 */
AbstractOutline.prototype.outlineIndexes = undefined;

/**
 * Type of the outline model
 * @member {String} type
 */
AbstractOutline.prototype.type = undefined;

