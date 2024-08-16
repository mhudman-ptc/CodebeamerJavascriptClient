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
import ReportColumn from './ReportColumn';
import ReportGroup from './ReportGroup';
import ReportPagingInformation from './ReportPagingInformation';
import ReportReference from './ReportReference';

/**
 * The ReportResult model module.
 * @module model/ReportResult
 * @version 3.0
 */
export default class ReportResult {
  /**
   * Constructs a new <code>ReportResult</code>.
   * Report data model
   * @alias module:model/ReportResult
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReportResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportResult} obj Optional instance to populate.
   * @return {module:model/ReportResult} The populated <code>ReportResult</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReportResult();
      if (data.hasOwnProperty('cbQL'))
        obj.cbQL = ApiClient.convertToType(data['cbQL'], 'String');
      if (data.hasOwnProperty('columns'))
        obj.columns = ApiClient.convertToType(data['columns'], [ReportColumn]);
      if (data.hasOwnProperty('data'))
        obj.data = ReportGroup.constructFromObject(data['data']);
      if (data.hasOwnProperty('pagingInformation'))
        obj.pagingInformation = ReportPagingInformation.constructFromObject(data['pagingInformation']);
      if (data.hasOwnProperty('report'))
        obj.report = ReportReference.constructFromObject(data['report']);
      if (data.hasOwnProperty('showAllChildren'))
        obj.showAllChildren = ApiClient.convertToType(data['showAllChildren'], 'Boolean');
    }
    return obj;
  }
}

/**
 * CbQL query behind the report
 * @member {String} cbQL
 */
ReportResult.prototype.cbQL = undefined;

/**
 * Column information
 * @member {Array.<module:model/ReportColumn>} columns
 */
ReportResult.prototype.columns = undefined;

/**
 * @member {module:model/ReportGroup} data
 */
ReportResult.prototype.data = undefined;

/**
 * @member {module:model/ReportPagingInformation} pagingInformation
 */
ReportResult.prototype.pagingInformation = undefined;

/**
 * @member {module:model/ReportReference} report
 */
ReportResult.prototype.report = undefined;

/**
 * Indicator to ability to collapse/expand all child items.
 * @member {Boolean} showAllChildren
 */
ReportResult.prototype.showAllChildren = undefined;

