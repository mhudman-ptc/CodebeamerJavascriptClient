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
 * The DeploymentModel model module.
 * @module model/DeploymentModel
 * @version 3.0
 */
export default class DeploymentModel {
  /**
   * Constructs a new <code>DeploymentModel</code>.
   * @alias module:model/DeploymentModel
   * @class
   * @param imports {Blob} Deployment files
   */
  constructor(imports) {
    this.imports = imports;
  }

  /**
   * Constructs a <code>DeploymentModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeploymentModel} obj Optional instance to populate.
   * @return {module:model/DeploymentModel} The populated <code>DeploymentModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeploymentModel();
      if (data.hasOwnProperty('importTrackerHierarchy'))
        obj.importTrackerHierarchy = ApiClient.convertToType(data['importTrackerHierarchy'], 'Boolean');
      if (data.hasOwnProperty('imports'))
        obj.imports = ApiClient.convertToType(data['imports'], 'Blob');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('skipRefreshComputedFields'))
        obj.skipRefreshComputedFields = ApiClient.convertToType(data['skipRefreshComputedFields'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Import tracker inheritance. This is controlled by Application Configuration. Can be true if this configuration is enabled.
 * @member {Boolean} importTrackerHierarchy
 */
DeploymentModel.prototype.importTrackerHierarchy = undefined;

/**
 * Deployment files
 * @member {Blob} imports
 */
DeploymentModel.prototype.imports = undefined;

/**
 * Import file password
 * @member {String} password
 */
DeploymentModel.prototype.password = undefined;

/**
 * Skip refresh computed fields on tracker items
 * @member {Boolean} skipRefreshComputedFields
 */
DeploymentModel.prototype.skipRefreshComputedFields = undefined;

