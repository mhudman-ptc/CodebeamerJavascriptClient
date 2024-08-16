# CodebeamerSwaggerApi.UpdateTestCaseRunRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conclusion** | **String** | Optional conclusion text | [optional] 
**customFields** | [**[AbstractFieldValue]**](AbstractFieldValue.md) | Optional field values to set on the Test Run | [optional] 
**reportedBugReferences** | [**[TrackerItemReference]**](TrackerItemReference.md) | Optional reference list of Bugs attached to the Test result | [optional] 
**result** | **String** | Result of the test case | 
**runTime** | **Number** | Optional runtime in seconds | [optional] 
**testCaseReference** | [**TrackerItemReference**](TrackerItemReference.md) |  | 

<a name="ResultEnum"></a>
## Enum: ResultEnum

* `PASSED` (value: `"PASSED"`)
* `FAILED` (value: `"FAILED"`)
* `BLOCKED` (value: `"BLOCKED"`)
* `NOT_APPLICABLE` (value: `"NOT_APPLICABLE"`)

