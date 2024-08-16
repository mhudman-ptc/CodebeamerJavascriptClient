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
 * The ExportToWordRequest model module.
 * @module model/ExportToWordRequest
 * @version 3.0
 */
export default class ExportToWordRequest {
  /**
   * Constructs a new <code>ExportToWordRequest</code>.
   * Request model for exporting items to Word
   * @alias module:model/ExportToWordRequest
   * @class
   * @param currentItemId {Number} The id of the item
   * @param exportTargetTrackerId {Number} The id of the Document type Tracker
   * @param wordFilename {String} The name of the generated Word document
   */
  constructor(currentItemId, exportTargetTrackerId, wordFilename) {
    this.currentItemId = currentItemId;
    this.exportTargetTrackerId = exportTargetTrackerId;
    this.wordFilename = wordFilename;
  }

  /**
   * Constructs a <code>ExportToWordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportToWordRequest} obj Optional instance to populate.
   * @return {module:model/ExportToWordRequest} The populated <code>ExportToWordRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExportToWordRequest();
      if (data.hasOwnProperty('currentItemAndItsChildren'))
        obj.currentItemAndItsChildren = ApiClient.convertToType(data['currentItemAndItsChildren'], 'Boolean');
      if (data.hasOwnProperty('currentItemId'))
        obj.currentItemId = ApiClient.convertToType(data['currentItemId'], 'Number');
      if (data.hasOwnProperty('exportTargetTrackerFolderId'))
        obj.exportTargetTrackerFolderId = ApiClient.convertToType(data['exportTargetTrackerFolderId'], 'Number');
      if (data.hasOwnProperty('exportTargetTrackerId'))
        obj.exportTargetTrackerId = ApiClient.convertToType(data['exportTargetTrackerId'], 'Number');
      if (data.hasOwnProperty('newVersion'))
        obj.newVersion = ApiClient.convertToType(data['newVersion'], 'Boolean');
      if (data.hasOwnProperty('reportId'))
        obj.reportId = ApiClient.convertToType(data['reportId'], 'Number');
      if (data.hasOwnProperty('wordFilename'))
        obj.wordFilename = ApiClient.convertToType(data['wordFilename'], 'String');
      if (data.hasOwnProperty('wordTemplateName'))
        obj.wordTemplateName = ApiClient.convertToType(data['wordTemplateName'], 'String');
    }
    return obj;
  }
}

/**
 * The children of the current item should be included also or not
 * @member {Boolean} currentItemAndItsChildren
 */
ExportToWordRequest.prototype.currentItemAndItsChildren = undefined;

/**
 * The id of the item
 * @member {Number} currentItemId
 */
ExportToWordRequest.prototype.currentItemId = undefined;

/**
 * The Document tracker Folder where the exported file will be stored
 * @member {Number} exportTargetTrackerFolderId
 */
ExportToWordRequest.prototype.exportTargetTrackerFolderId = undefined;

/**
 * The id of the Document type Tracker
 * @member {Number} exportTargetTrackerId
 */
ExportToWordRequest.prototype.exportTargetTrackerId = undefined;

/**
 * If true, new version of the file will be created (timestamp added), otherwise previous file will be overwritten
 * @member {Boolean} newVersion
 */
ExportToWordRequest.prototype.newVersion = undefined;

/**
 * If specified, the report result will be in the Word document instead of the current item (and its children, if this set)
 * @member {Number} reportId
 */
ExportToWordRequest.prototype.reportId = undefined;

/**
 * The name of the generated Word document
 * @member {String} wordFilename
 */
ExportToWordRequest.prototype.wordFilename = undefined;

/**
 * Which Word template should be used for the Word document generation
 * @member {String} wordTemplateName
 */
ExportToWordRequest.prototype.wordTemplateName = undefined;

