# CodebeamerSwaggerApi.TrackerItemsCommentApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentOnTrackerItem**](TrackerItemsCommentApi.md#commentOnTrackerItem) | **POST** /v3/items/{itemId}/comments | Comment on a tracker item
[**deleteTrackerItemComment**](TrackerItemsCommentApi.md#deleteTrackerItemComment) | **DELETE** /v3/items/{itemId}/comments/{commentId} | Delete comment of tracker item by id
[**deleteTrackerItemComments**](TrackerItemsCommentApi.md#deleteTrackerItemComments) | **DELETE** /v3/items/{itemId}/comments | Delete comments of tracker item by item id
[**editCommentOnTrackerItem**](TrackerItemsCommentApi.md#editCommentOnTrackerItem) | **PUT** /v3/items/{itemId}/comments/{commentId} | Edit comment on a tracker item
[**getTrackerItemComment**](TrackerItemsCommentApi.md#getTrackerItemComment) | **GET** /v3/items/{itemId}/comments/{commentId} | Get comment of tracker item by id
[**getTrackerItemComments**](TrackerItemsCommentApi.md#getTrackerItemComments) | **GET** /v3/items/{itemId}/comments | Get comments of tracker item
[**replyOnCommentOfTrackerItem**](TrackerItemsCommentApi.md#replyOnCommentOfTrackerItem) | **POST** /v3/items/{itemId}/comments/{commentId} | Reply on a comment of a tracker item

<a name="commentOnTrackerItem"></a>
# **commentOnTrackerItem**
> Comment commentOnTrackerItem(itemId, opts)

Comment on a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 
let opts = { 
  'attachments': "attachments_example", // Blob | 
  'comment': "comment_example", // String | 
  'commentFormat': "commentFormat_example" // String | 
};
apiInstance.commentOnTrackerItem(itemId, opts, (error, data, response) => {
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
 **attachments** | **Blob**|  | [optional] 
 **comment** | **String**|  | [optional] 
 **commentFormat** | **String**|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteTrackerItemComment"></a>
# **deleteTrackerItemComment**
> Comment deleteTrackerItemComment(itemId, commentId)

Delete comment of tracker item by id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 
let commentId = 56; // Number | 

apiInstance.deleteTrackerItemComment(itemId, commentId, (error, data, response) => {
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
 **commentId** | **Number**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTrackerItemComments"></a>
# **deleteTrackerItemComments**
> deleteTrackerItemComments(itemId)

Delete comments of tracker item by item id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 

apiInstance.deleteTrackerItemComments(itemId, (error, data, response) => {
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
 **itemId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="editCommentOnTrackerItem"></a>
# **editCommentOnTrackerItem**
> Comment editCommentOnTrackerItem(itemId, commentId, opts)

Edit comment on a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 
let commentId = 56; // Number | 
let opts = { 
  'attachments': "attachments_example", // Blob | 
  'comment': "comment_example", // String | 
  'commentFormat': "commentFormat_example" // String | 
};
apiInstance.editCommentOnTrackerItem(itemId, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**|  | 
 **attachments** | **Blob**|  | [optional] 
 **comment** | **String**|  | [optional] 
 **commentFormat** | **String**|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getTrackerItemComment"></a>
# **getTrackerItemComment**
> Comment getTrackerItemComment(itemId, commentId)

Get comment of tracker item by id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 
let commentId = 56; // Number | 

apiInstance.getTrackerItemComment(itemId, commentId, (error, data, response) => {
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
 **commentId** | **Number**|  | 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemComments"></a>
# **getTrackerItemComments**
> [Comment] getTrackerItemComments(itemId)

Get comments of tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | Id of a tracker item

apiInstance.getTrackerItemComments(itemId, (error, data, response) => {
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
 **itemId** | **Number**| Id of a tracker item | 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="replyOnCommentOfTrackerItem"></a>
# **replyOnCommentOfTrackerItem**
> Comment replyOnCommentOfTrackerItem(itemId, commentId, opts)

Reply on a comment of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsCommentApi();
let itemId = 56; // Number | 
let commentId = 56; // Number | 
let opts = { 
  'attachments': "attachments_example", // Blob | 
  'comment': "comment_example", // String | 
  'commentFormat': "commentFormat_example" // String | 
};
apiInstance.replyOnCommentOfTrackerItem(itemId, commentId, opts, (error, data, response) => {
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
 **commentId** | **Number**|  | 
 **attachments** | **Blob**|  | [optional] 
 **comment** | **String**|  | [optional] 
 **commentFormat** | **String**|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

