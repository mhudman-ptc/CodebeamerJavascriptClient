# CodebeamerSwaggerApi.TrackerItemReviewConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requiredApprovals** | **Number** | Number of approvals after which the review is considered approved | [optional] 
**requiredRejections** | **Number** | Number of rejections after which the review is considered rejected | [optional] 
**requiredSignature** | **String** | Whether the user has to provide its credentials to vote | [optional] 
**roleRequired** | **Boolean** | Whether the reviewers have to chose in which of their roles do they want to vote | [optional] 

<a name="RequiredSignatureEnum"></a>
## Enum: RequiredSignatureEnum

* `NONE` (value: `"NONE"`)
* `PASSWORD` (value: `"PASSWORD"`)
* `USERNAME_AND_PASSWORD` (value: `"USERNAME_AND_PASSWORD"`)

