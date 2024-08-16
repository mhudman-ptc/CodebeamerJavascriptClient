# CodebeamerSwaggerApi.BackgroundJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backgroundJobStatus** | **String** | Status of a background job | [optional] 
**backgroundJobType** | **String** | Type of job | [optional] 
**createdAt** | **Date** | Creation time of job | [optional] 
**description** | **String** | Description of job | [optional] 
**finishedAt** | **Date** | Completion time of job | [optional] 
**id** | **Number** | ID of job | [optional] 
**statusInfo** | [**AbstractBackgroundJobStatusInfo**](AbstractBackgroundJobStatusInfo.md) |  | [optional] 
**steps** | [**[BackgroundJobStep]**](BackgroundJobStep.md) | Sub-steps of a job | [optional] 
**submittedBy** | [**UserReference**](UserReference.md) |  | [optional] 

<a name="BackgroundJobStatusEnum"></a>
## Enum: BackgroundJobStatusEnum

* `DRAFT` (value: `"DRAFT"`)
* `NEW` (value: `"NEW"`)
* `IN_PROGRESS` (value: `"IN_PROGRESS"`)
* `FINISHED` (value: `"FINISHED"`)

