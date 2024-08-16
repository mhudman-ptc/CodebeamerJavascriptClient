# CodebeamerSwaggerApi.AuditPermissionsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **String** | duration | [optional] 
**eventTypes** | **[String]** | Event type names | 
**fromDate** | **Date** | From date | [optional] 
**projectIds** | **[Number]** | Project ids | [optional] 
**showChanges** | **Boolean** | Show changes | [optional] [default to false]
**targetUserNames** | **[String]** | Target user names | [optional] 
**toDate** | **Date** | To date | [optional] 
**trackerIds** | **[Number]** | Tracker ids | [optional] 
**userNames** | **[String]** | User names | [optional] 

<a name="DurationEnum"></a>
## Enum: DurationEnum

* `TODAY` (value: `"TODAY"`)
* `THIS_WEEK` (value: `"THIS_WEEK"`)
* `THIS_MONTH` (value: `"THIS_MONTH"`)
* `THIS_QUARTER` (value: `"THIS_QUARTER"`)
* `THIS_YEAR` (value: `"THIS_YEAR"`)
* `YESTERDAY` (value: `"YESTERDAY"`)
* `lAST2DAYS` (value: `"LAST_2_DAYS"`)
* `lAST5DAYS` (value: `"LAST_5_DAYS"`)
* `lAST7DAYS` (value: `"LAST_7_DAYS"`)
* `lAST10DAYS` (value: `"LAST_10_DAYS"`)
* `lAST30DAYS` (value: `"LAST_30_DAYS"`)
* `lAST365DAYS` (value: `"LAST_365_DAYS"`)

