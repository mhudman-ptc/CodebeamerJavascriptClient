# CodebeamerSwaggerApi.TraceabilityApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTraceabilityInitialItemIds**](TraceabilityApi.md#getTraceabilityInitialItemIds) | **POST** /v3/traceability/items | Get initial ids
[**getTraceabilityLevelItemIds**](TraceabilityApi.md#getTraceabilityLevelItemIds) | **POST** /v3/traceability/relations | Get traceability level item ids

<a name="getTraceabilityInitialItemIds"></a>
# **getTraceabilityInitialItemIds**
> [TraceabilityItem] getTraceabilityInitialItemIds(body, opts)

Get initial ids

Get traceability initial ids!

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


let apiInstance = new CodebeamerSwaggerApi.TraceabilityApi();
let body = new CodebeamerSwaggerApi.TraceabilityInitialLevelFilter(); // TraceabilityInitialLevelFilter | 
let opts = { 
  'pageSize': 56, // Number | Number of items in a result page.
  'pageNo': 56 // Number | Index of the result page.
};
apiInstance.getTraceabilityInitialItemIds(body, opts, (error, data, response) => {
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
 **body** | [**TraceabilityInitialLevelFilter**](TraceabilityInitialLevelFilter.md)|  | 
 **pageSize** | **Number**| Number of items in a result page. | [optional] 
 **pageNo** | **Number**| Index of the result page. | [optional] 

### Return type

[**[TraceabilityItem]**](TraceabilityItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTraceabilityLevelItemIds"></a>
# **getTraceabilityLevelItemIds**
> TraceabilityResult getTraceabilityLevelItemIds(body, opts)

Get traceability level item ids

Get traceability item ids!

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


let apiInstance = new CodebeamerSwaggerApi.TraceabilityApi();
let body = new CodebeamerSwaggerApi.TraceabilityLevelFilter(); // TraceabilityLevelFilter | 
let opts = { 
  'itemsOnLevel': 56, // Number | Number of items per level.
  'itemsFromPreviousItem': 56 // Number | Number of items per item.
};
apiInstance.getTraceabilityLevelItemIds(body, opts, (error, data, response) => {
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
 **body** | [**TraceabilityLevelFilter**](TraceabilityLevelFilter.md)|  | 
 **itemsOnLevel** | **Number**| Number of items per level. | [optional] 
 **itemsFromPreviousItem** | **Number**| Number of items per item. | [optional] 

### Return type

[**TraceabilityResult**](TraceabilityResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

