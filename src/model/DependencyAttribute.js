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
import DependencyEntityReference from './DependencyEntityReference';

/**
 * The DependencyAttribute model module.
 * @module model/DependencyAttribute
 * @version 3.0
 */
export default class DependencyAttribute {
  /**
   * Constructs a new <code>DependencyAttribute</code>.
   * Information on how and where references were found in source project.
   * @alias module:model/DependencyAttribute
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DependencyAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DependencyAttribute} obj Optional instance to populate.
   * @return {module:model/DependencyAttribute} The populated <code>DependencyAttribute</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DependencyAttribute();
      if (data.hasOwnProperty('lookupDirection'))
        obj.lookupDirection = ApiClient.convertToType(data['lookupDirection'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], [DependencyEntityReference]);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>lookupDirection</code> property.
 * @enum {String}
 * @readonly
 */
DependencyAttribute.LookupDirectionEnum = {
  /**
   * value: "Forward"
   * @const
   */
  forward: "Forward",

  /**
   * value: "Bidirectional"
   * @const
   */
  bidirectional: "Bidirectional"
};
/**
 * Direction in which dependency finder discovered the reference.
 * @member {module:model/DependencyAttribute.LookupDirectionEnum} lookupDirection
 */
DependencyAttribute.prototype.lookupDirection = undefined;

/**
 * Trace in source project model where the reference was found.
 * @member {Array.<module:model/DependencyEntityReference>} path
 */
DependencyAttribute.prototype.path = undefined;

