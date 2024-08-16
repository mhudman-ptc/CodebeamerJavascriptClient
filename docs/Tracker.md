# CodebeamerSwaggerApi.Tracker

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableAsTemplate** | **Boolean** | Indicator if the tracker can be used as a template | [optional] 
**color** | **String** | Color of the tracker | [optional] 
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**defaultShowAncestorItems** | **Boolean** | Default Outline should show Ancestor Items or not | 
**defaultShowDescendantItems** | **Boolean** | Default Outline should show Descendant Items or not | 
**deleted** | **Boolean** | Indicator if the tracker is deleted | 
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**hidden** | **Boolean** | Indicator if the tracker is hidden | 
**id** | **Number** | Id of the entity | [optional] 
**keyName** | **String** | Keyname of a tracker | [optional] 
**modifiedAt** | **Date** | The date when the entity was modified | [optional] 
**modifiedBy** | [**UserReference**](UserReference.md) |  | [optional] 
**name** | **String** | Name of the entity | [optional] 
**onlyWorkflowCanCreateNewReferringItem** | **Boolean** | If true, then the only way to create new referring items is through workflow actions | 
**project** | [**ProjectReference**](ProjectReference.md) |  | [optional] 
**sharedInWorkingSet** | **Boolean** | If the tracker is shared in a WorkingSet | [optional] 
**templateTracker** | [**TrackerReference**](TrackerReference.md) |  | [optional] 
**trackerFieldLayoutSettingsModel** | [**TrackerFieldLayoutSettings**](TrackerFieldLayoutSettings.md) |  | [optional] 
**type** | [**TrackerTypeReference**](TrackerTypeReference.md) |  | [optional] 
**usingQuickTransitions** | **Boolean** | If true, then every transition will be executed immediately (if possible) without opening an editor for the item | 
**usingWorkflow** | **Boolean** | Should transitions and workflow actions be available in the tracker or not | 
**version** | **Number** | Version of a tracker | [optional] 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

