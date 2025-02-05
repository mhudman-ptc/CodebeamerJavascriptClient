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
import ResourceForbiddenException from '../model/ResourceForbiddenException';
import ResourceNotFoundException from '../model/ResourceNotFoundException';
import RestException from '../model/RestException';
import Role from '../model/Role';
import RoleReference from '../model/RoleReference';
import TooManyRequestsException from '../model/TooManyRequestsException';

/**
* Role service.
* @module api/RoleApi
* @version 3.0
*/
export default class RoleApi {

    /**
    * Constructs a new RoleApi. 
    * @alias module:api/RoleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getRole operation.
     * @callback moduleapi/RoleApi~getRoleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Role{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get role
     * @param {Number} roleId 
     * @param {module:api/RoleApi~getRoleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRole(roleId, callback) {
      
      let postBody = null;
      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw new Error("Missing the required parameter 'roleId' when calling getRole");
      }

      let pathParams = {
        'roleId': roleId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = Role;

      return this.apiClient.callApi(
        '/v3/roles/{roleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRoles operation.
     * @callback moduleapi/RoleApi~getRolesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RoleReference>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get roles
     * @param {module:api/RoleApi~getRolesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRoles(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = [RoleReference];

      return this.apiClient.callApi(
        '/v3/roles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}