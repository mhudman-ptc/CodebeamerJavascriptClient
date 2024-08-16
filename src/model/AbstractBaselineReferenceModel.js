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
 * The AbstractBaselineReferenceModel model module.
 * @module model/AbstractBaselineReferenceModel
 * @version 3.0
 */
export default class AbstractBaselineReferenceModel {
  /**
   * Constructs a new <code>AbstractBaselineReferenceModel</code>.
   * Baseline used when creating the working set
   * @alias module:model/AbstractBaselineReferenceModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AbstractBaselineReferenceModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AbstractBaselineReferenceModel} obj Optional instance to populate.
   * @return {module:model/AbstractBaselineReferenceModel} The populated <code>AbstractBaselineReferenceModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AbstractBaselineReferenceModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * Id of the entity
 * @member {Number} id
 */
AbstractBaselineReferenceModel.prototype.id = undefined;

/**
 * Name of the entity
 * @member {String} name
 */
AbstractBaselineReferenceModel.prototype.name = undefined;

/**
 * Type of a referenced object
 * @member {String} type
 */
AbstractBaselineReferenceModel.prototype.type = undefined;

