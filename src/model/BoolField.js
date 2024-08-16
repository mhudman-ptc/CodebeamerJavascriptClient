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
 * The BoolField model module.
 * @module model/BoolField
 * @version 3.0
 */
export default class BoolField extends AbstractField {
  /**
   * Constructs a new <code>BoolField</code>.
   * Bool field
   * @alias module:model/BoolField
   * @class
   * @extends module:model/AbstractField
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>BoolField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoolField} obj Optional instance to populate.
   * @return {module:model/BoolField} The populated <code>BoolField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BoolField();
      AbstractField.constructFromObject(data, obj);
    }
    return obj;
  }
}
