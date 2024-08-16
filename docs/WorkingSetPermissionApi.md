# CodebeamerSwaggerApi.WorkingSetPermissionApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateWorkingSetPermission**](WorkingSetPermissionApi.md#updateWorkingSetPermission) | **POST** /v3/workingset/{workingSetId}/permission | Set the trackers permissions for specific roles in the given workingset

<a name="updateWorkingSetPermission"></a>
# **updateWorkingSetPermission**
> updateWorkingSetPermission(body, workingSetId)

Set the trackers permissions for specific roles in the given workingset

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


let apiInstance = new CodebeamerSwaggerApi.WorkingSetPermissionApi();
let body = new CodebeamerSwaggerApi.WorkingSetPermissionRequest(); // WorkingSetPermissionRequest | 
let workingSetId = 56; // Number | 

apiInstance.updateWorkingSetPermission(body, workingSetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**WorkingSetPermissionRequest**](WorkingSetPermissionRequest.md)|  | 
 **workingSetId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*, application/json

