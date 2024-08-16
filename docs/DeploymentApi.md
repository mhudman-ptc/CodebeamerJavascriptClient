# CodebeamerSwaggerApi.DeploymentApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportForDeployment**](DeploymentApi.md#exportForDeployment) | **POST** /v3/deployment/export | Export projects for deployment
[**uploadDeployment**](DeploymentApi.md#uploadDeployment) | **POST** /v3/deployment | Start a deployment process

<a name="exportForDeployment"></a>
# **exportForDeployment**
> JobReference exportForDeployment(body)

Export projects for deployment

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


let apiInstance = new CodebeamerSwaggerApi.DeploymentApi();
let body = new CodebeamerSwaggerApi.ExportForDeploymentRequest(); // ExportForDeploymentRequest | 

apiInstance.exportForDeployment(body, (error, data, response) => {
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
 **body** | [**ExportForDeploymentRequest**](ExportForDeploymentRequest.md)|  | 

### Return type

[**JobReference**](JobReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadDeployment"></a>
# **uploadDeployment**
> JobReference uploadDeployment(opts)

Start a deployment process

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


let apiInstance = new CodebeamerSwaggerApi.DeploymentApi();
let opts = { 
  'importTrackerHierarchy': true, // Boolean | 
  'imports': "imports_example", // Blob | 
  'password': "password_example", // String | 
  'skipRefreshComputedFields': true // Boolean | 
};
apiInstance.uploadDeployment(opts, (error, data, response) => {
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
 **importTrackerHierarchy** | **Boolean**|  | [optional] 
 **imports** | **Blob**|  | [optional] 
 **password** | **String**|  | [optional] 
 **skipRefreshComputedFields** | **Boolean**|  | [optional] 

### Return type

[**JobReference**](JobReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

