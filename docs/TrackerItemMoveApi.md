# CodebeamerSwaggerApi.TrackerItemMoveApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getItemMoveFieldMapping**](TrackerItemMoveApi.md#getItemMoveFieldMapping) | **GET** /v3/items/move/field-mapping | Gets the default field mapping between two trackers
[**moveTrackerItems**](TrackerItemMoveApi.md#moveTrackerItems) | **POST** /v3/items/move | Move Tracker Items from the Source Tracker to the Target Tracker

<a name="getItemMoveFieldMapping"></a>
# **getItemMoveFieldMapping**
> TrackerItemFieldMappingInfo getItemMoveFieldMapping(sourceTrackerId, targetTrackerId)

Gets the default field mapping between two trackers

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemMoveApi();
let sourceTrackerId = 56; // Number | The id of the source Tracker
let targetTrackerId = 56; // Number | The id of the target Tracker

apiInstance.getItemMoveFieldMapping(sourceTrackerId, targetTrackerId, (error, data, response) => {
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
 **sourceTrackerId** | **Number**| The id of the source Tracker | 
 **targetTrackerId** | **Number**| The id of the target Tracker | 

### Return type

[**TrackerItemFieldMappingInfo**](TrackerItemFieldMappingInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="moveTrackerItems"></a>
# **moveTrackerItems**
> JobReference moveTrackerItems(body)

Move Tracker Items from the Source Tracker to the Target Tracker

Move Tracker Items from the Source Tracker to the Target Tracker. The items are optional, if it is not provided all the Tracker Items will be moved from the Source Tracker. All the fields from the Source Tracker must be in the mapping. If you want to ignore one you set the targetField to null in the request.

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemMoveApi();
let body = new CodebeamerSwaggerApi.TrackerItemMoveRequest(); // TrackerItemMoveRequest | 

apiInstance.moveTrackerItems(body, (error, data, response) => {
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
 **body** | [**TrackerItemMoveRequest**](TrackerItemMoveRequest.md)|  | 

### Return type

[**JobReference**](JobReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

