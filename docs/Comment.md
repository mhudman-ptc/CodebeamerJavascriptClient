# CodebeamerSwaggerApi.Comment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**[Attachment]**](Attachment.md) | Attachments of a comment | [optional] 
**comment** | **String** | Text of a comment | [optional] 
**commentFormat** | **String** | Format of a comment | [optional] 
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**id** | **Number** | Id of the entity | [optional] 
**modifiedAt** | **Date** | The date when the entity was modified | [optional] 
**modifiedBy** | [**UserReference**](UserReference.md) |  | [optional] 
**name** | **String** | Name of the entity | [optional] 
**parent** | [**CommentReference**](CommentReference.md) |  | [optional] 
**version** | **Number** | Version of a comment | [optional] 

<a name="CommentFormatEnum"></a>
## Enum: CommentFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

