# CodebeamerSwaggerApi.WikiPage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changeComment** | **String** | Summary of the changes in this wiki page version | [optional] 
**childPages** | [**[WikiPageReference]**](WikiPageReference.md) | Child pages of the current Wiki page | [optional] 
**comments** | [**[AttachmentReference]**](AttachmentReference.md) | Comments/attachments associated with the wiki page | [optional] 
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**id** | **Number** | Id of the entity | [optional] 
**markup** | **String** | Content markup of the wiki page | [optional] 
**modifiedAt** | **Date** | The date when the entity was modified | [optional] 
**modifiedBy** | [**UserReference**](UserReference.md) |  | [optional] 
**name** | **String** | Name of the entity | [optional] 
**parent** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**project** | [**ProjectReference**](ProjectReference.md) |  | [optional] 
**version** | **Number** | Version of the wiki page | [optional] 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

