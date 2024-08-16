# CodebeamerSwaggerApi.TestRunApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTestRunForTestCase**](TestRunApi.md#createTestRunForTestCase) | **POST** /v3/trackers/{testRunTrackerId}/testruns | Create a new test run for test cases or test sets
[**createTestRunForTestSets**](TestRunApi.md#createTestRunForTestSets) | **POST** /v3/trackers/{testRunTrackerId}/testruns/generatefromtestset | Create a new test run for test cases or test sets
[**updateTestRunResult**](TestRunApi.md#updateTestRunResult) | **PUT** /v3/testruns/{testRunId} | Update result of a Test Run. 
[**uploadAutomatedTestResults**](TestRunApi.md#uploadAutomatedTestResults) | **POST** /v3/trackers/{testRunTrackerId}/automatedtestruns | Create a new test run for large number of automated test cases

<a name="createTestRunForTestCase"></a>
# **createTestRunForTestCase**
> TrackerItem createTestRunForTestCase(body, testRunTrackerId)

Create a new test run for test cases or test sets

For multiple test sets please use trackers/{testRunTrackerId}/testruns/generatefromtestset endpoint.

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


let apiInstance = new CodebeamerSwaggerApi.TestRunApi();
let body = new CodebeamerSwaggerApi.CreateTestRunRequest(); // CreateTestRunRequest | 
let testRunTrackerId = 56; // Number | 

apiInstance.createTestRunForTestCase(body, testRunTrackerId, (error, data, response) => {
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
 **body** | [**CreateTestRunRequest**](CreateTestRunRequest.md)|  | 
 **testRunTrackerId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTestRunForTestSets"></a>
# **createTestRunForTestSets**
> TestRunResult createTestRunForTestSets(body, testRunTrackerId)

Create a new test run for test cases or test sets

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


let apiInstance = new CodebeamerSwaggerApi.TestRunApi();
let body = new CodebeamerSwaggerApi.CreateTestRunFromTestSetsRequest(); // CreateTestRunFromTestSetsRequest | 
let testRunTrackerId = 56; // Number | 

apiInstance.createTestRunForTestSets(body, testRunTrackerId, (error, data, response) => {
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
 **body** | [**CreateTestRunFromTestSetsRequest**](CreateTestRunFromTestSetsRequest.md)|  | 
 **testRunTrackerId** | **Number**|  | 

### Return type

[**TestRunResult**](TestRunResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTestRunResult"></a>
# **updateTestRunResult**
> TrackerItem updateTestRunResult(body, testRunId)

Update result of a Test Run. 

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


let apiInstance = new CodebeamerSwaggerApi.TestRunApi();
let body = new CodebeamerSwaggerApi.UpdateTestRunRequest(); // UpdateTestRunRequest | 
let testRunId = 56; // Number | 

apiInstance.updateTestRunResult(body, testRunId, (error, data, response) => {
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
 **body** | [**UpdateTestRunRequest**](UpdateTestRunRequest.md)|  | 
 **testRunId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadAutomatedTestResults"></a>
# **uploadAutomatedTestResults**
> TrackerItem uploadAutomatedTestResults(body, testRunTrackerId)

Create a new test run for large number of automated test cases

Upload large amount of automated test case run results into a single test run. This process may take a while, please check your proxy settings to prevent timeout.

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


let apiInstance = new CodebeamerSwaggerApi.TestRunApi();
let body = new CodebeamerSwaggerApi.AutomatedTestRunRequest(); // AutomatedTestRunRequest | 
let testRunTrackerId = 56; // Number | 

apiInstance.uploadAutomatedTestResults(body, testRunTrackerId, (error, data, response) => {
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
 **body** | [**AutomatedTestRunRequest**](AutomatedTestRunRequest.md)|  | 
 **testRunTrackerId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

