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
 * The TrackerItemReviewConfig model module.
 * @module model/TrackerItemReviewConfig
 * @version 3.0
 */
export default class TrackerItemReviewConfig {
  /**
   * Constructs a new <code>TrackerItemReviewConfig</code>.
   * The configuration from which the review was created
   * @alias module:model/TrackerItemReviewConfig
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerItemReviewConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemReviewConfig} obj Optional instance to populate.
   * @return {module:model/TrackerItemReviewConfig} The populated <code>TrackerItemReviewConfig</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemReviewConfig();
      if (data.hasOwnProperty('requiredApprovals'))
        obj.requiredApprovals = ApiClient.convertToType(data['requiredApprovals'], 'Number');
      if (data.hasOwnProperty('requiredRejections'))
        obj.requiredRejections = ApiClient.convertToType(data['requiredRejections'], 'Number');
      if (data.hasOwnProperty('requiredSignature'))
        obj.requiredSignature = ApiClient.convertToType(data['requiredSignature'], 'String');
      if (data.hasOwnProperty('roleRequired'))
        obj.roleRequired = ApiClient.convertToType(data['roleRequired'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Number of approvals after which the review is considered approved
 * @member {Number} requiredApprovals
 */
TrackerItemReviewConfig.prototype.requiredApprovals = undefined;

/**
 * Number of rejections after which the review is considered rejected
 * @member {Number} requiredRejections
 */
TrackerItemReviewConfig.prototype.requiredRejections = undefined;

/**
 * Allowed values for the <code>requiredSignature</code> property.
 * @enum {String}
 * @readonly
 */
TrackerItemReviewConfig.RequiredSignatureEnum = {
  /**
   * value: "NONE"
   * @const
   */
  NONE: "NONE",

  /**
   * value: "PASSWORD"
   * @const
   */
  PASSWORD: "PASSWORD",

  /**
   * value: "USERNAME_AND_PASSWORD"
   * @const
   */
  USERNAME_AND_PASSWORD: "USERNAME_AND_PASSWORD"
};
/**
 * Whether the user has to provide its credentials to vote
 * @member {module:model/TrackerItemReviewConfig.RequiredSignatureEnum} requiredSignature
 */
TrackerItemReviewConfig.prototype.requiredSignature = undefined;

/**
 * Whether the reviewers have to chose in which of their roles do they want to vote
 * @member {Boolean} roleRequired
 */
TrackerItemReviewConfig.prototype.roleRequired = undefined;

