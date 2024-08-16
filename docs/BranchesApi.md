# CodebeamerSwaggerApi.BranchesApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTrackerItemOnBranch**](BranchesApi.md#getTrackerItemOnBranch) | **GET** /v3/branches/{branchId}/item | Get tracker item on branch

<a name="getTrackerItemOnBranch"></a>
# **getTrackerItemOnBranch**
> TrackerItem getTrackerItemOnBranch(sourceItemId, branchId)

Get tracker item on branch

API can be used for finding a tracker item by a branch id

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


let apiInstance = new CodebeamerSwaggerApi.BranchesApi();
let sourceItemId = 56; // Number | 
let branchId = 56; // Number | 

apiInstance.getTrackerItemOnBranch(sourceItemId, branchId, (error, data, response) => {
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
 **sourceItemId** | **Number**|  | 
 **branchId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

