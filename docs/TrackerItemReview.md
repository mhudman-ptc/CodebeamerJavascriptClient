# CodebeamerSwaggerApi.TrackerItemReview

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**TrackerItemReviewConfig**](TrackerItemReviewConfig.md) |  | [optional] 
**result** | **String** | Whether the review is approved or rejected | [optional] 
**reviewers** | [**[TrackerItemReviewVote]**](TrackerItemReviewVote.md) | List of reviewers, and their votes | [optional] 
**trackerItem** | [**TrackerItemRevision**](TrackerItemRevision.md) |  | [optional] 

<a name="ResultEnum"></a>
## Enum: ResultEnum

* `APPROVED` (value: `"APPROVED"`)
* `REJECTED` (value: `"REJECTED"`)
* `UNDECIDED` (value: `"UNDECIDED"`)

