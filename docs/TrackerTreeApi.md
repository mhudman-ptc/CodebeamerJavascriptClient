# CodebeamerSwaggerApi.TrackerTreeApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTrackerTree**](TrackerTreeApi.md#listTrackerTree) | **GET** /v3/trackers/tree | List tracker tree
[**updateTrackerTree**](TrackerTreeApi.md#updateTrackerTree) | **POST** /v3/trackers/tree/update | Update tracker tree

<a name="listTrackerTree"></a>
# **listTrackerTree**
> [TrackerTree] listTrackerTree(projectId, opts)

List tracker tree

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


let apiInstance = new CodebeamerSwaggerApi.TrackerTreeApi();
let projectId = 56; // Number | 
let opts = { 
  'workingSetId': 56, // Number | 
  'revision': 56 // Number | 
};
apiInstance.listTrackerTree(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **workingSetId** | **Number**|  | [optional] 
 **revision** | **Number**|  | [optional] 

### Return type

[**[TrackerTree]**](TrackerTree.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTrackerTree"></a>
# **updateTrackerTree**
> JsonView updateTrackerTree(body, projectId, opts)

Update tracker tree

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


let apiInstance = new CodebeamerSwaggerApi.TrackerTreeApi();
let body = [new CodebeamerSwaggerApi.TrackerTree()]; // [TrackerTree] | 
let projectId = 56; // Number | 
let opts = { 
  'workingSetId': 56 // Number | 
};
apiInstance.updateTrackerTree(body, projectId, opts, (error, data, response) => {
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
 **body** | [**[TrackerTree]**](TrackerTree.md)|  | 
 **projectId** | **Number**|  | 
 **workingSetId** | **Number**|  | [optional] 

### Return type

[**JsonView**](JsonView.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

