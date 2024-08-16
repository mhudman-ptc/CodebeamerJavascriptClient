# CodebeamerSwaggerApi.TrackerReportApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrackerReport**](TrackerReportApi.md#createTrackerReport) | **POST** /v3/trackers/{trackerId}/reports | Creates a report of a specific tracker
[**deleteTrackerReport**](TrackerReportApi.md#deleteTrackerReport) | **DELETE** /v3/trackers/{trackerId}/reports/{reportId} | Deletes a report of a specific tracker
[**getTrackerReport**](TrackerReportApi.md#getTrackerReport) | **GET** /v3/trackers/{trackerId}/reports/{reportId}/results | Get a report of a specific tracker
[**getTrackerReportItems**](TrackerReportApi.md#getTrackerReportItems) | **GET** /v3/trackers/{trackerId}/reports/{reportId}/items | Get report items of a specific tracker view
[**getTrackerReports**](TrackerReportApi.md#getTrackerReports) | **GET** /v3/trackers/{trackerId}/reports | Get all reports of a specific tracker
[**updateTrackerReport**](TrackerReportApi.md#updateTrackerReport) | **PUT** /v3/trackers/{trackerId}/reports/{reportId} | Updates a report of a specific tracker

<a name="createTrackerReport"></a>
# **createTrackerReport**
> TrackerReportSettings createTrackerReport(body, trackerId)

Creates a report of a specific tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let body = new CodebeamerSwaggerApi.TrackerReportSettings(); // TrackerReportSettings | 
let trackerId = 56; // Number | 

apiInstance.createTrackerReport(body, trackerId, (error, data, response) => {
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
 **body** | [**TrackerReportSettings**](TrackerReportSettings.md)|  | 
 **trackerId** | **Number**|  | 

### Return type

[**TrackerReportSettings**](TrackerReportSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTrackerReport"></a>
# **deleteTrackerReport**
> deleteTrackerReport(trackerId, reportId)

Deletes a report of a specific tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let trackerId = 56; // Number | 
let reportId = 56; // Number | 

apiInstance.deleteTrackerReport(trackerId, reportId, (error, data, response) => {
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
 **trackerId** | **Number**|  | 
 **reportId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerReport"></a>
# **getTrackerReport**
> ReportResult getTrackerReport(trackerId, reportId, opts)

Get a report of a specific tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let trackerId = 56; // Number | 
let reportId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of a report page starting from 1.
  'pageSize': 25 // Number | Number of items a report page. Max value: 500
};
apiInstance.getTrackerReport(trackerId, reportId, opts, (error, data, response) => {
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
 **trackerId** | **Number**|  | 
 **reportId** | **Number**|  | 
 **page** | **Number**| Index of a report page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items a report page. Max value: 500 | [optional] [default to 25]

### Return type

[**ReportResult**](ReportResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerReportItems"></a>
# **getTrackerReportItems**
> ReportItemResult getTrackerReportItems(trackerId, reportId, opts)

Get report items of a specific tracker view

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let trackerId = 56; // Number | 
let reportId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of a report page starting from 1.
  'pageSize': 20 // Number | Number of items a report page. Max value: 500
};
apiInstance.getTrackerReportItems(trackerId, reportId, opts, (error, data, response) => {
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
 **trackerId** | **Number**|  | 
 **reportId** | **Number**|  | 
 **page** | **Number**| Index of a report page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items a report page. Max value: 500 | [optional] [default to 20]

### Return type

[**ReportItemResult**](ReportItemResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerReports"></a>
# **getTrackerReports**
> [ReportReference] getTrackerReports(trackerId)

Get all reports of a specific tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let trackerId = 56; // Number | 

apiInstance.getTrackerReports(trackerId, (error, data, response) => {
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
 **trackerId** | **Number**|  | 

### Return type

[**[ReportReference]**](ReportReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTrackerReport"></a>
# **updateTrackerReport**
> TrackerReportSettings updateTrackerReport(body, trackerId, reportId)

Updates a report of a specific tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerReportApi();
let body = new CodebeamerSwaggerApi.TrackerReportSettings(); // TrackerReportSettings | 
let trackerId = 56; // Number | 
let reportId = 56; // Number | 

apiInstance.updateTrackerReport(body, trackerId, reportId, (error, data, response) => {
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
 **body** | [**TrackerReportSettings**](TrackerReportSettings.md)|  | 
 **trackerId** | **Number**|  | 
 **reportId** | **Number**|  | 

### Return type

[**TrackerReportSettings**](TrackerReportSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

