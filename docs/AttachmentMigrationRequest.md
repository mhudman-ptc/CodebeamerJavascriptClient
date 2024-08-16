# CodebeamerSwaggerApi.AttachmentMigrationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**files** | [**[RemoteMigrationFile]**](RemoteMigrationFile.md) | List of files to migrate | [optional] 
**migrationAction** | **String** | Type of action made on the source files. | [optional] 
**modifiedAt** | **Date** | The date when the entity was modified | [optional] 
**modifiedBy** | [**UserReference**](UserReference.md) |  | [optional] 
**targetItem** | [**TrackerItemReference**](TrackerItemReference.md) |  | [optional] 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)


<a name="MigrationActionEnum"></a>
## Enum: MigrationActionEnum

* `MOVE` (value: `"MOVE"`)
* `COPY` (value: `"COPY"`)

