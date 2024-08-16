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
 * The ExternalScmRepositoryRequest model module.
 * @module model/ExternalScmRepositoryRequest
 * @version 3.0
 */
export default class ExternalScmRepositoryRequest {
  /**
   * Constructs a new <code>ExternalScmRepositoryRequest</code>.
   * Basic properties required for codebeamer external scm repository item
   * @alias module:model/ExternalScmRepositoryRequest
   * @class
   * @param enablePatchSynchronization {Boolean} Enable or disable patch synchronization
   * @param name {String} Name of new CB external SCM repository
   * @param ownerName {String} Owner name or organization name of external SCM provider repository
   * @param remoteApiUrl {String} Base API URL of external SCM provider
   * @param repositoryName {String} Repository name on external SCM provider's side
   * @param scmType {String} External SCM provider
   */
  constructor(enablePatchSynchronization, name, ownerName, remoteApiUrl, repositoryName, scmType) {
    this.enablePatchSynchronization = enablePatchSynchronization;
    this.name = name;
    this.ownerName = ownerName;
    this.remoteApiUrl = remoteApiUrl;
    this.repositoryName = repositoryName;
    this.scmType = scmType;
  }

  /**
   * Constructs a <code>ExternalScmRepositoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalScmRepositoryRequest} obj Optional instance to populate.
   * @return {module:model/ExternalScmRepositoryRequest} The populated <code>ExternalScmRepositoryRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ExternalScmRepositoryRequest();
      if (data.hasOwnProperty('accessTokenId'))
        obj.accessTokenId = ApiClient.convertToType(data['accessTokenId'], 'Number');
      if (data.hasOwnProperty('accessTokenName'))
        obj.accessTokenName = ApiClient.convertToType(data['accessTokenName'], 'String');
      if (data.hasOwnProperty('accessTokenValue'))
        obj.accessTokenValue = ApiClient.convertToType(data['accessTokenValue'], 'String');
      if (data.hasOwnProperty('enablePatchSynchronization'))
        obj.enablePatchSynchronization = ApiClient.convertToType(data['enablePatchSynchronization'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('ownerName'))
        obj.ownerName = ApiClient.convertToType(data['ownerName'], 'String');
      if (data.hasOwnProperty('projectName'))
        obj.projectName = ApiClient.convertToType(data['projectName'], 'String');
      if (data.hasOwnProperty('remoteApiUrl'))
        obj.remoteApiUrl = ApiClient.convertToType(data['remoteApiUrl'], 'String');
      if (data.hasOwnProperty('repositoryName'))
        obj.repositoryName = ApiClient.convertToType(data['repositoryName'], 'String');
      if (data.hasOwnProperty('scmType'))
        obj.scmType = ApiClient.convertToType(data['scmType'], 'String');
      if (data.hasOwnProperty('secretId'))
        obj.secretId = ApiClient.convertToType(data['secretId'], 'Number');
    }
    return obj;
  }
}

/**
 * Id of already created token for external SCM provider API. Required in case when old access token should be used
 * @member {Number} accessTokenId
 */
ExternalScmRepositoryRequest.prototype.accessTokenId = undefined;

/**
 * Name of new access token for external SCM provider API. Required in case when new access token item should be created
 * @member {String} accessTokenName
 */
ExternalScmRepositoryRequest.prototype.accessTokenName = undefined;

/**
 * Value of new access token for external SCM provider API. Required in case when new access token item should be created
 * @member {String} accessTokenValue
 */
ExternalScmRepositoryRequest.prototype.accessTokenValue = undefined;

/**
 * Enable or disable patch synchronization
 * @member {Boolean} enablePatchSynchronization
 */
ExternalScmRepositoryRequest.prototype.enablePatchSynchronization = undefined;

/**
 * Name of new CB external SCM repository
 * @member {String} name
 */
ExternalScmRepositoryRequest.prototype.name = undefined;

/**
 * Owner name or organization name of external SCM provider repository
 * @member {String} ownerName
 */
ExternalScmRepositoryRequest.prototype.ownerName = undefined;

/**
 * Project name of external SCM provider repository
 * @member {String} projectName
 */
ExternalScmRepositoryRequest.prototype.projectName = undefined;

/**
 * Base API URL of external SCM provider
 * @member {String} remoteApiUrl
 */
ExternalScmRepositoryRequest.prototype.remoteApiUrl = undefined;

/**
 * Repository name on external SCM provider's side
 * @member {String} repositoryName
 */
ExternalScmRepositoryRequest.prototype.repositoryName = undefined;

/**
 * External SCM provider
 * @member {String} scmType
 */
ExternalScmRepositoryRequest.prototype.scmType = undefined;

/**
 * Id of already created Secret for external SCM provider API
 * @member {Number} secretId
 */
ExternalScmRepositoryRequest.prototype.secretId = undefined;

