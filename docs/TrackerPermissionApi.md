# CodebeamerSwaggerApi.TrackerPermissionApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTrackerPermission**](TrackerPermissionApi.md#getTrackerPermission) | **GET** /v3/trackers/permissions/{trackerPermissionId} | Get the immutable definition of a tracker permission
[**getTrackerPermissions**](TrackerPermissionApi.md#getTrackerPermissions) | **GET** /v3/trackers/permissions | Get available tracker permissions
[**getTrackerPermissionsWithRoles**](TrackerPermissionApi.md#getTrackerPermissionsWithRoles) | **GET** /v3/trackers/{trackerId}/permissions | List tracker permissions per role
[**removePermissions**](TrackerPermissionApi.md#removePermissions) | **DELETE** /v3/trackers/{trackerId}/roles/{roleId}/permissions | Removes all tracker permissions from a specific role
[**updatePermission**](TrackerPermissionApi.md#updatePermission) | **PUT** /v3/trackers/{trackerId}/roles/{roleId}/permissions | Set the tracker permissions for a specific role

<a name="getTrackerPermission"></a>
# **getTrackerPermission**
> TrackerPermission getTrackerPermission(trackerPermissionId)

Get the immutable definition of a tracker permission

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


let apiInstance = new CodebeamerSwaggerApi.TrackerPermissionApi();
let trackerPermissionId = 56; // Number | 

apiInstance.getTrackerPermission(trackerPermissionId, (error, data, response) => {
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
 **trackerPermissionId** | **Number**|  | 

### Return type

[**TrackerPermission**](TrackerPermission.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTrackerPermissions"></a>
# **getTrackerPermissions**
> [TrackerPermissionReference] getTrackerPermissions()

Get available tracker permissions

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


let apiInstance = new CodebeamerSwaggerApi.TrackerPermissionApi();
apiInstance.getTrackerPermissions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrackerPermissionReference]**](TrackerPermissionReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTrackerPermissionsWithRoles"></a>
# **getTrackerPermissionsWithRoles**
> [RoleWithPermissions] getTrackerPermissionsWithRoles(trackerId, opts)

List tracker permissions per role

API can be used to list tracker permissions per roles, filtering is possible by user, user and on of the user&#x27;s role, or just by role

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


let apiInstance = new CodebeamerSwaggerApi.TrackerPermissionApi();
let trackerId = 56; // Number | 
let opts = { 
  'userId': 56, // Number | 
  'roleId': 56 // Number | 
};
apiInstance.getTrackerPermissionsWithRoles(trackerId, opts, (error, data, response) => {
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
 **userId** | **Number**|  | [optional] 
 **roleId** | **Number**|  | [optional] 

### Return type

[**[RoleWithPermissions]**](RoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="removePermissions"></a>
# **removePermissions**
> removePermissions(trackerId, roleId)

Removes all tracker permissions from a specific role

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


let apiInstance = new CodebeamerSwaggerApi.TrackerPermissionApi();
let trackerId = 56; // Number | 
let roleId = 56; // Number | 

apiInstance.removePermissions(trackerId, roleId, (error, data, response) => {
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
 **roleId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="updatePermission"></a>
# **updatePermission**
> [RoleWithPermissions] updatePermission(body, trackerId, roleId)

Set the tracker permissions for a specific role

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


let apiInstance = new CodebeamerSwaggerApi.TrackerPermissionApi();
let body = new CodebeamerSwaggerApi.PermissionIdsRequest(); // PermissionIdsRequest | 
let trackerId = 56; // Number | 
let roleId = 56; // Number | 

apiInstance.updatePermission(body, trackerId, roleId, (error, data, response) => {
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
 **body** | [**PermissionIdsRequest**](PermissionIdsRequest.md)|  | 
 **trackerId** | **Number**|  | 
 **roleId** | **Number**|  | 

### Return type

[**[RoleWithPermissions]**](RoleWithPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

