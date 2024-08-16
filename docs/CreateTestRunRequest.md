# CodebeamerSwaggerApi.CreateTestRunRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runOnlyAcceptedTestCases** | **Boolean** | Generate Test Runs only from accepted Test Cases. | [optional] [default to false]
**testCaseIds** | [**[TrackerItemReference]**](TrackerItemReference.md) |  | [optional] 
**testCaseRefs** | [**[TrackerItemReference]**](TrackerItemReference.md) | Test case ids to include into the test run | [optional] 
**testRunModel** | [**TrackerItem**](TrackerItem.md) |  | [optional] 
**testSetIds** | [**[TrackerItemReference]**](TrackerItemReference.md) |  | [optional] 
**testSetRefs** | [**[TrackerItemReference]**](TrackerItemReference.md) | Test set ids to include into the test run. Only the first test set will be considered. | [optional] 
