# CodebeamerSwaggerApi.TrackerItemsAttachmentApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTrackerItemAttachment**](TrackerItemsAttachmentApi.md#deleteTrackerItemAttachment) | **DELETE** /v3/items/{itemId}/attachments/{attachmentId} | Delete attachment of tracker item by id
[**deleteTrackerItemAttachments**](TrackerItemsAttachmentApi.md#deleteTrackerItemAttachments) | **DELETE** /v3/items/{itemId}/attachments | Delete attachments of tracker item
[**getTrackerItemAttachment**](TrackerItemsAttachmentApi.md#getTrackerItemAttachment) | **GET** /v3/items/{itemId}/attachments/{attachmentId} | Get attachment of tracker item by id
[**getTrackerItemAttachmentContent**](TrackerItemsAttachmentApi.md#getTrackerItemAttachmentContent) | **GET** /v3/items/{itemId}/attachments/{attachmentId}/content | Get content of an attachment of tracker item by id
[**getTrackerItemAttachmentContents**](TrackerItemsAttachmentApi.md#getTrackerItemAttachmentContents) | **GET** /v3/items/{itemId}/attachments/content | Get attachments of a tracker item
[**getTrackerItemAttachments**](TrackerItemsAttachmentApi.md#getTrackerItemAttachments) | **GET** /v3/items/{itemId}/attachments | Get attachments of tracker item
[**getTrackerItemsAttachmentContents**](TrackerItemsAttachmentApi.md#getTrackerItemsAttachmentContents) | **POST** /v3/items/attachments/content | Get attachments of tracker items matching the extension or mime type filters
[**updateAttachmentOfTrackerItem**](TrackerItemsAttachmentApi.md#updateAttachmentOfTrackerItem) | **PUT** /v3/items/{itemId}/attachments/{attachmentId}/content | Update content of attachment of tracker item
[**uploadTrackerItemAttachment**](TrackerItemsAttachmentApi.md#uploadTrackerItemAttachment) | **POST** /v3/items/{itemId}/attachments | Upload an attachment to a tracker item

<a name="deleteTrackerItemAttachment"></a>
# **deleteTrackerItemAttachment**
> Attachment deleteTrackerItemAttachment(itemId, attachmentId, opts)

Delete attachment of tracker item by id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let attachmentId = 56; // Number | 
let opts = { 
  'deleteAttachmentGroup': false // Boolean | Delete attachment group or delete just the attachment and let the comment there
};
apiInstance.deleteTrackerItemAttachment(itemId, attachmentId, opts, (error, data, response) => {
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
 **attachmentId** | **Number**|  | 
 **deleteAttachmentGroup** | **Boolean**| Delete attachment group or delete just the attachment and let the comment there | [optional] [default to false]

### Return type

[**Attachment**](Attachment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTrackerItemAttachments"></a>
# **deleteTrackerItemAttachments**
> deleteTrackerItemAttachments(itemId, opts)

Delete attachments of tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let opts = { 
  'deleteAttachmentGroup': false // Boolean | Delete attachment group or delete just the attachment and let the comment there
};
apiInstance.deleteTrackerItemAttachments(itemId, opts, (error, data, response) => {
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
 **deleteAttachmentGroup** | **Boolean**| Delete attachment group or delete just the attachment and let the comment there | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getTrackerItemAttachment"></a>
# **getTrackerItemAttachment**
> Attachment getTrackerItemAttachment(itemId, attachmentId)

Get attachment of tracker item by id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let attachmentId = 56; // Number | 

apiInstance.getTrackerItemAttachment(itemId, attachmentId, (error, data, response) => {
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
 **attachmentId** | **Number**|  | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemAttachmentContent"></a>
# **getTrackerItemAttachmentContent**
> &#x27;Blob&#x27; getTrackerItemAttachmentContent(itemId, attachmentId)

Get content of an attachment of tracker item by id

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let attachmentId = 56; // Number | 

apiInstance.getTrackerItemAttachmentContent(itemId, attachmentId, (error, data, response) => {
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
 **attachmentId** | **Number**|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="getTrackerItemAttachmentContents"></a>
# **getTrackerItemAttachmentContents**
> &#x27;Blob&#x27; getTrackerItemAttachmentContents(itemId)

Get attachments of a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 

apiInstance.getTrackerItemAttachmentContents(itemId, (error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/json

<a name="getTrackerItemAttachments"></a>
# **getTrackerItemAttachments**
> AttachmentSearchResult getTrackerItemAttachments(itemId, opts)

Get attachments of tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | Id of the tracker item
let opts = { 
  'fileName': "fileName_example" // String | Filter by part of the filename of the attachments
};
apiInstance.getTrackerItemAttachments(itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**| Id of the tracker item | 
 **fileName** | **String**| Filter by part of the filename of the attachments | [optional] 

### Return type

[**AttachmentSearchResult**](AttachmentSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTrackerItemsAttachmentContents"></a>
# **getTrackerItemsAttachmentContents**
> &#x27;Blob&#x27; getTrackerItemsAttachmentContents(body)

Get attachments of tracker items matching the extension or mime type filters

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let body = new CodebeamerSwaggerApi.TrackerItemAttachmentRequest(); // TrackerItemAttachmentRequest | 

apiInstance.getTrackerItemsAttachmentContents(body, (error, data, response) => {
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
 **body** | [**TrackerItemAttachmentRequest**](TrackerItemAttachmentRequest.md)|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip, application/json

<a name="updateAttachmentOfTrackerItem"></a>
# **updateAttachmentOfTrackerItem**
> Attachment updateAttachmentOfTrackerItem(itemId, attachmentId, opts)

Update content of attachment of tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let attachmentId = 56; // Number | 
let opts = { 
  'content': "content_example", // Blob | 
  'description': "description_example", // String | 
  'descriptionFormat': "descriptionFormat_example" // String | 
};
apiInstance.updateAttachmentOfTrackerItem(itemId, attachmentId, opts, (error, data, response) => {
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
 **attachmentId** | **Number**|  | 
 **content** | **Blob**|  | [optional] 
 **description** | **String**|  | [optional] 
 **descriptionFormat** | **String**|  | [optional] 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="uploadTrackerItemAttachment"></a>
# **uploadTrackerItemAttachment**
> [Attachment] uploadTrackerItemAttachment(itemId, opts)

Upload an attachment to a tracker item

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


let apiInstance = new CodebeamerSwaggerApi.TrackerItemsAttachmentApi();
let itemId = 56; // Number | 
let opts = { 
  'attachments': "attachments_example" // Blob | 
};
apiInstance.uploadTrackerItemAttachment(itemId, opts, (error, data, response) => {
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

### Return type

[**[Attachment]**](Attachment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

