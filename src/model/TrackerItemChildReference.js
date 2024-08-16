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
import TrackerItemReference from './TrackerItemReference';

/**
 * The TrackerItemChildReference model module.
 * @module model/TrackerItemChildReference
 * @version 3.0
 */
export default class TrackerItemChildReference {
  /**
   * Constructs a new <code>TrackerItemChildReference</code>.
   * Reference to a child item in the tracker outline.
   * @alias module:model/TrackerItemChildReference
   * @class
   * @param index {Number} Ordinal in the tracker outline.
   * @param itemReference {module:model/TrackerItemReference} 
   */
  constructor(index, itemReference) {
    this.index = index;
    this.itemReference = itemReference;
  }

  /**
   * Constructs a <code>TrackerItemChildReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemChildReference} obj Optional instance to populate.
   * @return {module:model/TrackerItemChildReference} The populated <code>TrackerItemChildReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemChildReference();
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('itemReference'))
        obj.itemReference = TrackerItemReference.constructFromObject(data['itemReference']);
    }
    return obj;
  }
}

/**
 * Ordinal in the tracker outline.
 * @member {Number} index
 */
TrackerItemChildReference.prototype.index = undefined;

/**
 * @member {module:model/TrackerItemReference} itemReference
 */
TrackerItemChildReference.prototype.itemReference = undefined;

