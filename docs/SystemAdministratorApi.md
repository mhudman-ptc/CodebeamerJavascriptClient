# CodebeamerSwaggerApi.SystemAdministratorApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditPermissions**](SystemAdministratorApi.md#getAuditPermissions) | **POST** /v3/sysadmin/audit/permissions | Get audit permission entries

<a name="getAuditPermissions"></a>
# **getAuditPermissions**
> PaginatedAuditPermissionsResponse getAuditPermissions(body, opts)

Get audit permission entries

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


let apiInstance = new CodebeamerSwaggerApi.SystemAdministratorApi();
let body = new CodebeamerSwaggerApi.AuditPermissionsRequest(); // AuditPermissionsRequest | 
let opts = { 
  'page': 1, // Number | Index of page, starting from 1.
  'pageSize': 25 // Number | Number of items per page. Max value: 100
};
apiInstance.getAuditPermissions(body, opts, (error, data, response) => {
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
 **body** | [**AuditPermissionsRequest**](AuditPermissionsRequest.md)|  | 
 **page** | **Number**| Index of page, starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items per page. Max value: 100 | [optional] [default to 25]

### Return type

[**PaginatedAuditPermissionsResponse**](PaginatedAuditPermissionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

