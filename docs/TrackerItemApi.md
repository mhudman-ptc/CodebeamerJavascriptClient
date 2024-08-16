# CodebeamerSwaggerApi.TrackerItemApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addChildToTracker**](TrackerItemApi.md#addChildToTracker) | **POST** /v3/trackers/{trackerId}/children | Add a child item to a tracker item
[**addChildToTrackerItem**](TrackerItemApi.md#addChildToTrackerItem) | **POST** /v3/items/{itemId}/children | Add a child item to a tracker item
[**bulkUpdateTrackerItemFields**](TrackerItemApi.md#bulkUpdateTrackerItemFields) | **PUT** /v3/items/fields | Bulk update fields of a tracker item
[**checkTrackerItemLock**](TrackerItemApi.md#checkTrackerItemLock) | **GET** /v3/items/{itemId}/lock | Check whether a tracker item is locked, and if it is, retrieve the details of the lock
[**createTrackerItem**](TrackerItemApi.md#createTrackerItem) | **POST** /v3/trackers/{trackerId}/items | Create a tracker item
[**deleteTrackerItem**](TrackerItemApi.md#deleteTrackerItem) | **DELETE** /v3/items/{itemId} | Move tracker item to trash
[**findTrackerChildren**](TrackerItemApi.md#findTrackerChildren) | **GET** /v3/trackers/{trackerId}/children | Get child items of a tracker item
[**findTrackerItemChildren**](TrackerItemApi.md#findTrackerItemChildren) | **GET** /v3/items/{itemId}/children | Get child items of a tracker item
[**findTrackerItems**](TrackerItemApi.md#findTrackerItems) | **GET** /v3/items/query | Get tracker items by cbQL query string
[**findTrackerItemsByCbQL**](TrackerItemApi.md#findTrackerItemsByCbQL) | **POST** /v3/items/query | Get tracker items by cbQL query string
[**getBaselineTrackerItemRelations**](TrackerItemApi.md#getBaselineTrackerItemRelations) | **GET** /v3/items/{itemId}/relations | Get tracker items related to a tracker item
[**getBaselineTrackerItemsRelations**](TrackerItemApi.md#getBaselineTrackerItemsRelations) | **POST** /v3/items/relations | Get tracker items related to some tracker items
[**getChoiceOptions**](TrackerItemApi.md#getChoiceOptions) | **GET** /v3/items/{itemId}/fields/{fieldId}/options | Get the options of a choice field of tracker
[**getItemAccessibility**](TrackerItemApi.md#getItemAccessibility) | **GET** /v3/items/{itemId}/fields/accessibility | Get a tracker item fields accessibility
[**getTrackerItem**](TrackerItemApi.md#getTrackerItem) | **GET** /v3/items/{itemId} | Get basic tracker item
[**getTrackerItemFields**](TrackerItemApi.md#getTrackerItemFields) | **GET** /v3/items/{itemId}/fields | Get fields of a tracker item
[**getTrackerItemHistory**](TrackerItemApi.md#getTrackerItemHistory) | **GET** /v3/items/{itemId}/history | Get tracker item history
[**getTrackerItemReviews**](TrackerItemApi.md#getTrackerItemReviews) | **GET** /v3/items/{itemId}/reviews | Get all Tracker Item Reviews for a particular Tracker Item
[**getTrackerItemTransitions**](TrackerItemApi.md#getTrackerItemTransitions) | **GET** /v3/items/{itemId}/transitions | Get available transitions for a tracker item
[**lockTrackerItem**](TrackerItemApi.md#lockTrackerItem) | **PUT** /v3/items/{itemId}/lock | Put a soft lock on a tracker item
[**patchChildrenOfTracker**](TrackerItemApi.md#patchChildrenOfTracker) | **PATCH** /v3/trackers/{trackerId}/children | Patch the child item list of a tracker item
[**patchChildrenOfTrackerItem**](TrackerItemApi.md#patchChildrenOfTrackerItem) | **PATCH** /v3/items/{itemId}/children | Patch the child item list of a tracker item
[**replaceChildrenOfTracker**](TrackerItemApi.md#replaceChildrenOfTracker) | **PUT** /v3/trackers/{trackerId}/children | Reorder the child item list of a tracker
[**replaceChildrenOfTrackerItem**](TrackerItemApi.md#replaceChildrenOfTrackerItem) | **PUT** /v3/items/{itemId}/children | Replace the child item list of a tracker item
[**unlockTrackerItem**](TrackerItemApi.md#unlockTrackerItem) | **DELETE** /v3/items/{itemId}/lock | Unlock a tracker item
[**updateCustomFieldTrackerItem**](TrackerItemApi.md#updateCustomFieldTrackerItem) | **PUT** /v3/items/{itemId}/fields | Update fields of a tracker item
[**updateTableFieldTrackerItem**](TrackerItemApi.md#updateTableFieldTrackerItem) | **PUT** /v3/items/{itemId}/fields/tables/{tableFieldId} | Update table field of tracker item
[**updateTrackerItem**](TrackerItemApi.md#updateTrackerItem) | **PUT** /v3/items/{itemId} | Update tracker item

<a name="addChildToTracker"></a>
# **addChildToTracker**
> TrackerItemChildReference addChildToTracker(body, trackerId)

Add a child item to a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemRevision(); // TrackerItemRevision | 
let trackerId = 56; // Number | 

apiInstance.addChildToTracker(body, trackerId, (error, data, response) => {
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
 **body** | [**TrackerItemRevision**](TrackerItemRevision.md)|  | 
 **trackerId** | **Number**|  | 

### Return type

[**TrackerItemChildReference**](TrackerItemChildReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addChildToTrackerItem"></a>
# **addChildToTrackerItem**
> TrackerItemChildReference addChildToTrackerItem(body, itemId)

Add a child item to a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemRevision(); // TrackerItemRevision | 
let itemId = 56; // Number | 

apiInstance.addChildToTrackerItem(body, itemId, (error, data, response) => {
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
 **body** | [**TrackerItemRevision**](TrackerItemRevision.md)|  | 
 **itemId** | **Number**|  | 

### Return type

[**TrackerItemChildReference**](TrackerItemChildReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bulkUpdateTrackerItemFields"></a>
# **bulkUpdateTrackerItemFields**
> BulkOperationResponse bulkUpdateTrackerItemFields(body, opts)

Bulk update fields of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = [new CodebeamerSwaggerApi.UpdateTrackerItemFieldWithItemId()]; // [UpdateTrackerItemFieldWithItemId] | 
let opts = { 
  'atomic': false // Boolean | If it's turned on the whole update will run in a single transaction.
};
apiInstance.bulkUpdateTrackerItemFields(body, opts, (error, data, response) => {
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
 **body** | [**[UpdateTrackerItemFieldWithItemId]**](UpdateTrackerItemFieldWithItemId.md)|  | 
 **atomic** | **Boolean**| If it&#x27;s turned on the whole update will run in a single transaction. | [optional] [default to false]

### Return type

[**BulkOperationResponse**](BulkOperationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkTrackerItemLock"></a>
# **checkTrackerItemLock**
> LockInfo checkTrackerItemLock(itemId)

Check whether a tracker item is locked, and if it is, retrieve the details of the lock

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | Tracker item id

apiInstance.checkTrackerItemLock(itemId, (error, data, response) => {
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
 **itemId** | **Number**| Tracker item id | 

### Return type

[**LockInfo**](LockInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTrackerItem"></a>
# **createTrackerItem**
> TrackerItem createTrackerItem(body, trackerId, opts)

Create a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItem(); // TrackerItem | 
let trackerId = 56; // Number | 
let opts = { 
  'parentItemId': 56, // Number | 
  'referenceItemId': 56, // Number | 
  'position': "position_example" // String | 
};
apiInstance.createTrackerItem(body, trackerId, opts, (error, data, response) => {
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
 **body** | [**TrackerItem**](TrackerItem.md)|  | 
 **trackerId** | **Number**|  | 
 **parentItemId** | **Number**|  | [optional] 
 **referenceItemId** | **Number**|  | [optional] 
 **position** | **String**|  | [optional] 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTrackerItem"></a>
# **deleteTrackerItem**
> TrackerItem deleteTrackerItem(itemId)

Move tracker item to trash

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 

apiInstance.deleteTrackerItem(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findTrackerChildren"></a>
# **findTrackerChildren**
> TrackerItemReferenceSearchResult findTrackerChildren(trackerId, opts)

Get child items of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let trackerId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.findTrackerChildren(trackerId, opts, (error, data, response) => {
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
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**TrackerItemReferenceSearchResult**](TrackerItemReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findTrackerItemChildren"></a>
# **findTrackerItemChildren**
> TrackerItemReferenceSearchResult findTrackerItemChildren(itemId, opts)

Get child items of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.findTrackerItemChildren(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**TrackerItemReferenceSearchResult**](TrackerItemReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findTrackerItems"></a>
# **findTrackerItems**
> TrackerItemSearchResult findTrackerItems(queryString, opts)

Get tracker items by cbQL query string

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let queryString = "queryString_example"; // String | 
let opts = { 
  'baselineId': 56, // Number | Baseline on which the queery is applied.
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.findTrackerItems(queryString, opts, (error, data, response) => {
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
 **queryString** | **String**|  | 
 **baselineId** | **Number**| Baseline on which the queery is applied. | [optional] 
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**TrackerItemSearchResult**](TrackerItemSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findTrackerItemsByCbQL"></a>
# **findTrackerItemsByCbQL**
> TrackerItemSearchResult findTrackerItemsByCbQL(body)

Get tracker items by cbQL query string

API can be called with a complex cbQL string to find tracker items

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemSearchRequest(); // TrackerItemSearchRequest | 

apiInstance.findTrackerItemsByCbQL(body, (error, data, response) => {
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
 **body** | [**TrackerItemSearchRequest**](TrackerItemSearchRequest.md)|  | 

### Return type

[**TrackerItemSearchResult**](TrackerItemSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBaselineTrackerItemRelations"></a>
# **getBaselineTrackerItemRelations**
> TrackerItemRelationsResult getBaselineTrackerItemRelations(itemId, opts)

Get tracker items related to a tracker item

Use this endpoint to fetch tracker items related to a specified tracker item. The relations include downstream references, upstream references, incoming associations and outgoing associations of the given item. Relations with entities that are not tracker items (e.g., trackers, projects, URLs, etc.) will not be included in the result.

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 
let opts = { 
  'baselineId': 56, // Number | 
  'page': 1, // Number | Index of page, starting from 1.
  'pageSize': 500 // Number | Number of items per page. Max value: 500
};
apiInstance.getBaselineTrackerItemRelations(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **baselineId** | **Number**|  | [optional] 
 **page** | **Number**| Index of page, starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items per page. Max value: 500 | [optional] [default to 500]

### Return type

[**TrackerItemRelationsResult**](TrackerItemRelationsResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaselineTrackerItemsRelations"></a>
# **getBaselineTrackerItemsRelations**
> [TrackerItemRelationsResult] getBaselineTrackerItemsRelations(body, opts)

Get tracker items related to some tracker items

Use this endpoint to fetch tracker items related to some specified tracker items. The relations include downstream references, upstream references, incoming associations and outgoing associations of the given items. Relations with entities that are not tracker items (e.g., trackers, projects, URLs, etc.) will not be included in the result.

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemsRequest(); // TrackerItemsRequest | 
let opts = { 
  'baselineId': 56 // Number | 
};
apiInstance.getBaselineTrackerItemsRelations(body, opts, (error, data, response) => {
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

[**[TrackerItemRelationsResult]**](TrackerItemRelationsResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChoiceOptions"></a>
# **getChoiceOptions**
> ReferenceSearchResult getChoiceOptions(itemId, fieldId, opts)

Get the options of a choice field of tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 
let fieldId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.getChoiceOptions(itemId, fieldId, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **fieldId** | **Number**|  | 
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**ReferenceSearchResult**](ReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getItemAccessibility"></a>
# **getItemAccessibility**
> TrackerItemFieldAccessibilityList getItemAccessibility(itemId, opts)

Get a tracker item fields accessibility

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | Tracker item id
let opts = { 
  'targetStatusId': 56 // Number | 
};
apiInstance.getItemAccessibility(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**| Tracker item id | 
 **targetStatusId** | **Number**|  | [optional] 

### Return type

[**TrackerItemFieldAccessibilityList**](TrackerItemFieldAccessibilityList.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItem"></a>
# **getTrackerItem**
> TrackerItem getTrackerItem(itemId, opts)

Get basic tracker item

API can be used for fetching basic information of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 
let opts = { 
  'version': 56, // Number | 
  'baselineId': 56 // Number | 
};
apiInstance.getTrackerItem(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**|  | 
 **version** | **Number**|  | [optional] 
 **baselineId** | **Number**|  | [optional] 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemFields"></a>
# **getTrackerItemFields**
> TrackerItemField getTrackerItemFields(itemId)

Get fields of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 

apiInstance.getTrackerItemFields(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

[**TrackerItemField**](TrackerItemField.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemHistory"></a>
# **getTrackerItemHistory**
> TrackerItemHistory getTrackerItemHistory(itemId)

Get tracker item history

API can be used for fetching basic information of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 

apiInstance.getTrackerItemHistory(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

[**TrackerItemHistory**](TrackerItemHistory.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemReviews"></a>
# **getTrackerItemReviews**
> [TrackerItemReview] getTrackerItemReviews(itemId)

Get all Tracker Item Reviews for a particular Tracker Item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 

apiInstance.getTrackerItemReviews(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

[**[TrackerItemReview]**](TrackerItemReview.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemTransitions"></a>
# **getTrackerItemTransitions**
> [WorkflowTransition] getTrackerItemTransitions(itemId)

Get available transitions for a tracker item

API can be used for getting available transitions for a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | 

apiInstance.getTrackerItemTransitions(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

[**[WorkflowTransition]**](WorkflowTransition.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="lockTrackerItem"></a>
# **lockTrackerItem**
> lockTrackerItem(body, itemId)

Put a soft lock on a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.LockRequest(); // LockRequest | 
let itemId = 56; // Number | Tracker item id

apiInstance.lockTrackerItem(body, itemId, (error, data, response) => {
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
 **body** | [**LockRequest**](LockRequest.md)|  | 
 **itemId** | **Number**| Tracker item id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchChildrenOfTracker"></a>
# **patchChildrenOfTracker**
> TrackerItemChildReference patchChildrenOfTracker(body, trackerId, opts)

Patch the child item list of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemChildReference(); // TrackerItemChildReference | 
let trackerId = 56; // Number | 
let opts = { 
  'mode': "INSERT" // String | 
};
apiInstance.patchChildrenOfTracker(body, trackerId, opts, (error, data, response) => {
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
 **body** | [**TrackerItemChildReference**](TrackerItemChildReference.md)|  | 
 **trackerId** | **Number**|  | 
 **mode** | **String**|  | [optional] [default to INSERT]

### Return type

[**TrackerItemChildReference**](TrackerItemChildReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchChildrenOfTrackerItem"></a>
# **patchChildrenOfTrackerItem**
> TrackerItemChildReference patchChildrenOfTrackerItem(body, itemId, mode)

Patch the child item list of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItemChildReference(); // TrackerItemChildReference | 
let itemId = 56; // Number | 
let mode = "mode_example"; // String | 

apiInstance.patchChildrenOfTrackerItem(body, itemId, mode, (error, data, response) => {
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
 **body** | [**TrackerItemChildReference**](TrackerItemChildReference.md)|  | 
 **itemId** | **Number**|  | 
 **mode** | **String**|  | 

### Return type

[**TrackerItemChildReference**](TrackerItemChildReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceChildrenOfTracker"></a>
# **replaceChildrenOfTracker**
> TrackerItemReferenceSearchResult replaceChildrenOfTracker(body, trackerId, opts)

Reorder the child item list of a tracker

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.UpdateTrackerItemChildrenRequest(); // UpdateTrackerItemChildrenRequest | 
let trackerId = 56; // Number | 
let opts = { 
  'resultPageSize': 25 // Number | Number of items in the result page. Max value: 500
};
apiInstance.replaceChildrenOfTracker(body, trackerId, opts, (error, data, response) => {
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
 **body** | [**UpdateTrackerItemChildrenRequest**](UpdateTrackerItemChildrenRequest.md)|  | 
 **trackerId** | **Number**|  | 
 **resultPageSize** | **Number**| Number of items in the result page. Max value: 500 | [optional] [default to 25]

### Return type

[**TrackerItemReferenceSearchResult**](TrackerItemReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceChildrenOfTrackerItem"></a>
# **replaceChildrenOfTrackerItem**
> TrackerItemReferenceSearchResult replaceChildrenOfTrackerItem(body, itemId, opts)

Replace the child item list of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.UpdateTrackerItemChildrenRequest(); // UpdateTrackerItemChildrenRequest | 
let itemId = 56; // Number | 
let opts = { 
  'resultPageSize': 25 // Number | Number of items in the result page. Max value: 500
};
apiInstance.replaceChildrenOfTrackerItem(body, itemId, opts, (error, data, response) => {
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
 **body** | [**UpdateTrackerItemChildrenRequest**](UpdateTrackerItemChildrenRequest.md)|  | 
 **itemId** | **Number**|  | 
 **resultPageSize** | **Number**| Number of items in the result page. Max value: 500 | [optional] [default to 25]

### Return type

[**TrackerItemReferenceSearchResult**](TrackerItemReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unlockTrackerItem"></a>
# **unlockTrackerItem**
> unlockTrackerItem(itemId)

Unlock a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let itemId = 56; // Number | Tracker item id

apiInstance.unlockTrackerItem(itemId, (error, data, response) => {
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
 **itemId** | **Number**| Tracker item id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCustomFieldTrackerItem"></a>
# **updateCustomFieldTrackerItem**
> TrackerItem updateCustomFieldTrackerItem(body, itemId, opts)

Update fields of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.UpdateTrackerItemField(); // UpdateTrackerItemField | 
let itemId = 56; // Number | 
let opts = { 
  'quietMode': false // Boolean | If it's turned on HTTP 200 with empty response indicates that the update was successful.
};
apiInstance.updateCustomFieldTrackerItem(body, itemId, opts, (error, data, response) => {
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
 **body** | [**UpdateTrackerItemField**](UpdateTrackerItemField.md)|  | 
 **itemId** | **Number**|  | 
 **quietMode** | **Boolean**| If it&#x27;s turned on HTTP 200 with empty response indicates that the update was successful. | [optional] [default to false]

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTableFieldTrackerItem"></a>
# **updateTableFieldTrackerItem**
> TrackerItem updateTableFieldTrackerItem(body, itemId, tableFieldId)

Update table field of tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.UpdateTrackerItemTableField(); // UpdateTrackerItemTableField | 
let itemId = 56; // Number | 
let tableFieldId = 56; // Number | 

apiInstance.updateTableFieldTrackerItem(body, itemId, tableFieldId, (error, data, response) => {
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
 **body** | [**UpdateTrackerItemTableField**](UpdateTrackerItemTableField.md)|  | 
 **itemId** | **Number**|  | 
 **tableFieldId** | **Number**|  | 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTrackerItem"></a>
# **updateTrackerItem**
> TrackerItem updateTrackerItem(body, itemId, opts)

Update tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemApi();
let body = new CodebeamerSwaggerApi.TrackerItem(); // TrackerItem | 
let itemId = 56; // Number | 
let opts = { 
  'referenceItemId': 56, // Number | 
  'position': "position_example" // String | 
};
apiInstance.updateTrackerItem(body, itemId, opts, (error, data, response) => {
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
 **body** | [**TrackerItem**](TrackerItem.md)|  | 
 **itemId** | **Number**|  | 
 **referenceItemId** | **Number**|  | [optional] 
 **position** | **String**|  | [optional] 

### Return type

[**TrackerItem**](TrackerItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

