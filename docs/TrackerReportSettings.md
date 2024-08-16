# CodebeamerSwaggerApi.TrackerReportSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cbQl** | **String** | CbQL query string of the report. | 
**columns** | [**[ResizableReportColumnSettings]**](ResizableReportColumnSettings.md) | Column definitions. | 
**description** | **String** | Description of the report. | 
**isPublic** | **Boolean** | Public report indicator. | 
**name** | **String** | Name of the report. | 
**referenceLevelSettings** | [**[ReportReferenceLevelSettings]**](ReportReferenceLevelSettings.md) | Reference level setting for Intelligent Table View. | [optional] 
**renderingMethod** | **String** | Rendering method for Intelligent Table View. | [optional] 
**reportId** | **Number** | Id of a report | [optional] 
**showAllChildren** | **Boolean** | Indicator to ability to collapse/expand all child items. | [optional] 
**showAncestors** | **Boolean** | Indicator to show the ancestors of a result item. | [optional] 
**showDescendants** | **Boolean** | Indicator to show the descendants of a result item. | [optional] 
**tracker** | [**TrackerReference**](TrackerReference.md) |  | 

<a name="RenderingMethodEnum"></a>
## Enum: RenderingMethodEnum

* `disabled` (value: `"disabled"`)
* `table` (value: `"table"`)
* `tree` (value: `"tree"`)

