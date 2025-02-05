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
 * The ColorField model module.
 * @module model/ColorField
 * @version 3.0
 */
export default class ColorField extends AbstractField {
  /**
   * Constructs a new <code>ColorField</code>.
   * Color field
   * @alias module:model/ColorField
   * @class
   * @extends module:model/AbstractField
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ColorField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ColorField} obj Optional instance to populate.
   * @return {module:model/ColorField} The populated <code>ColorField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ColorField();
      AbstractField.constructFromObject(data, obj);
    }
    return obj;
  }
}
