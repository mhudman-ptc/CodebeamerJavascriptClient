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
 * The CountryFieldValue model module.
 * @module model/CountryFieldValue
 * @version 3.0
 */
export default class CountryFieldValue extends AbstractFieldValue {
  /**
   * Constructs a new <code>CountryFieldValue</code>.
   * Value container of a country field
   * @alias module:model/CountryFieldValue
   * @class
   * @extends module:model/AbstractFieldValue
   * @param type {} Type of the field
   */
  constructor(type) {
    super(type);
  }

  /**
   * Constructs a <code>CountryFieldValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CountryFieldValue} obj Optional instance to populate.
   * @return {module:model/CountryFieldValue} The populated <code>CountryFieldValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CountryFieldValue();
      AbstractFieldValue.constructFromObject(data, obj);
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], ['String']);
    }
    return obj;
  }
}

/**
 * Country codes
 * @member {Array.<String>} values
 */
CountryFieldValue.prototype.values = undefined;

