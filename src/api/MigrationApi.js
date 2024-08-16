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
import ApiClient from "../ApiClient";
import AttachmentMigrationRequest from '../model/AttachmentMigrationRequest';
import BadRequestException from '../model/BadRequestException';
import ResourceForbiddenException from '../model/ResourceForbiddenException';
import ResourceUnauthorizedException from '../model/ResourceUnauthorizedException';
import TooManyRequestsException from '../model/TooManyRequestsException';

/**
* Migration service.
* @module api/MigrationApi
* @version 3.0
*/
export default class MigrationApi {

    /**
    * Constructs a new MigrationApi. 
    * @alias module:api/MigrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the migrateAttachments operation.
     * @callback moduleapi/MigrationApi~migrateAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Migrate attachments
     * An endpoint for migrating attachments from a preconfigured source directory.
     * @param {module:model/AttachmentMigrationRequest} body 
     * @param {module:api/MigrationApi~migrateAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    migrateAttachments(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling migrateAttachments");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v3/migration/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}