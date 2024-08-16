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
import ResourceUnauthorizedException from '../model/ResourceUnauthorizedException';
import RestException from '../model/RestException';
import TooManyRequestsException from '../model/TooManyRequestsException';
import UserGroup from '../model/UserGroup';
import UserGroupReference from '../model/UserGroupReference';
import UserReferenceSearchResult from '../model/UserReferenceSearchResult';

/**
* Group service.
* @module api/GroupApi
* @version 3.0
*/
export default class GroupApi {

    /**
    * Constructs a new GroupApi. 
    * @alias module:api/GroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback moduleapi/GroupApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserGroup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user group
     * @param {Number} groupId 
     * @param {module:api/GroupApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGroup(groupId, callback) {
      
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroup");
      }

      let pathParams = {
        'groupId': groupId
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
      let returnType = UserGroup;

      return this.apiClient.callApi(
        '/v3/users/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGroupMembers operation.
     * @callback moduleapi/GroupApi~getGroupMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserReferenceSearchResult{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all members of a user group
     * @param {Number} groupId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Index of the result page starting from 1. (default to <.>)
     * @param {Number} opts.pageSize Number of items in a result page. Max value: 500 (default to <.>)
     * @param {module:api/GroupApi~getGroupMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGroupMembers(groupId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupMembers");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'page': opts['page'],'pageSize': opts['pageSize']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = UserReferenceSearchResult;

      return this.apiClient.callApi(
        '/v3/users/groups/{groupId}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback moduleapi/GroupApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserGroupReference>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user groups
     * @param {module:api/GroupApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGroups(callback) {
      
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
      let returnType = [UserGroupReference];

      return this.apiClient.callApi(
        '/v3/users/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}