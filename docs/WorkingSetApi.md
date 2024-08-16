# CodebeamerSwaggerApi.WorkingSetApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemsMappingInWorkingSet**](WorkingSetApi.md#getItemsMappingInWorkingSet) | **POST** /v3/working-sets/items-mapping | Maps Tracker Items in Working-Set
[**getTrackerWorkingSets**](WorkingSetApi.md#getTrackerWorkingSets) | **GET** /v3/trackers/{trackerId}/working-sets | Lists Working-Sets
[**getWorkingSetInformation**](WorkingSetApi.md#getWorkingSetInformation) | **GET** /v3/working-sets/{workingSetId} | Working-Set information
[**getWorkingSetTrackers**](WorkingSetApi.md#getWorkingSetTrackers) | **GET** /v3/working-sets/{workingSetId}/trackers |  Lists the trackers in a Working-Set
[**listWorkingSetsOfProject**](WorkingSetApi.md#listWorkingSetsOfProject) | **GET** /v3/projects/{projectId}/working-sets | Project level Working-Sets information

<a name="getItemsMappingInWorkingSet"></a>
# **getItemsMappingInWorkingSet**
> [WorkingSetItemMapping] getItemsMappingInWorkingSet(body)

Maps Tracker Items in Working-Set

Maps Tracker Items to the corresponding Tracker Items in target Working-Set.

### Example
```javascript
import {CodebeamerSwaggerApi} from 'codebeamer_swagger_api';
let defaultClient = CodebeamerSwaggerApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';


let apiInstance = new CodebeamerSwaggerApi.WorkingSetApi();
let body = new CodebeamerSwaggerApi.WorkingSetItemsMappingRequest(); // WorkingSetItemsMappingRequest | 

apiInstance.getItemsMappingInWorkingSet(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkingSetItemsMappingRequest**](WorkingSetItemsMappingRequest.md)|  | 

### Return type

[**[WorkingSetItemMapping]**](WorkingSetItemMapping.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTrackerWorkingSets"></a>
# **getTrackerWorkingSets**
> [TrackerWorkingSet] getTrackerWorkingSets(trackerId, opts)

Lists Working-Sets

Lists Working-Sets that contain the given Tracker or Branch.

### Example
```javascript
import {CodebeamerSwaggerApi} from 'codebeamer_swagger_api';
let defaultClient = CodebeamerSwaggerApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';


let apiInstance = new CodebeamerSwaggerApi.WorkingSetApi();
let trackerId = 56; // Number | Tracker or Branch id
let opts = { 
  'includeDeleted': true // Boolean | Find Tracker or Branch if deleted and the result contains the deleted Working-Sets
};
apiInstance.getTrackerWorkingSets(trackerId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackerId** | **Number**| Tracker or Branch id | 
 **includeDeleted** | **Boolean**| Find Tracker or Branch if deleted and the result contains the deleted Working-Sets | [optional] 

### Return type

[**[TrackerWorkingSet]**](TrackerWorkingSet.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkingSetInformation"></a>
# **getWorkingSetInformation**
> WorkingSetInformation getWorkingSetInformation(workingSetId, opts)

Working-Set information

Gets the Working-Set information for the given id.

### Example
```javascript
import {CodebeamerSwaggerApi} from 'codebeamer_swagger_api';
let defaultClient = CodebeamerSwaggerApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';


let apiInstance = new CodebeamerSwaggerApi.WorkingSetApi();
let workingSetId = 56; // Number | Id of the Working-Set
let opts = { 
  'includeDeleted': true // Boolean | The result contains the deleted Working-Sets
};
apiInstance.getWorkingSetInformation(workingSetId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workingSetId** | **Number**| Id of the Working-Set | 
 **includeDeleted** | **Boolean**| The result contains the deleted Working-Sets | [optional] 

### Return type

[**WorkingSetInformation**](WorkingSetInformation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWorkingSetTrackers"></a>
# **getWorkingSetTrackers**
> [WorkingSetTracker] getWorkingSetTrackers(workingSetId, opts)

 Lists the trackers in a Working-Set

Lists the trackers (shared and included) in the given Working-Set.

### Example
```javascript
import {CodebeamerSwaggerApi} from 'codebeamer_swagger_api';
let defaultClient = CodebeamerSwaggerApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';


let apiInstance = new CodebeamerSwaggerApi.WorkingSetApi();
let workingSetId = 56; // Number | Working-Set id
let opts = { 
  'includeDeleted': true // Boolean | The result contains the deleted Trackers
};
apiInstance.getWorkingSetTrackers(workingSetId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workingSetId** | **Number**| Working-Set id | 
 **includeDeleted** | **Boolean**| The result contains the deleted Trackers | [optional] 

### Return type

[**[WorkingSetTracker]**](WorkingSetTracker.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listWorkingSetsOfProject"></a>
# **listWorkingSetsOfProject**
> [WorkingSetMinimal] listWorkingSetsOfProject(projectId, opts)

Project level Working-Sets information

Lists top-level Working-Sets minimal information for the given project.

### Example
```javascript
import {CodebeamerSwaggerApi} from 'codebeamer_swagger_api';
let defaultClient = CodebeamerSwaggerApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';


let apiInstance = new CodebeamerSwaggerApi.WorkingSetApi();
let projectId = 56; // Number | The id of the project
let opts = { 
  'includeDeleted': true // Boolean | The result lists the deleted Working-Sets
};
apiInstance.listWorkingSetsOfProject(projectId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **Number**| The id of the project | 
 **includeDeleted** | **Boolean**| The result lists the deleted Working-Sets | [optional] 

### Return type

[**[WorkingSetMinimal]**](WorkingSetMinimal.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

