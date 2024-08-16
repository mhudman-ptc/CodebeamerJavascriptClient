# CodebeamerSwaggerApi.ExportApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchGetTrackerItemReviews**](ExportApi.md#batchGetTrackerItemReviews) | **POST** /v3/export/tracker-item-reviews | Get tracker item reviews by a list of tracker item IDs
[**callExport**](ExportApi.md#callExport) | **POST** /v3/projects/{projectId}/content | Exports the specified project to a zip file
[**exportToWord**](ExportApi.md#exportToWord) | **POST** /v3/export/exportToWord | Exports items to Word
[**getTrackerItems**](ExportApi.md#getTrackerItems) | **POST** /v3/export/items | Get tracker items

<a name="batchGetTrackerItemReviews"></a>
# **batchGetTrackerItemReviews**
> [TrackerItemWithTrackerItemReviewsExport] batchGetTrackerItemReviews(body)

Get tracker item reviews by a list of tracker item IDs

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


let apiInstance = new CodebeamerSwaggerApi.ExportApi();
let body = new CodebeamerSwaggerApi.BatchGetTrackerItemReviewsRequest(); // BatchGetTrackerItemReviewsRequest | 

apiInstance.batchGetTrackerItemReviews(body, (error, data, response) => {
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
 **body** | [**BatchGetTrackerItemReviewsRequest**](BatchGetTrackerItemReviewsRequest.md)|  | 

### Return type

[**[TrackerItemWithTrackerItemReviewsExport]**](TrackerItemWithTrackerItemReviewsExport.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="callExport"></a>
# **callExport**
> &#x27;Blob&#x27; callExport(body, projectId)

Exports the specified project to a zip file

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


let apiInstance = new CodebeamerSwaggerApi.ExportApi();
let body = new CodebeamerSwaggerApi.ExportProject(); // ExportProject | 
let projectId = 56; // Number | 

apiInstance.callExport(body, projectId, (error, data, response) => {
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
 **body** | [**ExportProject**](ExportProject.md)|  | 
 **projectId** | **Number**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip, application/json

<a name="exportToWord"></a>
# **exportToWord**
> JobReference exportToWord(body)

Exports items to Word

API can be used for exporting items to Word

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


let apiInstance = new CodebeamerSwaggerApi.ExportApi();
let body = new CodebeamerSwaggerApi.ExportToWordRequest(); // ExportToWordRequest | 

apiInstance.exportToWord(body, (error, data, response) => {
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
 **body** | [**ExportToWordRequest**](ExportToWordRequest.md)|  | 

### Return type

[**JobReference**](JobReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTrackerItems"></a>
# **getTrackerItems**
> [TrackerItem] getTrackerItems(body, opts)

Get tracker items

API can be used for fetching basic information of tracker items

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


let apiInstance = new CodebeamerSwaggerApi.ExportApi();
let body = new CodebeamerSwaggerApi.TrackerItemsRequest(); // TrackerItemsRequest | 
let opts = { 
  'baselineId': 56 // Number | 
};
apiInstance.getTrackerItems(body, opts, (error, data, response) => {
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
 **body** | [**TrackerItemsRequest**](TrackerItemsRequest.md)|  | 
 **baselineId** | **Number**|  | [optional] 

### Return type

[**[TrackerItem]**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

