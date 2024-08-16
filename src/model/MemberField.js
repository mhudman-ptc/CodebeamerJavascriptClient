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
 * The MemberField model module.
 * @module model/MemberField
 * @version 3.0
 */
export default class MemberField extends AbstractField {
  /**
   * Constructs a new <code>MemberField</code>.
   * Member field
   * @alias module:model/MemberField
   * @class
   * @extends module:model/AbstractField
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>MemberField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MemberField} obj Optional instance to populate.
   * @return {module:model/MemberField} The populated <code>MemberField</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MemberField();
      AbstractField.constructFromObject(data, obj);
      if (data.hasOwnProperty('memberTypes'))
        obj.memberTypes = ApiClient.convertToType(data['memberTypes'], ['String']);
      if (data.hasOwnProperty('multipleValues'))
        obj.multipleValues = ApiClient.convertToType(data['multipleValues'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>memberTypes</code> property.
 * @enum {String}
 * @readonly
 */
MemberField.MemberTypesEnum = {
  /**
   * value: "USER"
   * @const
   */
  USER: "USER",

  /**
   * value: "ROLE"
   * @const
   */
  ROLE: "ROLE",

  /**
   * value: "GROUP"
   * @const
   */
  GROUP: "GROUP"
};
/**
 * Supported member type of a member field
 * @member {Array.<module:model/MemberField.MemberTypesEnum>} memberTypes
 */
MemberField.prototype.memberTypes = undefined;

/**
 * Multiple values state of a field
 * @member {Boolean} multipleValues
 */
MemberField.prototype.multipleValues = undefined;

