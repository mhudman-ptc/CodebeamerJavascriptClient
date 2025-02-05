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
import AbstractReference from './AbstractReference';
import TrackerItemReferenceData from './TrackerItemReferenceData';

/**
 * The TrackerItemReference model module.
 * @module model/TrackerItemReference
 * @version 3.0
 */
export default class TrackerItemReference extends AbstractReference {
  /**
   * Constructs a new <code>TrackerItemReference</code>.
   * Reference to a tracker item
   * @alias module:model/TrackerItemReference
   * @class
   * @extends module:model/AbstractReference
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TrackerItemReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerItemReference} obj Optional instance to populate.
   * @return {module:model/TrackerItemReference} The populated <code>TrackerItemReference</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerItemReference();
      AbstractReference.constructFromObject(data, obj);
      if (data.hasOwnProperty('angularIcon'))
        obj.angularIcon = ApiClient.convertToType(data['angularIcon'], 'String');
      if (data.hasOwnProperty('iconColor'))
        obj.iconColor = ApiClient.convertToType(data['iconColor'], 'String');
      if (data.hasOwnProperty('propagateSuspects'))
        obj.propagateSuspects = ApiClient.convertToType(data['propagateSuspects'], 'Boolean');
      if (data.hasOwnProperty('referenceData'))
        obj.referenceData = TrackerItemReferenceData.constructFromObject(data['referenceData']);
      if (data.hasOwnProperty('testStepReuse'))
        obj.testStepReuse = ApiClient.convertToType(data['testStepReuse'], 'Boolean');
      if (data.hasOwnProperty('trackerKey'))
        obj.trackerKey = ApiClient.convertToType(data['trackerKey'], 'String');
      if (data.hasOwnProperty('trackerTypeId'))
        obj.trackerTypeId = ApiClient.convertToType(data['trackerTypeId'], 'Number');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} angularIcon
 */
TrackerItemReference.prototype.angularIcon = undefined;

/**
 * @member {String} iconColor
 */
TrackerItemReference.prototype.iconColor = undefined;

/**
 * @member {Boolean} propagateSuspects
 */
TrackerItemReference.prototype.propagateSuspects = undefined;

/**
 * @member {module:model/TrackerItemReferenceData} referenceData
 */
TrackerItemReference.prototype.referenceData = undefined;

/**
 * @member {Boolean} testStepReuse
 */
TrackerItemReference.prototype.testStepReuse = undefined;

/**
 * @member {String} trackerKey
 */
TrackerItemReference.prototype.trackerKey = undefined;

/**
 * @member {Number} trackerTypeId
 */
TrackerItemReference.prototype.trackerTypeId = undefined;

/**
 * @member {String} uri
 */
TrackerItemReference.prototype.uri = undefined;

