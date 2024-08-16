# CodebeamerSwaggerApi.TrackerField

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregationRule** | **String** | The Aggregation Rule for a specific Field. | [optional] 
**choiceOptionSetting** | [**BaseTrackerFieldChoiceOption**](BaseTrackerFieldChoiceOption.md) |  | [optional] 
**computedAs** | **String** |  | [optional] 
**computedFieldReferences** | [**[TrackerFieldComputedFieldReference]**](TrackerFieldComputedFieldReference.md) |  | [optional] 
**dateFieldSettings** | [**TrackerFieldDateFieldSettings**](TrackerFieldDateFieldSettings.md) |  | [optional] 
**defaultValuesInStatuses** | **{String: String}** |  | [optional] 
**dependency** | [**TrackerFieldDependency**](TrackerFieldDependency.md) |  | [optional] 
**description** | **String** |  | [optional] 
**digits** | **Number** |  | [optional] 
**distributionRule** | **String** | The Distribution Rule of a specific Field. | [optional] 
**globalTypeIds** | **[Number]** |  | [optional] 
**height** | **Number** |  | [optional] 
**hidden** | **Boolean** |  | [optional] 
**hideIfFormula** | **String** |  | [optional] 
**hideIfFormulaSameAsFieldId** | **Number** |  | [optional] 
**label** | **String** |  | [optional] 
**listable** | **Boolean** |  | [optional] 
**mandatory** | **Boolean** |  | [optional] 
**mandatoryIfFormula** | **String** |  | [optional] 
**mandatoryIfFormulaSameAsFieldId** | **Number** |  | [optional] 
**maxValue** | **String** |  | [optional] 
**minValue** | **String** |  | [optional] 
**multipleSelection** | **Boolean** |  | [optional] 
**newLine** | **Boolean** |  | [optional] 
**omitMerge** | **Boolean** |  | [optional] 
**omitSuspectedWhenChange** | **Boolean** |  | [optional] 
**permission** | [**BaseTrackerFieldPermission**](BaseTrackerFieldPermission.md) |  | [optional] 
**position** | **Number** |  | [optional] 
**propagateDependencies** | **Boolean** |  | [optional] 
**propagateSuspect** | **Boolean** |  | [optional] 
**referenceId** | **Number** |  | [optional] 
**reversedSuspect** | **Boolean** |  | [optional] 
**serviceDeskField** | [**TrackerFieldServiceDeskField**](TrackerFieldServiceDeskField.md) |  | [optional] 
**span** | **Number** |  | [optional] 
**title** | **String** |  | [optional] 
**typeId** | **Number** |  | [optional] 
**union** | **Boolean** |  | [optional] 
**width** | **Number** |  | [optional] 

<a name="AggregationRuleEnum"></a>
## Enum: AggregationRuleEnum

* `MINIMUM` (value: `"MINIMUM"`)
* `MAXIMUM` (value: `"MAXIMUM"`)
* `UNION` (value: `"UNION"`)
* `INTERSECTION` (value: `"INTERSECTION"`)
* `SUM_TOTAL` (value: `"SUM_TOTAL"`)
* `AVERAGE` (value: `"AVERAGE"`)


<a name="DistributionRuleEnum"></a>
## Enum: DistributionRuleEnum

* `SET` (value: `"SET"`)
* `DEFAULT` (value: `"DEFAULT"`)
* `LEAST` (value: `"LEAST"`)
* `GREATEST` (value: `"GREATEST"`)
* `SUBSET` (value: `"SUBSET"`)
* `SUPERSET` (value: `"SUPERSET"`)
* `CLOSE_RECURSIVELY` (value: `"CLOSE_RECURSIVELY"`)
* `CLOSE_RESTRICTED` (value: `"CLOSE_RESTRICTED"`)

