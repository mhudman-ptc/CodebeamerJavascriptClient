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
import DependencyAttribute from './DependencyAttribute';
import ProjectReference from './ProjectReference';

/**
 * The CrossProjectDependency model module.
 * @module model/CrossProjectDependency
 * @version 3.0
 */
export default class CrossProjectDependency {
  /**
   * Constructs a new <code>CrossProjectDependency</code>.
   * Dependency information between two projects.
   * @alias module:model/CrossProjectDependency
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CrossProjectDependency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CrossProjectDependency} obj Optional instance to populate.
   * @return {module:model/CrossProjectDependency} The populated <code>CrossProjectDependency</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CrossProjectDependency();
      if (data.hasOwnProperty('referredFrom'))
        obj.referredFrom = ApiClient.convertToType(data['referredFrom'], [DependencyAttribute]);
      if (data.hasOwnProperty('sourceProject'))
        obj.sourceProject = ProjectReference.constructFromObject(data['sourceProject']);
      if (data.hasOwnProperty('targetProject'))
        obj.targetProject = ProjectReference.constructFromObject(data['targetProject']);
    }
    return obj;
  }
}

/**
 * Information on where references were found in source project.
 * @member {Array.<module:model/DependencyAttribute>} referredFrom
 */
CrossProjectDependency.prototype.referredFrom = undefined;

/**
 * @member {module:model/ProjectReference} sourceProject
 */
CrossProjectDependency.prototype.sourceProject = undefined;

/**
 * @member {module:model/ProjectReference} targetProject
 */
CrossProjectDependency.prototype.targetProject = undefined;

