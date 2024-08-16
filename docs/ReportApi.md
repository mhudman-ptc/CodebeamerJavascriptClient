# CodebeamerSwaggerApi.ReportApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReport**](ReportApi.md#createReport) | **POST** /v3/reports | Create a report
[**getReportById**](ReportApi.md#getReportById) | **GET** /v3/reports/{reportId}/results | Get a report results by id of the report
[**getReportItemsById**](ReportApi.md#getReportItemsById) | **GET** /v3/reports/{reportId}/items | Get a report items by id of the report
[**updateReport**](ReportApi.md#updateReport) | **PUT** /v3/reports/{reportId} | Update report settings

<a name="createReport"></a>
# **createReport**
> SimpleReportSettings createReport(body)

Create a report

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


let apiInstance = new CodebeamerSwaggerApi.ReportApi();
let body = new CodebeamerSwaggerApi.SimpleReportSettings(); // SimpleReportSettings | 

apiInstance.createReport(body, (error, data, response) => {
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
 **body** | [**SimpleReportSettings**](SimpleReportSettings.md)|  | 

### Return type

[**SimpleReportSettings**](SimpleReportSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReportById"></a>
# **getReportById**
> ReportResult getReportById(reportId, opts)

Get a report results by id of the report

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


let apiInstance = new CodebeamerSwaggerApi.ReportApi();
let reportId = 56; // Number | Id of a report
let opts = { 
  'page': 1, // Number | Index of a report page starting from 1.
  'pageSize': 25 // Number | Number of items a report page. Max value: 500
};
apiInstance.getReportById(reportId, opts, (error, data, response) => {
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
 **reportId** | **Number**| Id of a report | 
 **page** | **Number**| Index of a report page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items a report page. Max value: 500 | [optional] [default to 25]

### Return type

[**ReportResult**](ReportResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getReportItemsById"></a>
# **getReportItemsById**
> ReportItemResult getReportItemsById(reportId, opts)

Get a report items by id of the report

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


let apiInstance = new CodebeamerSwaggerApi.ReportApi();
let reportId = 56; // Number | Id of a report
let opts = { 
  'page': 1, // Number | Index of a report page starting from 1.
  'pageSize': 25 // Number | Number of items a report page. Max value: 500
};
apiInstance.getReportItemsById(reportId, opts, (error, data, response) => {
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
 **reportId** | **Number**| Id of a report | 
 **page** | **Number**| Index of a report page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items a report page. Max value: 500 | [optional] [default to 25]

### Return type

[**ReportItemResult**](ReportItemResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="updateReport"></a>
# **updateReport**
> SimpleReportSettings updateReport(body, reportId)

Update report settings

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


let apiInstance = new CodebeamerSwaggerApi.ReportApi();
let body = new CodebeamerSwaggerApi.SimpleReportSettings(); // SimpleReportSettings | 
let reportId = 56; // Number | Id of a report

apiInstance.updateReport(body, reportId, (error, data, response) => {
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
 **body** | [**SimpleReportSettings**](SimpleReportSettings.md)|  | 
 **reportId** | **Number**| Id of a report | 

### Return type

[**SimpleReportSettings**](SimpleReportSettings.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

