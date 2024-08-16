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
 * The TrackerItemReviewVoteExport model module.
 * @module model/TrackerItemReviewVoteExport
 * @version 3.0
 */
export default class TrackerItemReviewVoteExport {
  /**
   * Constructs a new <code>TrackerItemReviewVoteExport</code>.
   * A reviewer and its vote for a particular Tracker Item Review instance
   * @alias module:model/TrackerItemReviewVoteExport
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerItemReviewVoteExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemReviewVoteExport} obj Optional instance to populate.
   * @return {module:model/TrackerItemReviewVoteExport} The populated <code>TrackerItemReviewVoteExport</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemReviewVoteExport();
      if (data.hasOwnProperty('decision'))
        obj.decision = ApiClient.convertToType(data['decision'], 'String');
      if (data.hasOwnProperty('firstName'))
        obj.firstName = ApiClient.convertToType(data['firstName'], 'String');
      if (data.hasOwnProperty('lastName'))
        obj.lastName = ApiClient.convertToType(data['lastName'], 'String');
      if (data.hasOwnProperty('reviewedAt'))
        obj.reviewedAt = ApiClient.convertToType(data['reviewedAt'], 'Date');
      if (data.hasOwnProperty('roleName'))
        obj.roleName = ApiClient.convertToType(data['roleName'], 'String');
      if (data.hasOwnProperty('userName'))
        obj.userName = ApiClient.convertToType(data['userName'], 'String');
    }
    return obj;
  }
}

/**
 * What the reviewer voted for
 * @member {String} decision
 */
TrackerItemReviewVoteExport.prototype.decision = undefined;

/**
 * First name of the reviewer
 * @member {String} firstName
 */
TrackerItemReviewVoteExport.prototype.firstName = undefined;

/**
 * Last name of the reviewer
 * @member {String} lastName
 */
TrackerItemReviewVoteExport.prototype.lastName = undefined;

/**
 * Time at when the review was performed
 * @member {Date} reviewedAt
 */
TrackerItemReviewVoteExport.prototype.reviewedAt = undefined;

/**
 * Name of the role which the reviewer chose to use to vote
 * @member {String} roleName
 */
TrackerItemReviewVoteExport.prototype.roleName = undefined;

/**
 * Username of the user who voted
 * @member {String} userName
 */
TrackerItemReviewVoteExport.prototype.userName = undefined;

