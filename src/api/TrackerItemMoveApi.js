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
import BadRequestException from '../model/BadRequestException';
import InternalServerErrorException from '../model/InternalServerErrorException';
import JobReference from '../model/JobReference';
import ResourceForbiddenException from '../model/ResourceForbiddenException';
import ResourceNotFoundException from '../model/ResourceNotFoundException';
import ResourceUnauthorizedException from '../model/ResourceUnauthorizedException';
import RestException from '../model/RestException';
import TooManyRequestsException from '../model/TooManyRequestsException';
import TrackerItemFieldMappingInfo from '../model/TrackerItemFieldMappingInfo';
import TrackerItemMoveRequest from '../model/TrackerItemMoveRequest';

/**
* TrackerItemMove service.
* @module api/TrackerItemMoveApi
* @version 3.0
*/
export default class TrackerItemMoveApi {

    /**
    * Constructs a new TrackerItemMoveApi. 
    * @alias module:api/TrackerItemMoveApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getItemMoveFieldMapping operation.
     * @callback moduleapi/TrackerItemMoveApi~getItemMoveFieldMappingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TrackerItemFieldMappingInfo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the default field mapping between two trackers
     * @param {Number} sourceTrackerId The id of the source Tracker
     * @param {Number} targetTrackerId The id of the target Tracker
     * @param {module:api/TrackerItemMoveApi~getItemMoveFieldMappingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getItemMoveFieldMapping(sourceTrackerId, targetTrackerId, callback) {
      
      let postBody = null;
      // verify the required parameter 'sourceTrackerId' is set
      if (sourceTrackerId === undefined || sourceTrackerId === null) {
        throw new Error("Missing the required parameter 'sourceTrackerId' when calling getItemMoveFieldMapping");
      }
      // verify the required parameter 'targetTrackerId' is set
      if (targetTrackerId === undefined || targetTrackerId === null) {
        throw new Error("Missing the required parameter 'targetTrackerId' when calling getItemMoveFieldMapping");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'sourceTrackerId': sourceTrackerId,'targetTrackerId': targetTrackerId
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth', 'BasicAuth', 'BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', '*/*'];
      let returnType = TrackerItemFieldMappingInfo;

      return this.apiClient.callApi(
        '/v3/items/move/field-mapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the moveTrackerItems operation.
     * @callback moduleapi/TrackerItemMoveApi~moveTrackerItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobReference{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move Tracker Items from the Source Tracker to the Target Tracker
     * Move Tracker Items from the Source Tracker to the Target Tracker. The items are optional, if it is not provided all the Tracker Items will be moved from the Source Tracker. All the fields from the Source Tracker must be in the mapping. If you want to ignore one you set the targetField to null in the request.
     * @param {module:model/TrackerItemMoveRequest} body 
     * @param {module:api/TrackerItemMoveApi~moveTrackerItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    moveTrackerItems(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling moveTrackerItems");
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
      let returnType = JobReference;

      return this.apiClient.callApi(
        '/v3/items/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}