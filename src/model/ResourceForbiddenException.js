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

/**
 * The ResourceForbiddenException model module.
 * @module model/ResourceForbiddenException
 * @version 3.0
 */
export default class ResourceForbiddenException {
  /**
   * Constructs a new <code>ResourceForbiddenException</code>.
   * @alias module:model/ResourceForbiddenException
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ResourceForbiddenException</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResourceForbiddenException} obj Optional instance to populate.
   * @return {module:model/ResourceForbiddenException} The populated <code>ResourceForbiddenException</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ResourceForbiddenException();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('resourceUri'))
        obj.resourceUri = ApiClient.convertToType(data['resourceUri'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
ResourceForbiddenException.prototype.message = undefined;

/**
 * @member {String} resourceUri
 */
ResourceForbiddenException.prototype.resourceUri = undefined;

