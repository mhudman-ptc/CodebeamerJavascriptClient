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
 * The WikiPageReference model module.
 * @module model/WikiPageReference
 * @version 3.0
 */
export default class WikiPageReference extends AbstractReference {
  /**
   * Constructs a new <code>WikiPageReference</code>.
   * Reference to a wiki page
   * @alias module:model/WikiPageReference
   * @class
   * @extends module:model/AbstractReference
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>WikiPageReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WikiPageReference} obj Optional instance to populate.
   * @return {module:model/WikiPageReference} The populated <code>WikiPageReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WikiPageReference();
      AbstractReference.constructFromObject(data, obj);
    }
    return obj;
  }
}
