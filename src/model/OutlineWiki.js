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
import AbstractOutline from './AbstractOutline';
import OutlineIndex from './OutlineIndex';
import WikiPageReference from './WikiPageReference';

/**
 * The OutlineWiki model module.
 * @module model/OutlineWiki
 * @version 3.0
 */
export default class OutlineWiki extends AbstractOutline {
  /**
   * Constructs a new <code>OutlineWiki</code>.
   * A model created for wiki page outline models
   * @alias module:model/OutlineWiki
   * @class
   * @extends module:model/AbstractOutline
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>OutlineWiki</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OutlineWiki} obj Optional instance to populate.
   * @return {module:model/OutlineWiki} The populated <code>OutlineWiki</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OutlineWiki();
      AbstractOutline.constructFromObject(data, obj);
      if (data.hasOwnProperty('wikiPageReferenceModel'))
        obj.wikiPageReferenceModel = WikiPageReference.constructFromObject(data['wikiPageReferenceModel']);
    }
    return obj;
  }
}

/**
 * @member {module:model/WikiPageReference} wikiPageReferenceModel
 */
OutlineWiki.prototype.wikiPageReferenceModel = undefined;

