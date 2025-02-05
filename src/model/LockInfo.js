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
import UserReference from './UserReference';

/**
 * The LockInfo model module.
 * @module model/LockInfo
 * @version 3.0
 */
export default class LockInfo {
  /**
   * Constructs a new <code>LockInfo</code>.
   * Information about an artifact lock
   * @alias module:model/LockInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LockInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LockInfo} obj Optional instance to populate.
   * @return {module:model/LockInfo} The populated <code>LockInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LockInfo();
      if (data.hasOwnProperty('expires'))
        obj.expires = ApiClient.convertToType(data['expires'], 'Boolean');
      if (data.hasOwnProperty('user'))
        obj.user = UserReference.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * Whether the lock will expire on its own, eg. if it is a soft lock
 * @member {Boolean} expires
 */
LockInfo.prototype.expires = undefined;

/**
 * @member {module:model/UserReference} user
 */
LockInfo.prototype.user = undefined;

