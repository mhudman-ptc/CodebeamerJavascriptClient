# CodebeamerSwaggerApi.Association

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baselineId** | **Number** | Baseline ID | [optional] 
**biDirectionalPropagation** | **Boolean** | Bi-directional reference | [optional] 
**createdAt** | **Date** | The date when the entity was created | [optional] 
**createdBy** | [**UserReference**](UserReference.md) |  | [optional] 
**description** | **String** | Description of the entity | [optional] 
**descriptionFormat** | **String** | Description format of the entity | [optional] 
**from** | [**AbstractReference**](AbstractReference.md) |  | 
**id** | **Number** | Id of the entity | [optional] 
**name** | **String** | Name of the entity | [optional] 
**propagatingDependencies** | **Boolean** | Propagating dependencies | [optional] 
**propagatingSuspects** | **Boolean** | Propagating suspects | [optional] 
**reversePropagation** | **Boolean** | Reverse propagation | [optional] 
**to** | [**AbstractReference**](AbstractReference.md) |  | [optional] 
**type** | [**AssociationTypeReference**](AssociationTypeReference.md) |  | [optional] 
**url** | **String** | Association to url | [optional] 

<a name="DescriptionFormatEnum"></a>
## Enum: DescriptionFormatEnum

* `plainText` (value: `"PlainText"`)
* `html` (value: `"Html"`)
* `wiki` (value: `"Wiki"`)

