# CodebeamerSwaggerApi.WorkflowTransition

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**fromStatus** | [**ChoiceOptionReference**](ChoiceOptionReference.md) |  | [optional] 
**hidden** | **Boolean** | Indicator if the transition is hidden | [optional] 
**id** | **Number** | Id of the entity | [optional] 
**name** | **String** | Name of the entity | [optional] 
**permissions** | [**[AccessPermission]**](AccessPermission.md) | Access permissions of the transition | [optional] 
**toStatus** | [**ChoiceOptionReference**](ChoiceOptionReference.md) |  | 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

