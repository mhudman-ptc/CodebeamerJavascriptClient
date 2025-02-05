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
 * The UserReference model module.
 * @module model/UserReference
 * @version 3.0
 */
export default class UserReference extends AbstractReference {
  /**
   * Constructs a new <code>UserReference</code>.
   * Reference to a user
   * @alias module:model/UserReference
   * @class
   * @extends module:model/AbstractReference
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>UserReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserReference} obj Optional instance to populate.
   * @return {module:model/UserReference} The populated <code>UserReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserReference();
      AbstractReference.constructFromObject(data, obj);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * Email of a referenced user
 * @member {String} email
 */
UserReference.prototype.email = undefined;

