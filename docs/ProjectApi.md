# CodebeamerSwaggerApi.ProjectApi

All URIs are relative to *https://alm.codebeamer.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTracker**](ProjectApi.md#createTracker) | **POST** /v3/projects/{projectId}/trackers | Create a tracker
[**deployConfiguration**](ProjectApi.md#deployConfiguration) | **POST** /v3/projects/deploy | Deploy a project configuration to a Project
[**getMembersOfProject**](ProjectApi.md#getMembersOfProject) | **GET** /v3/projects/{projectId}/members | Get all members of a project
[**getProjectById**](ProjectApi.md#getProjectById) | **GET** /v3/projects/{projectId} | Get project
[**getProjectRolesOfMember**](ProjectApi.md#getProjectRolesOfMember) | **GET** /v3/projects/{projectId}/members/{userId}/permissions | Get all roles the user has on a project
[**getProjects**](ProjectApi.md#getProjects) | **GET** /v3/projects | Get projects
[**getTopLevelWikiPages**](ProjectApi.md#getTopLevelWikiPages) | **GET** /v3/projects/{projectId}/wikipages | Get wiki pages of a project
[**getTrackers**](ProjectApi.md#getTrackers) | **GET** /v3/projects/{projectId}/trackers | Get trackers
[**searchAllTrackersInProject**](ProjectApi.md#searchAllTrackersInProject) | **POST** /v3/projects/{projectId}/trackers/search | Get the list of all trackers in a project
[**searchProjects**](ProjectApi.md#searchProjects) | **POST** /v3/projects/search | Search projects by given criteria

<a name="createTracker"></a>
# **createTracker**
> Tracker createTracker(body, projectId, opts)

Create a tracker

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let body = new CodebeamerSwaggerApi.Tracker(); // Tracker | 
let projectId = 56; // Number | 
let opts = { 
  'templateId': 56 // Number | Identifier of the template tracker.
};
apiInstance.createTracker(body, projectId, opts, (error, data, response) => {
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
 **body** | [**Tracker**](Tracker.md)|  | 
 **projectId** | **Number**|  | 
 **templateId** | **Number**| Identifier of the template tracker. | [optional] 

### Return type

[**Tracker**](Tracker.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deployConfiguration"></a>
# **deployConfiguration**
> Project deployConfiguration(body)

Deploy a project configuration to a Project

The configuration file needs to be uploaded to codebeamer Documents

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let body = new CodebeamerSwaggerApi.DeployProject(); // DeployProject | 

apiInstance.deployConfiguration(body, (error, data, response) => {
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
 **body** | [**DeployProject**](DeployProject.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMembersOfProject"></a>
# **getMembersOfProject**
> MemberReferenceSearchResult getMembersOfProject(projectId, opts)

Get all members of a project

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let projectId = 56; // Number | 
let opts = { 
  'page': 1, // Number | Index of the result page starting from 1.
  'pageSize': 25 // Number | Number of items in a result page. Max value: 500
};
apiInstance.getMembersOfProject(projectId, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **page** | **Number**| Index of the result page starting from 1. | [optional] [default to 1]
 **pageSize** | **Number**| Number of items in a result page. Max value: 500 | [optional] [default to 25]

### Return type

[**MemberReferenceSearchResult**](MemberReferenceSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getProjectById"></a>
# **getProjectById**
> Project getProjectById(projectId)

Get project

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let projectId = 56; // Number | 

apiInstance.getProjectById(projectId, (error, data, response) => {
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
 **projectId** | **Number**|  | 

### Return type

[**Project**](Project.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getProjectRolesOfMember"></a>
# **getProjectRolesOfMember**
> ProjectMemberPermissions getProjectRolesOfMember(projectId, userId)

Get all roles the user has on a project

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let projectId = 56; // Number | 
let userId = 56; // Number | 

apiInstance.getProjectRolesOfMember(projectId, userId, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **userId** | **Number**|  | 

### Return type

[**ProjectMemberPermissions**](ProjectMemberPermissions.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getProjects"></a>
# **getProjects**
> [ProjectReference] getProjects()

Get projects

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
apiInstance.getProjects((error, data, response) => {
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

[**[ProjectReference]**](ProjectReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTopLevelWikiPages"></a>
# **getTopLevelWikiPages**
> WikiOutlineSearchResult getTopLevelWikiPages(projectId)

Get wiki pages of a project

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let projectId = 56; // Number | ID of the project

apiInstance.getTopLevelWikiPages(projectId, (error, data, response) => {
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
 **projectId** | **Number**| ID of the project | 

### Return type

[**WikiOutlineSearchResult**](WikiOutlineSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

<a name="getTrackers"></a>
# **getTrackers**
> [TrackerReference] getTrackers(projectId)

Get trackers

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let projectId = 56; // Number | 

apiInstance.getTrackers(projectId, (error, data, response) => {
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
 **projectId** | **Number**|  | 

### Return type

[**[TrackerReference]**](TrackerReference.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchAllTrackersInProject"></a>
# **searchAllTrackersInProject**
> TrackerSearchResult searchAllTrackersInProject(body, projectId)

Get the list of all trackers in a project

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let body = new CodebeamerSwaggerApi.TrackerFilteringRequest(); // TrackerFilteringRequest | 
let projectId = 56; // Number | 

apiInstance.searchAllTrackersInProject(body, projectId, (error, data, response) => {
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
 **body** | [**TrackerFilteringRequest**](TrackerFilteringRequest.md)|  | 
 **projectId** | **Number**|  | 

### Return type

[**TrackerSearchResult**](TrackerSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchProjects"></a>
# **searchProjects**
> ProjectSearchResult searchProjects(body)

Search projects by given criteria

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


let apiInstance = new CodebeamerSwaggerApi.ProjectApi();
let body = new CodebeamerSwaggerApi.ProjectFilteringRequest(); // ProjectFilteringRequest | 

apiInstance.searchProjects(body, (error, data, response) => {
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
 **body** | [**ProjectFilteringRequest**](ProjectFilteringRequest.md)|  | 

### Return type

[**ProjectSearchResult**](ProjectSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BasicAuth](../README.md#BasicAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

