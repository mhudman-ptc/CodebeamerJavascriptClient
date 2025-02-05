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
 * The Role model module.
 * @module model/Role
 * @version 3.0
 */
export default class Role {
  /**
   * Constructs a new <code>Role</code>.
   * @alias module:model/Role
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Role</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Role} obj Optional instance to populate.
   * @return {module:model/Role} The populated <code>Role</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Role();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('descriptionFormat'))
        obj.descriptionFormat = ApiClient.convertToType(data['descriptionFormat'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * Description of a role
 * @member {String} description
 */
Role.prototype.description = undefined;

/**
 * Allowed values for the <code>descriptionFormat</code> property.
 * @enum {String}
 * @readonly
 */
Role.DescriptionFormatEnum = {
  /**
   * value: "PlainText"
   * @const
   */
  plainText: "PlainText",

  /**
   * value: "Html"
   * @const
   */
  html: "Html",

  /**
   * value: "Wiki"
   * @const
   */
  wiki: "Wiki"
};
/**
 * Format of a role's description
 * @member {module:model/Role.DescriptionFormatEnum} descriptionFormat
 */
Role.prototype.descriptionFormat = undefined;

/**
 * Id of the entity
 * @member {Number} id
 */
Role.prototype.id = undefined;

/**
 * Name of the entity
 * @member {String} name
 */
Role.prototype.name = undefined;

