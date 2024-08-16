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
 * The BranchReference model module.
 * @module model/BranchReference
 * @version 3.0
 */
export default class BranchReference extends AbstractReference {
  /**
   * Constructs a new <code>BranchReference</code>.
   * @alias module:model/BranchReference
   * @class
   * @extends module:model/AbstractReference
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>BranchReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BranchReference} obj Optional instance to populate.
   * @return {module:model/BranchReference} The populated <code>BranchReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BranchReference();
      AbstractReference.constructFromObject(data, obj);
    }
    return obj;
  }
}
