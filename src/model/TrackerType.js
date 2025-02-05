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
 * The TrackerType model module.
 * @module model/TrackerType
 * @version 3.0
 */
export default class TrackerType {
  /**
   * Constructs a new <code>TrackerType</code>.
   * @alias module:model/TrackerType
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackerType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackerType} obj Optional instance to populate.
   * @return {module:model/TrackerType} The populated <code>TrackerType</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackerType();
      if (data.hasOwnProperty('branchable'))
        obj.branchable = ApiClient.convertToType(data['branchable'], 'Boolean');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('docEditView'))
        obj.docEditView = ApiClient.convertToType(data['docEditView'], 'Boolean');
      if (data.hasOwnProperty('editorUrl'))
        obj.editorUrl = ApiClient.convertToType(data['editorUrl'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('itemIconUrl'))
        obj.itemIconUrl = ApiClient.convertToType(data['itemIconUrl'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('outline'))
        obj.outline = ApiClient.convertToType(data['outline'], 'Boolean');
      if (data.hasOwnProperty('trackerIconUrl'))
        obj.trackerIconUrl = ApiClient.convertToType(data['trackerIconUrl'], 'String');
      if (data.hasOwnProperty('urlLinkFormat'))
        obj.urlLinkFormat = ApiClient.convertToType(data['urlLinkFormat'], 'String');
      if (data.hasOwnProperty('varName'))
        obj.varName = ApiClient.convertToType(data['varName'], 'String');
    }
    return obj;
  }
}

/**
 * True if tracker type is branchable
 * @member {Boolean} branchable
 */
TrackerType.prototype.branchable = undefined;

/**
 * Color of a tracker type
 * @member {String} color
 */
TrackerType.prototype.color = undefined;

/**
 * True if tracker type has document view
 * @member {Boolean} docEditView
 */
TrackerType.prototype.docEditView = undefined;

/**
 * Editor URL of a tracker type
 * @member {String} editorUrl
 */
TrackerType.prototype.editorUrl = undefined;

/**
 * Id of the entity
 * @member {Number} id
 */
TrackerType.prototype.id = undefined;

/**
 * Item icon URL of a tracker type
 * @member {String} itemIconUrl
 */
TrackerType.prototype.itemIconUrl = undefined;

/**
 * Name of the entity
 * @member {String} name
 */
TrackerType.prototype.name = undefined;

/**
 * True if outline is enabled
 * @member {Boolean} outline
 */
TrackerType.prototype.outline = undefined;

/**
 * Tracker icon URL of a tracker type
 * @member {String} trackerIconUrl
 */
TrackerType.prototype.trackerIconUrl = undefined;

/**
 * URL link format of a tracker type
 * @member {String} urlLinkFormat
 */
TrackerType.prototype.urlLinkFormat = undefined;

/**
 * Internal/variable name of a tracker type
 * @member {String} varName
 */
TrackerType.prototype.varName = undefined;

