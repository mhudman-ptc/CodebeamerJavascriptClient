# CodebeamerSwaggerApi.RepositoryItemApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExternalScmRepository**](RepositoryItemApi.md#createExternalScmRepository) | **POST** /v3/trackers/projects/{projectId}/repository | Create an external scm repository item
[**updateExternalScmRepository**](RepositoryItemApi.md#updateExternalScmRepository) | **PUT** /v3/trackers/projects/{projectId}/repository/{repositoryId} | Update an external scm repository item

<a name="createExternalScmRepository"></a>
# **createExternalScmRepository**
> &#x27;Number&#x27; createExternalScmRepository(body, projectId)

Create an external scm repository item

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


let apiInstance = new CodebeamerSwaggerApi.RepositoryItemApi();
let body = new CodebeamerSwaggerApi.ExternalScmRepositoryRequest(); // ExternalScmRepositoryRequest | 
let projectId = 56; // Number | CB project id

apiInstance.createExternalScmRepository(body, projectId, (error, data, response) => {
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
 **body** | [**ExternalScmRepositoryRequest**](ExternalScmRepositoryRequest.md)|  | 
 **projectId** | **Number**| CB project id | 

### Return type

**&#x27;Number&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalScmRepository"></a>
# **updateExternalScmRepository**
> &#x27;Number&#x27; updateExternalScmRepository(body, projectId, repositoryId)

Update an external scm repository item

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


let apiInstance = new CodebeamerSwaggerApi.RepositoryItemApi();
let body = new CodebeamerSwaggerApi.ExternalScmRepositoryRequest(); // ExternalScmRepositoryRequest | 
let projectId = 56; // Number | CB project id
let repositoryId = 56; // Number | CB repository id

apiInstance.updateExternalScmRepository(body, projectId, repositoryId, (error, data, response) => {
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
 **body** | [**ExternalScmRepositoryRequest**](ExternalScmRepositoryRequest.md)|  | 
 **projectId** | **Number**| CB project id | 
 **repositoryId** | **Number**| CB repository id | 

### Return type

**&#x27;Number&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

