# CodebeamerSwaggerApi.WikisCommentApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentOnWiki**](WikisCommentApi.md#commentOnWiki) | **POST** /v3/wikipages/{wikiId}/comments | Comment on a wiki page
[**getAttachmentByName**](WikisCommentApi.md#getAttachmentByName) | **GET** /v3/wikipages/{wikiId}/attachments | Get attachment of wiki page by file name

<a name="commentOnWiki"></a>
# **commentOnWiki**
> [AttachmentReference] commentOnWiki(wikiId, opts)

Comment on a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikisCommentApi();
let wikiId = 56; // Number | 
let opts = { 
  'attachments': "attachments_example", // Blob | 
  'comment': "comment_example", // String | 
  'commentFormat': "commentFormat_example" // String | 
};
apiInstance.commentOnWiki(wikiId, opts, (error, data, response) => {
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
 **wikiId** | **Number**|  | 
 **attachments** | **Blob**|  | [optional] 
 **comment** | **String**|  | [optional] 
 **commentFormat** | **String**|  | [optional] 

### Return type

[**[AttachmentReference]**](AttachmentReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, */*

<a name="getAttachmentByName"></a>
# **getAttachmentByName**
> Attachment getAttachmentByName(wikiId, fileName)

Get attachment of wiki page by file name

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


let apiInstance = new CodebeamerSwaggerApi.WikisCommentApi();
let wikiId = 56; // Number | 
let fileName = "fileName_example"; // String | 

apiInstance.getAttachmentByName(wikiId, fileName, (error, data, response) => {
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
 **wikiId** | **Number**|  | 
 **fileName** | **String**|  | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

