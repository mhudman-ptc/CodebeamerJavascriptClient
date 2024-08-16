# CodebeamerSwaggerApi.ExternalScmRepositoryRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessTokenId** | **Number** | Id of already created token for external SCM provider API. Required in case when old access token should be used | [optional] 
**accessTokenName** | **String** | Name of new access token for external SCM provider API. Required in case when new access token item should be created | [optional] 
**accessTokenValue** | **String** | Value of new access token for external SCM provider API. Required in case when new access token item should be created | [optional] 
**enablePatchSynchronization** | **Boolean** | Enable or disable patch synchronization | 
**name** | **String** | Name of new CB external SCM repository | 
**ownerName** | **String** | Owner name or organization name of external SCM provider repository | 
**projectName** | **String** | Project name of external SCM provider repository | [optional] 
**remoteApiUrl** | **String** | Base API URL of external SCM provider | 
**repositoryName** | **String** | Repository name on external SCM provider&#x27;s side | 
**scmType** | **String** | External SCM provider | 
**secretId** | **Number** | Id of already created Secret for external SCM provider API | [optional] 
