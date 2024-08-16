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
import InternalServerErrorException from '../model/InternalServerErrorException';
import InvalidParametersException from '../model/InvalidParametersException';
import ResourceForbiddenException from '../model/ResourceForbiddenException';
import ResourceNotFoundException from '../model/ResourceNotFoundException';
import ResourceUnauthorizedException from '../model/ResourceUnauthorizedException';
import RestException from '../model/RestException';
import TooManyRequestsException from '../model/TooManyRequestsException';
import WorkingSetPermissionRequest from '../model/WorkingSetPermissionRequest';

/**
* WorkingSetPermission service.
* @module api/WorkingSetPermissionApi
* @version 3.0
*/
export default class WorkingSetPermissionApi {

    /**
    * Constructs a new WorkingSetPermissionApi. 
    * @alias module:api/WorkingSetPermissionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the updateWorkingSetPermission operation.
     * @callback moduleapi/WorkingSetPermissionApi~updateWorkingSetPermissionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the trackers permissions for specific roles in the given workingset
     * @param {module:model/WorkingSetPermissionRequest} body 
     * @param {Number} workingSetId 
     * @param {module:api/WorkingSetPermissionApi~updateWorkingSetPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateWorkingSetPermission(body, workingSetId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateWorkingSetPermission");
      }
      // verify the required parameter 'workingSetId' is set
      if (workingSetId === undefined || workingSetId === null) {
        throw new Error("Missing the required parameter 'workingSetId' when calling updateWorkingSetPermission");
      }

      let pathParams = {
        'workingSetId': workingSetId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*', 'application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v3/workingset/{workingSetId}/permission', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}