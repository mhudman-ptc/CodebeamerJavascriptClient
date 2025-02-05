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
 * The UploadAttachment model module.
 * @module model/UploadAttachment
 * @version 3.0
 */
export default class UploadAttachment {
  /**
   * Constructs a new <code>UploadAttachment</code>.
   * @alias module:model/UploadAttachment
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UploadAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UploadAttachment} obj Optional instance to populate.
   * @return {module:model/UploadAttachment} The populated <code>UploadAttachment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UploadAttachment();
      if (data.hasOwnProperty('attachments'))
        obj.attachments = ApiClient.convertToType(data['attachments'], 'Blob');
    }
    return obj;
  }
}

/**
 * Attachments of a comment
 * @member {Blob} attachments
 */
UploadAttachment.prototype.attachments = undefined;

