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
import AbstractReference from './AbstractReference';

/**
 * The ReferenceSearchResult model module.
 * @module model/ReferenceSearchResult
 * @version 3.0
 */
export default class ReferenceSearchResult {
  /**
   * Constructs a new <code>ReferenceSearchResult</code>.
   * One page of references.
   * @alias module:model/ReferenceSearchResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReferenceSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReferenceSearchResult} obj Optional instance to populate.
   * @return {module:model/ReferenceSearchResult} The populated <code>ReferenceSearchResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReferenceSearchResult();
      if (data.hasOwnProperty('page'))
        obj.page = ApiClient.convertToType(data['page'], 'Number');
      if (data.hasOwnProperty('pageSize'))
        obj.pageSize = ApiClient.convertToType(data['pageSize'], 'Number');
      if (data.hasOwnProperty('references'))
        obj.references = ApiClient.convertToType(data['references'], [AbstractReference]);
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
    }
    return obj;
  }
}

/**
 * Index of the page
 * @member {Number} page
 */
ReferenceSearchResult.prototype.page = undefined;

/**
 * Size of the found page
 * @member {Number} pageSize
 */
ReferenceSearchResult.prototype.pageSize = undefined;

/**
 * Found references
 * @member {Array.<module:model/AbstractReference>} references
 */
ReferenceSearchResult.prototype.references = undefined;

/**
 * Number of matched tracker items by the search criteria
 * @member {Number} total
 */
ReferenceSearchResult.prototype.total = undefined;

