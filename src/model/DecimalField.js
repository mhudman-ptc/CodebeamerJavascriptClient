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
import AbstractField from './AbstractField';
import ChoiceOptionReference from './ChoiceOptionReference';
import SharedFieldReference from './SharedFieldReference';

/**
 * The DecimalField model module.
 * @module model/DecimalField
 * @version 3.0
 */
export default class DecimalField extends AbstractField {
  /**
   * Constructs a new <code>DecimalField</code>.
   * Decimal field
   * @alias module:model/DecimalField
   * @class
   * @extends module:model/AbstractField
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>DecimalField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecimalField} obj Optional instance to populate.
   * @return {module:model/DecimalField} The populated <code>DecimalField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecimalField();
      AbstractField.constructFromObject(data, obj);
      if (data.hasOwnProperty('max'))
        obj.max = ApiClient.convertToType(data['max'], 'Number');
      if (data.hasOwnProperty('min'))
        obj.min = ApiClient.convertToType(data['min'], 'Number');
    }
    return obj;
  }
}

/**
 * Maximum value of a field
 * @member {Number} max
 */
DecimalField.prototype.max = undefined;

/**
 * Minimum value of a field
 * @member {Number} min
 */
DecimalField.prototype.min = undefined;

