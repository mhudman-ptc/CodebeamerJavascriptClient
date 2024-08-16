# CodebeamerSwaggerApi.TrackerItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accruedMillis** | **Number** | Accrued work time of a tracker item in milliseconds | [optional] 
**angularIcon** | **String** | Angular icon for the tracker item | [optional] 
**areas** | [**[AbstractReference]**](AbstractReference.md) | Areas of a tracker item | [optional] 
**assignedAt** | **Date** | Assignee date of a tracker item | [optional] 
**assignedTo** | [**[AbstractReference]**](AbstractReference.md) | Assignees of a tracker item | [optional] 
**categories** | [**[AbstractReference]**](AbstractReference.md) | Categories of a tracker item | [optional] 
**children** | [**[TrackerItemReference]**](TrackerItemReference.md) | Children of a tracker item | [optional] 
**closedAt** | **Date** | Close date of a tracker item | [optional] 
**comments** | [**[CommentReference]**](CommentReference.md) | Comment in the tracker item | [optional] 
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**customFields** | [**[AbstractFieldValue]**](AbstractFieldValue.md) | Custom field of a tracker item | [optional] 
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**endDate** | **Date** | End date of a tracker item | [optional] 
**estimatedMillis** | **Number** | Estimated work time of a tracker item in milliseconds | [optional] 
**formality** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**iconColor** | **String** | Color of the tracker item icon | [optional] 
**iconUrl** | **String** | Url of the tracker item icon | [optional] 
**id** | **Number** | Id of the entity | [optional] 
**modifiedAt** | **Date** | The date when the entity was modified | [optional] 
**modifiedBy** | [**UserReference**](UserReference.md) |  | [optional] 
**name** | **String** | Name of the entity | [optional] 
**ordinal** | **Number** | Ordinal of a tracker item | [optional] 
**owners** | [**[AbstractReference]**](AbstractReference.md) | Owners of a tracker item | [optional] 
**parent** | [**TrackerItemReference**](TrackerItemReference.md) |  | [optional] 
**platforms** | [**[AbstractReference]**](AbstractReference.md) | Platforms of a tracker item | [optional] 
**priority** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**releaseMethod** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**resolutions** | [**[AbstractReference]**](AbstractReference.md) | Resolutions of a tracker item | [optional] 
**severities** | [**[AbstractReference]**](AbstractReference.md) | Severities of a tracker item | [optional] 
**spentMillis** | **Number** | Spent work time of a tracker item in milliseconds | [optional] 
**startDate** | **Date** | Start date of a tracker item | [optional] 
**status** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**storyPoints** | **Number** | Story points of a tracker item | [optional] 
**subjects** | [**[AbstractReference]**](AbstractReference.md) | Subjects of a tracker item | [optional] 
**tags** | [**[Label]**](Label.md) | Tags of the tracker item | [optional] 
**teams** | [**[AbstractReference]**](AbstractReference.md) | Teams of a tracker item | [optional] 
**tracker** | [**TrackerReference**](TrackerReference.md) |  | [optional] 
**typeName** | **String** | Type name of a tracker item | [optional] 
**version** | **Number** | Version of a tracker item | [optional] 
**versions** | [**[AbstractReference]**](AbstractReference.md) | Versions of a tracker item | [optional] 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

