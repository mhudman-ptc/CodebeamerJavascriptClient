# CodebeamerSwaggerApi.TestManagementApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autoApplyStepReuses**](TestManagementApi.md#autoApplyStepReuses) | **POST** /v3/testcases/autoApplyStepReuses | Find duplicate TestSteps in a set of TestCases and converting duplicates to Reuses

<a name="autoApplyStepReuses"></a>
# **autoApplyStepReuses**
> [TrackerItemReference] autoApplyStepReuses(body)

Find duplicate TestSteps in a set of TestCases and converting duplicates to Reuses

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


let apiInstance = new CodebeamerSwaggerApi.TestManagementApi();
let body = new CodebeamerSwaggerApi.AutoApplyTestStepReuses(); // AutoApplyTestStepReuses | 

apiInstance.autoApplyStepReuses(body, (error, data, response) => {
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
 **body** | [**AutoApplyTestStepReuses**](AutoApplyTestStepReuses.md)|  | 

### Return type

[**[TrackerItemReference]**](TrackerItemReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

