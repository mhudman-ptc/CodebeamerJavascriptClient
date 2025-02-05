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
 * The TrackerItemReferenceData model module.
 * @module model/TrackerItemReferenceData
 * @version 3.0
 */
export default class TrackerItemReferenceData {
  /**
   * Constructs a new <code>TrackerItemReferenceData</code>.
   * Properties of a tracker item reference
   * @alias module:model/TrackerItemReferenceData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerItemReferenceData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemReferenceData} obj Optional instance to populate.
   * @return {module:model/TrackerItemReferenceData} The populated <code>TrackerItemReferenceData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemReferenceData();
      if (data.hasOwnProperty('suspectPropagation'))
        obj.suspectPropagation = ApiClient.convertToType(data['suspectPropagation'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>suspectPropagation</code> property.
 * @enum {String}
 * @readonly
 */
TrackerItemReferenceData.SuspectPropagationEnum = {
  /**
   * value: "DO_NOT_PROPAGATE"
   * @const
   */
  DO_NOT_PROPAGATE: "DO_NOT_PROPAGATE",

  /**
   * value: "PROPAGATE"
   * @const
   */
  PROPAGATE: "PROPAGATE",

  /**
   * value: "REVERSE"
   * @const
   */
  REVERSE: "REVERSE",

  /**
   * value: "BIDIRECTIONAL"
   * @const
   */
  BIDIRECTIONAL: "BIDIRECTIONAL"
};
/**
 * Type of suspect propagation
 * @member {module:model/TrackerItemReferenceData.SuspectPropagationEnum} suspectPropagation
 */
TrackerItemReferenceData.prototype.suspectPropagation = undefined;

