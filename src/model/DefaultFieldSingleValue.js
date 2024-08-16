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
import AbstractFieldValue from './AbstractFieldValue';

/**
 * The DefaultFieldSingleValue model module.
 * @module model/DefaultFieldSingleValue
 * @version 3.0
 */
export default class DefaultFieldSingleValue extends AbstractFieldValue {
  /**
   * Constructs a new <code>DefaultFieldSingleValue</code>.
   * This model holds default values for custom fields.
   * @alias module:model/DefaultFieldSingleValue
   * @class
   * @extends module:model/AbstractFieldValue
   * @param type {} Type of the field
   */
  constructor(type) {
    super(type);
  }

  /**
   * Constructs a <code>DefaultFieldSingleValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DefaultFieldSingleValue} obj Optional instance to populate.
   * @return {module:model/DefaultFieldSingleValue} The populated <code>DefaultFieldSingleValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DefaultFieldSingleValue();
      AbstractFieldValue.constructFromObject(data, obj);
    }
    return obj;
  }
}
