# CodebeamerSwaggerApi.WikiApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkWikiPageLock**](WikiApi.md#checkWikiPageLock) | **GET** /v3/wikipages/{wikiId}/lock | Check whether a wiki page is locked, and if it is, retrieve the details of the lock
[**createWikiPage**](WikiApi.md#createWikiPage) | **POST** /v3/wikipages | Create a new wiki page
[**deleteWikiPage**](WikiApi.md#deleteWikiPage) | **DELETE** /v3/wikipages/{wikiId} | Delete a wiki page by its ID
[**getWikiPage**](WikiApi.md#getWikiPage) | **GET** /v3/wikipages/{wikiId} | Get wiki page
[**getWikiPageHistory**](WikiApi.md#getWikiPageHistory) | **GET** /v3/wikipages/{wikiId}/history | Returns the change history of the specified wiki page
[**getWikiPermissions**](WikiApi.md#getWikiPermissions) | **GET** /v3/wikipages/{wikiId}/permissions | Get permissions of a wiki page
[**lockWikiPage**](WikiApi.md#lockWikiPage) | **PUT** /v3/wikipages/{wikiId}/lock | Lock a wiki page
[**renderWikiMarkup**](WikiApi.md#renderWikiMarkup) | **POST** /v3/projects/{projectId}/wiki2html | Render a wiki page as HTML in a specific context
[**renderWikiPage**](WikiApi.md#renderWikiPage) | **GET** /v3/wikipages/{wikiId}/html | Render a wiki page as HTML
[**restoreWikiPageContent**](WikiApi.md#restoreWikiPageContent) | **PUT** /v3/wikipages/{wikiId}/restorecontent | Restores the content from a previous version of a wiki page
[**setWikiPermissions**](WikiApi.md#setWikiPermissions) | **PUT** /v3/wikipages/{wikiId}/permissions | Set permissions of a wiki page
[**unlockWikiPage**](WikiApi.md#unlockWikiPage) | **DELETE** /v3/wikipages/{wikiId}/lock | Unlock a wiki page
[**updateWikiPage**](WikiApi.md#updateWikiPage) | **PUT** /v3/wikipages/{itemId} | Update and/or move a wiki page

<a name="checkWikiPageLock"></a>
# **checkWikiPageLock**
> LockInfo checkWikiPageLock(wikiId)

Check whether a wiki page is locked, and if it is, retrieve the details of the lock

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | Wiki page id

apiInstance.checkWikiPageLock(wikiId, (error, data, response) => {
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
 **wikiId** | **Number**| Wiki page id | 

### Return type

[**LockInfo**](LockInfo.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="createWikiPage"></a>
# **createWikiPage**
> WikiPage createWikiPage(body)

Create a new wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let body = new CodebeamerSwaggerApi.WikiPage(); // WikiPage | 

apiInstance.createWikiPage(body, (error, data, response) => {
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
 **body** | [**WikiPage**](WikiPage.md)|  | 

### Return type

[**WikiPage**](WikiPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteWikiPage"></a>
# **deleteWikiPage**
> deleteWikiPage(wikiId)

Delete a wiki page by its ID

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | ID of the wiki page

apiInstance.deleteWikiPage(wikiId, (error, data, response) => {
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
 **wikiId** | **Number**| ID of the wiki page | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getWikiPage"></a>
# **getWikiPage**
> WikiPage getWikiPage(wikiId, opts)

Get wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | ID of the wiki page
let opts = { 
  'version': 56 // Number | Version of the wiki page
};
apiInstance.getWikiPage(wikiId, opts, (error, data, response) => {
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
 **wikiId** | **Number**| ID of the wiki page | 
 **version** | **Number**| Version of the wiki page | [optional] 

### Return type

[**WikiPage**](WikiPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getWikiPageHistory"></a>
# **getWikiPageHistory**
> ArtifactRevisionSearchResult getWikiPageHistory(wikiId, opts)

Returns the change history of the specified wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.getWikiPageHistory(wikiId, opts, (error, data, response) => {
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
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**ArtifactRevisionSearchResult**](ArtifactRevisionSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getWikiPermissions"></a>
# **getWikiPermissions**
> [AccessPermission] getWikiPermissions(wikiId)

Get permissions of a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | Wiki page id

apiInstance.getWikiPermissions(wikiId, (error, data, response) => {
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
 **wikiId** | **Number**| Wiki page id | 

### Return type

[**[AccessPermission]**](AccessPermission.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="lockWikiPage"></a>
# **lockWikiPage**
> lockWikiPage(body, wikiId)

Lock a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let body = new CodebeamerSwaggerApi.LockRequest(); // LockRequest | 
let wikiId = 56; // Number | Wiki page id

apiInstance.lockWikiPage(body, wikiId, (error, data, response) => {
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
 **wikiId** | **Number**| Wiki page id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="renderWikiMarkup"></a>
# **renderWikiMarkup**
> &#x27;String&#x27; renderWikiMarkup(body, projectId)

Render a wiki page as HTML in a specific context

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let body = new CodebeamerSwaggerApi.WikiRenderRequest(); // WikiRenderRequest | 
let projectId = 56; // Number | 

apiInstance.renderWikiMarkup(body, projectId, (error, data, response) => {
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
 **body** | [**WikiRenderRequest**](WikiRenderRequest.md)|  | 
 **projectId** | **Number**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/html

<a name="renderWikiPage"></a>
# **renderWikiPage**
> &#x27;String&#x27; renderWikiPage(wikiId, opts)

Render a wiki page as HTML

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | ID of the wiki page
let opts = { 
  'version': 56 // Number | version of the wiki page
};
apiInstance.renderWikiPage(wikiId, opts, (error, data, response) => {
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
 **wikiId** | **Number**| ID of the wiki page | 
 **version** | **Number**| version of the wiki page | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

<a name="restoreWikiPageContent"></a>
# **restoreWikiPageContent**
> WikiPage restoreWikiPageContent(wikiId, version)

Restores the content from a previous version of a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | Wiki page id
let version = 56; // Number | The version to be restored

apiInstance.restoreWikiPageContent(wikiId, version, (error, data, response) => {
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
 **wikiId** | **Number**| Wiki page id | 
 **version** | **Number**| The version to be restored | 

### Return type

[**WikiPage**](WikiPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="setWikiPermissions"></a>
# **setWikiPermissions**
> [AccessPermission] setWikiPermissions(body, wikiId, opts)

Set permissions of a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let body = new CodebeamerSwaggerApi.AccessPermissionsRequest(); // AccessPermissionsRequest | 
let wikiId = 56; // Number | Wiki page id
let opts = { 
  'recursive': false // Boolean | Set permissions of children recursively
};
apiInstance.setWikiPermissions(body, wikiId, opts, (error, data, response) => {
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
 **body** | [**AccessPermissionsRequest**](AccessPermissionsRequest.md)|  | 
 **wikiId** | **Number**| Wiki page id | 
 **recursive** | **Boolean**| Set permissions of children recursively | [optional] [default to false]

### Return type

[**[AccessPermission]**](AccessPermission.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unlockWikiPage"></a>
# **unlockWikiPage**
> unlockWikiPage(wikiId)

Unlock a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let wikiId = 56; // Number | Wiki page id

apiInstance.unlockWikiPage(wikiId, (error, data, response) => {
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
 **wikiId** | **Number**| Wiki page id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json

<a name="updateWikiPage"></a>
# **updateWikiPage**
> WikiPage updateWikiPage(body, itemId)

Update and/or move a wiki page

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


let apiInstance = new CodebeamerSwaggerApi.WikiApi();
let body = new CodebeamerSwaggerApi.WikiPage(); // WikiPage | 
let itemId = 56; // Number | Id of the wiki page to update

apiInstance.updateWikiPage(body, itemId, (error, data, response) => {
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
 **body** | [**WikiPage**](WikiPage.md)|  | 
 **itemId** | **Number**| Id of the wiki page to update | 

### Return type

[**WikiPage**](WikiPage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

