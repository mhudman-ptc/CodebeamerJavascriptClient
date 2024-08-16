# CodebeamerSwaggerApi.ExportToWordRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentItemAndItsChildren** | **Boolean** | The children of the current item should be included also or not | [optional] 
**currentItemId** | **Number** | The id of the item | 
**exportTargetTrackerFolderId** | **Number** | The Document tracker Folder where the exported file will be stored | [optional] 
**exportTargetTrackerId** | **Number** | The id of the Document type Tracker | 
**newVersion** | **Boolean** | If true, new version of the file will be created (timestamp added), otherwise previous file will be overwritten | [optional] 
**reportId** | **Number** | If specified, the report result will be in the Word document instead of the current item (and its children, if this set) | [optional] 
**wordFilename** | **String** | The name of the generated Word document | 
**wordTemplateName** | **String** | Which Word template should be used for the Word document generation | [optional] 
