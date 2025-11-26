/**
 * @since 1.0.0
 */
import {
  BatchCreatePartitionCommand,
  type BatchCreatePartitionCommandInput,
  type BatchCreatePartitionCommandOutput,
  BatchDeleteConnectionCommand,
  type BatchDeleteConnectionCommandInput,
  type BatchDeleteConnectionCommandOutput,
  BatchDeletePartitionCommand,
  type BatchDeletePartitionCommandInput,
  type BatchDeletePartitionCommandOutput,
  BatchDeleteTableCommand,
  type BatchDeleteTableCommandInput,
  type BatchDeleteTableCommandOutput,
  BatchDeleteTableVersionCommand,
  type BatchDeleteTableVersionCommandInput,
  type BatchDeleteTableVersionCommandOutput,
  BatchGetBlueprintsCommand,
  type BatchGetBlueprintsCommandInput,
  type BatchGetBlueprintsCommandOutput,
  BatchGetCrawlersCommand,
  type BatchGetCrawlersCommandInput,
  type BatchGetCrawlersCommandOutput,
  BatchGetCustomEntityTypesCommand,
  type BatchGetCustomEntityTypesCommandInput,
  type BatchGetCustomEntityTypesCommandOutput,
  BatchGetDataQualityResultCommand,
  type BatchGetDataQualityResultCommandInput,
  type BatchGetDataQualityResultCommandOutput,
  BatchGetDevEndpointsCommand,
  type BatchGetDevEndpointsCommandInput,
  type BatchGetDevEndpointsCommandOutput,
  BatchGetJobsCommand,
  type BatchGetJobsCommandInput,
  type BatchGetJobsCommandOutput,
  BatchGetPartitionCommand,
  type BatchGetPartitionCommandInput,
  type BatchGetPartitionCommandOutput,
  BatchGetTableOptimizerCommand,
  type BatchGetTableOptimizerCommandInput,
  type BatchGetTableOptimizerCommandOutput,
  BatchGetTriggersCommand,
  type BatchGetTriggersCommandInput,
  type BatchGetTriggersCommandOutput,
  BatchGetWorkflowsCommand,
  type BatchGetWorkflowsCommandInput,
  type BatchGetWorkflowsCommandOutput,
  BatchPutDataQualityStatisticAnnotationCommand,
  type BatchPutDataQualityStatisticAnnotationCommandInput,
  type BatchPutDataQualityStatisticAnnotationCommandOutput,
  BatchStopJobRunCommand,
  type BatchStopJobRunCommandInput,
  type BatchStopJobRunCommandOutput,
  BatchUpdatePartitionCommand,
  type BatchUpdatePartitionCommandInput,
  type BatchUpdatePartitionCommandOutput,
  CancelDataQualityRuleRecommendationRunCommand,
  type CancelDataQualityRuleRecommendationRunCommandInput,
  type CancelDataQualityRuleRecommendationRunCommandOutput,
  CancelDataQualityRulesetEvaluationRunCommand,
  type CancelDataQualityRulesetEvaluationRunCommandInput,
  type CancelDataQualityRulesetEvaluationRunCommandOutput,
  CancelMLTaskRunCommand,
  type CancelMLTaskRunCommandInput,
  type CancelMLTaskRunCommandOutput,
  CancelStatementCommand,
  type CancelStatementCommandInput,
  type CancelStatementCommandOutput,
  CheckSchemaVersionValidityCommand,
  type CheckSchemaVersionValidityCommandInput,
  type CheckSchemaVersionValidityCommandOutput,
  CreateBlueprintCommand,
  type CreateBlueprintCommandInput,
  type CreateBlueprintCommandOutput,
  CreateCatalogCommand,
  type CreateCatalogCommandInput,
  type CreateCatalogCommandOutput,
  CreateClassifierCommand,
  type CreateClassifierCommandInput,
  type CreateClassifierCommandOutput,
  CreateColumnStatisticsTaskSettingsCommand,
  type CreateColumnStatisticsTaskSettingsCommandInput,
  type CreateColumnStatisticsTaskSettingsCommandOutput,
  CreateConnectionCommand,
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateCrawlerCommand,
  type CreateCrawlerCommandInput,
  type CreateCrawlerCommandOutput,
  CreateCustomEntityTypeCommand,
  type CreateCustomEntityTypeCommandInput,
  type CreateCustomEntityTypeCommandOutput,
  CreateDatabaseCommand,
  type CreateDatabaseCommandInput,
  type CreateDatabaseCommandOutput,
  CreateDataQualityRulesetCommand,
  type CreateDataQualityRulesetCommandInput,
  type CreateDataQualityRulesetCommandOutput,
  CreateDevEndpointCommand,
  type CreateDevEndpointCommandInput,
  type CreateDevEndpointCommandOutput,
  CreateGlueIdentityCenterConfigurationCommand,
  type CreateGlueIdentityCenterConfigurationCommandInput,
  type CreateGlueIdentityCenterConfigurationCommandOutput,
  CreateIntegrationCommand,
  type CreateIntegrationCommandInput,
  type CreateIntegrationCommandOutput,
  CreateIntegrationResourcePropertyCommand,
  type CreateIntegrationResourcePropertyCommandInput,
  type CreateIntegrationResourcePropertyCommandOutput,
  CreateIntegrationTablePropertiesCommand,
  type CreateIntegrationTablePropertiesCommandInput,
  type CreateIntegrationTablePropertiesCommandOutput,
  CreateJobCommand,
  type CreateJobCommandInput,
  type CreateJobCommandOutput,
  CreateMLTransformCommand,
  type CreateMLTransformCommandInput,
  type CreateMLTransformCommandOutput,
  CreatePartitionCommand,
  type CreatePartitionCommandInput,
  type CreatePartitionCommandOutput,
  CreatePartitionIndexCommand,
  type CreatePartitionIndexCommandInput,
  type CreatePartitionIndexCommandOutput,
  CreateRegistryCommand,
  type CreateRegistryCommandInput,
  type CreateRegistryCommandOutput,
  CreateSchemaCommand,
  type CreateSchemaCommandInput,
  type CreateSchemaCommandOutput,
  CreateScriptCommand,
  type CreateScriptCommandInput,
  type CreateScriptCommandOutput,
  CreateSecurityConfigurationCommand,
  type CreateSecurityConfigurationCommandInput,
  type CreateSecurityConfigurationCommandOutput,
  CreateSessionCommand,
  type CreateSessionCommandInput,
  type CreateSessionCommandOutput,
  CreateTableCommand,
  type CreateTableCommandInput,
  type CreateTableCommandOutput,
  CreateTableOptimizerCommand,
  type CreateTableOptimizerCommandInput,
  type CreateTableOptimizerCommandOutput,
  CreateTriggerCommand,
  type CreateTriggerCommandInput,
  type CreateTriggerCommandOutput,
  CreateUsageProfileCommand,
  type CreateUsageProfileCommandInput,
  type CreateUsageProfileCommandOutput,
  CreateUserDefinedFunctionCommand,
  type CreateUserDefinedFunctionCommandInput,
  type CreateUserDefinedFunctionCommandOutput,
  CreateWorkflowCommand,
  type CreateWorkflowCommandInput,
  type CreateWorkflowCommandOutput,
  DeleteBlueprintCommand,
  type DeleteBlueprintCommandInput,
  type DeleteBlueprintCommandOutput,
  DeleteCatalogCommand,
  type DeleteCatalogCommandInput,
  type DeleteCatalogCommandOutput,
  DeleteClassifierCommand,
  type DeleteClassifierCommandInput,
  type DeleteClassifierCommandOutput,
  DeleteColumnStatisticsForPartitionCommand,
  type DeleteColumnStatisticsForPartitionCommandInput,
  type DeleteColumnStatisticsForPartitionCommandOutput,
  DeleteColumnStatisticsForTableCommand,
  type DeleteColumnStatisticsForTableCommandInput,
  type DeleteColumnStatisticsForTableCommandOutput,
  DeleteColumnStatisticsTaskSettingsCommand,
  type DeleteColumnStatisticsTaskSettingsCommandInput,
  type DeleteColumnStatisticsTaskSettingsCommandOutput,
  DeleteConnectionCommand,
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteCrawlerCommand,
  type DeleteCrawlerCommandInput,
  type DeleteCrawlerCommandOutput,
  DeleteCustomEntityTypeCommand,
  type DeleteCustomEntityTypeCommandInput,
  type DeleteCustomEntityTypeCommandOutput,
  DeleteDatabaseCommand,
  type DeleteDatabaseCommandInput,
  type DeleteDatabaseCommandOutput,
  DeleteDataQualityRulesetCommand,
  type DeleteDataQualityRulesetCommandInput,
  type DeleteDataQualityRulesetCommandOutput,
  DeleteDevEndpointCommand,
  type DeleteDevEndpointCommandInput,
  type DeleteDevEndpointCommandOutput,
  DeleteGlueIdentityCenterConfigurationCommand,
  type DeleteGlueIdentityCenterConfigurationCommandInput,
  type DeleteGlueIdentityCenterConfigurationCommandOutput,
  DeleteIntegrationCommand,
  type DeleteIntegrationCommandInput,
  type DeleteIntegrationCommandOutput,
  DeleteIntegrationResourcePropertyCommand,
  type DeleteIntegrationResourcePropertyCommandInput,
  type DeleteIntegrationResourcePropertyCommandOutput,
  DeleteIntegrationTablePropertiesCommand,
  type DeleteIntegrationTablePropertiesCommandInput,
  type DeleteIntegrationTablePropertiesCommandOutput,
  DeleteJobCommand,
  type DeleteJobCommandInput,
  type DeleteJobCommandOutput,
  DeleteMLTransformCommand,
  type DeleteMLTransformCommandInput,
  type DeleteMLTransformCommandOutput,
  DeletePartitionCommand,
  type DeletePartitionCommandInput,
  type DeletePartitionCommandOutput,
  DeletePartitionIndexCommand,
  type DeletePartitionIndexCommandInput,
  type DeletePartitionIndexCommandOutput,
  DeleteRegistryCommand,
  type DeleteRegistryCommandInput,
  type DeleteRegistryCommandOutput,
  DeleteResourcePolicyCommand,
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteSchemaCommand,
  type DeleteSchemaCommandInput,
  type DeleteSchemaCommandOutput,
  DeleteSchemaVersionsCommand,
  type DeleteSchemaVersionsCommandInput,
  type DeleteSchemaVersionsCommandOutput,
  DeleteSecurityConfigurationCommand,
  type DeleteSecurityConfigurationCommandInput,
  type DeleteSecurityConfigurationCommandOutput,
  DeleteSessionCommand,
  type DeleteSessionCommandInput,
  type DeleteSessionCommandOutput,
  DeleteTableCommand,
  type DeleteTableCommandInput,
  type DeleteTableCommandOutput,
  DeleteTableOptimizerCommand,
  type DeleteTableOptimizerCommandInput,
  type DeleteTableOptimizerCommandOutput,
  DeleteTableVersionCommand,
  type DeleteTableVersionCommandInput,
  type DeleteTableVersionCommandOutput,
  DeleteTriggerCommand,
  type DeleteTriggerCommandInput,
  type DeleteTriggerCommandOutput,
  DeleteUsageProfileCommand,
  type DeleteUsageProfileCommandInput,
  type DeleteUsageProfileCommandOutput,
  DeleteUserDefinedFunctionCommand,
  type DeleteUserDefinedFunctionCommandInput,
  type DeleteUserDefinedFunctionCommandOutput,
  DeleteWorkflowCommand,
  type DeleteWorkflowCommandInput,
  type DeleteWorkflowCommandOutput,
  DescribeConnectionTypeCommand,
  type DescribeConnectionTypeCommandInput,
  type DescribeConnectionTypeCommandOutput,
  DescribeEntityCommand,
  type DescribeEntityCommandInput,
  type DescribeEntityCommandOutput,
  DescribeInboundIntegrationsCommand,
  type DescribeInboundIntegrationsCommandInput,
  type DescribeInboundIntegrationsCommandOutput,
  DescribeIntegrationsCommand,
  type DescribeIntegrationsCommandInput,
  type DescribeIntegrationsCommandOutput,
  GetBlueprintCommand,
  type GetBlueprintCommandInput,
  type GetBlueprintCommandOutput,
  GetBlueprintRunCommand,
  type GetBlueprintRunCommandInput,
  type GetBlueprintRunCommandOutput,
  GetBlueprintRunsCommand,
  type GetBlueprintRunsCommandInput,
  type GetBlueprintRunsCommandOutput,
  GetCatalogCommand,
  type GetCatalogCommandInput,
  type GetCatalogCommandOutput,
  GetCatalogImportStatusCommand,
  type GetCatalogImportStatusCommandInput,
  type GetCatalogImportStatusCommandOutput,
  GetCatalogsCommand,
  type GetCatalogsCommandInput,
  type GetCatalogsCommandOutput,
  GetClassifierCommand,
  type GetClassifierCommandInput,
  type GetClassifierCommandOutput,
  GetClassifiersCommand,
  type GetClassifiersCommandInput,
  type GetClassifiersCommandOutput,
  GetColumnStatisticsForPartitionCommand,
  type GetColumnStatisticsForPartitionCommandInput,
  type GetColumnStatisticsForPartitionCommandOutput,
  GetColumnStatisticsForTableCommand,
  type GetColumnStatisticsForTableCommandInput,
  type GetColumnStatisticsForTableCommandOutput,
  GetColumnStatisticsTaskRunCommand,
  type GetColumnStatisticsTaskRunCommandInput,
  type GetColumnStatisticsTaskRunCommandOutput,
  GetColumnStatisticsTaskRunsCommand,
  type GetColumnStatisticsTaskRunsCommandInput,
  type GetColumnStatisticsTaskRunsCommandOutput,
  GetColumnStatisticsTaskSettingsCommand,
  type GetColumnStatisticsTaskSettingsCommandInput,
  type GetColumnStatisticsTaskSettingsCommandOutput,
  GetConnectionCommand,
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionsCommand,
  type GetConnectionsCommandInput,
  type GetConnectionsCommandOutput,
  GetCrawlerCommand,
  type GetCrawlerCommandInput,
  type GetCrawlerCommandOutput,
  GetCrawlerMetricsCommand,
  type GetCrawlerMetricsCommandInput,
  type GetCrawlerMetricsCommandOutput,
  GetCrawlersCommand,
  type GetCrawlersCommandInput,
  type GetCrawlersCommandOutput,
  GetCustomEntityTypeCommand,
  type GetCustomEntityTypeCommandInput,
  type GetCustomEntityTypeCommandOutput,
  GetDatabaseCommand,
  type GetDatabaseCommandInput,
  type GetDatabaseCommandOutput,
  GetDatabasesCommand,
  type GetDatabasesCommandInput,
  type GetDatabasesCommandOutput,
  GetDataCatalogEncryptionSettingsCommand,
  type GetDataCatalogEncryptionSettingsCommandInput,
  type GetDataCatalogEncryptionSettingsCommandOutput,
  GetDataflowGraphCommand,
  type GetDataflowGraphCommandInput,
  type GetDataflowGraphCommandOutput,
  GetDataQualityModelCommand,
  type GetDataQualityModelCommandInput,
  type GetDataQualityModelCommandOutput,
  GetDataQualityModelResultCommand,
  type GetDataQualityModelResultCommandInput,
  type GetDataQualityModelResultCommandOutput,
  GetDataQualityResultCommand,
  type GetDataQualityResultCommandInput,
  type GetDataQualityResultCommandOutput,
  GetDataQualityRuleRecommendationRunCommand,
  type GetDataQualityRuleRecommendationRunCommandInput,
  type GetDataQualityRuleRecommendationRunCommandOutput,
  GetDataQualityRulesetCommand,
  type GetDataQualityRulesetCommandInput,
  type GetDataQualityRulesetCommandOutput,
  GetDataQualityRulesetEvaluationRunCommand,
  type GetDataQualityRulesetEvaluationRunCommandInput,
  type GetDataQualityRulesetEvaluationRunCommandOutput,
  GetDevEndpointCommand,
  type GetDevEndpointCommandInput,
  type GetDevEndpointCommandOutput,
  GetDevEndpointsCommand,
  type GetDevEndpointsCommandInput,
  type GetDevEndpointsCommandOutput,
  GetEntityRecordsCommand,
  type GetEntityRecordsCommandInput,
  type GetEntityRecordsCommandOutput,
  GetGlueIdentityCenterConfigurationCommand,
  type GetGlueIdentityCenterConfigurationCommandInput,
  type GetGlueIdentityCenterConfigurationCommandOutput,
  GetIntegrationResourcePropertyCommand,
  type GetIntegrationResourcePropertyCommandInput,
  type GetIntegrationResourcePropertyCommandOutput,
  GetIntegrationTablePropertiesCommand,
  type GetIntegrationTablePropertiesCommandInput,
  type GetIntegrationTablePropertiesCommandOutput,
  GetJobBookmarkCommand,
  type GetJobBookmarkCommandInput,
  type GetJobBookmarkCommandOutput,
  GetJobCommand,
  type GetJobCommandInput,
  type GetJobCommandOutput,
  GetJobRunCommand,
  type GetJobRunCommandInput,
  type GetJobRunCommandOutput,
  GetJobRunsCommand,
  type GetJobRunsCommandInput,
  type GetJobRunsCommandOutput,
  GetJobsCommand,
  type GetJobsCommandInput,
  type GetJobsCommandOutput,
  GetMappingCommand,
  type GetMappingCommandInput,
  type GetMappingCommandOutput,
  GetMLTaskRunCommand,
  type GetMLTaskRunCommandInput,
  type GetMLTaskRunCommandOutput,
  GetMLTaskRunsCommand,
  type GetMLTaskRunsCommandInput,
  type GetMLTaskRunsCommandOutput,
  GetMLTransformCommand,
  type GetMLTransformCommandInput,
  type GetMLTransformCommandOutput,
  GetMLTransformsCommand,
  type GetMLTransformsCommandInput,
  type GetMLTransformsCommandOutput,
  GetPartitionCommand,
  type GetPartitionCommandInput,
  type GetPartitionCommandOutput,
  GetPartitionIndexesCommand,
  type GetPartitionIndexesCommandInput,
  type GetPartitionIndexesCommandOutput,
  GetPartitionsCommand,
  type GetPartitionsCommandInput,
  type GetPartitionsCommandOutput,
  GetPlanCommand,
  type GetPlanCommandInput,
  type GetPlanCommandOutput,
  GetRegistryCommand,
  type GetRegistryCommandInput,
  type GetRegistryCommandOutput,
  GetResourcePoliciesCommand,
  type GetResourcePoliciesCommandInput,
  type GetResourcePoliciesCommandOutput,
  GetResourcePolicyCommand,
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetSchemaByDefinitionCommand,
  type GetSchemaByDefinitionCommandInput,
  type GetSchemaByDefinitionCommandOutput,
  GetSchemaCommand,
  type GetSchemaCommandInput,
  type GetSchemaCommandOutput,
  GetSchemaVersionCommand,
  type GetSchemaVersionCommandInput,
  type GetSchemaVersionCommandOutput,
  GetSchemaVersionsDiffCommand,
  type GetSchemaVersionsDiffCommandInput,
  type GetSchemaVersionsDiffCommandOutput,
  GetSecurityConfigurationCommand,
  type GetSecurityConfigurationCommandInput,
  type GetSecurityConfigurationCommandOutput,
  GetSecurityConfigurationsCommand,
  type GetSecurityConfigurationsCommandInput,
  type GetSecurityConfigurationsCommandOutput,
  GetSessionCommand,
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetStatementCommand,
  type GetStatementCommandInput,
  type GetStatementCommandOutput,
  GetTableCommand,
  type GetTableCommandInput,
  type GetTableCommandOutput,
  GetTableOptimizerCommand,
  type GetTableOptimizerCommandInput,
  type GetTableOptimizerCommandOutput,
  GetTablesCommand,
  type GetTablesCommandInput,
  type GetTablesCommandOutput,
  GetTableVersionCommand,
  type GetTableVersionCommandInput,
  type GetTableVersionCommandOutput,
  GetTableVersionsCommand,
  type GetTableVersionsCommandInput,
  type GetTableVersionsCommandOutput,
  GetTagsCommand,
  type GetTagsCommandInput,
  type GetTagsCommandOutput,
  GetTriggerCommand,
  type GetTriggerCommandInput,
  type GetTriggerCommandOutput,
  GetTriggersCommand,
  type GetTriggersCommandInput,
  type GetTriggersCommandOutput,
  GetUnfilteredPartitionMetadataCommand,
  type GetUnfilteredPartitionMetadataCommandInput,
  type GetUnfilteredPartitionMetadataCommandOutput,
  GetUnfilteredPartitionsMetadataCommand,
  type GetUnfilteredPartitionsMetadataCommandInput,
  type GetUnfilteredPartitionsMetadataCommandOutput,
  GetUnfilteredTableMetadataCommand,
  type GetUnfilteredTableMetadataCommandInput,
  type GetUnfilteredTableMetadataCommandOutput,
  GetUsageProfileCommand,
  type GetUsageProfileCommandInput,
  type GetUsageProfileCommandOutput,
  GetUserDefinedFunctionCommand,
  type GetUserDefinedFunctionCommandInput,
  type GetUserDefinedFunctionCommandOutput,
  GetUserDefinedFunctionsCommand,
  type GetUserDefinedFunctionsCommandInput,
  type GetUserDefinedFunctionsCommandOutput,
  GetWorkflowCommand,
  type GetWorkflowCommandInput,
  type GetWorkflowCommandOutput,
  GetWorkflowRunCommand,
  type GetWorkflowRunCommandInput,
  type GetWorkflowRunCommandOutput,
  GetWorkflowRunPropertiesCommand,
  type GetWorkflowRunPropertiesCommandInput,
  type GetWorkflowRunPropertiesCommandOutput,
  GetWorkflowRunsCommand,
  type GetWorkflowRunsCommandInput,
  type GetWorkflowRunsCommandOutput,
  type GlueClient,
  type GlueClientConfig,
  ImportCatalogToGlueCommand,
  type ImportCatalogToGlueCommandInput,
  type ImportCatalogToGlueCommandOutput,
  ListBlueprintsCommand,
  type ListBlueprintsCommandInput,
  type ListBlueprintsCommandOutput,
  ListColumnStatisticsTaskRunsCommand,
  type ListColumnStatisticsTaskRunsCommandInput,
  type ListColumnStatisticsTaskRunsCommandOutput,
  ListConnectionTypesCommand,
  type ListConnectionTypesCommandInput,
  type ListConnectionTypesCommandOutput,
  ListCrawlersCommand,
  type ListCrawlersCommandInput,
  type ListCrawlersCommandOutput,
  ListCrawlsCommand,
  type ListCrawlsCommandInput,
  type ListCrawlsCommandOutput,
  ListCustomEntityTypesCommand,
  type ListCustomEntityTypesCommandInput,
  type ListCustomEntityTypesCommandOutput,
  ListDataQualityResultsCommand,
  type ListDataQualityResultsCommandInput,
  type ListDataQualityResultsCommandOutput,
  ListDataQualityRuleRecommendationRunsCommand,
  type ListDataQualityRuleRecommendationRunsCommandInput,
  type ListDataQualityRuleRecommendationRunsCommandOutput,
  ListDataQualityRulesetEvaluationRunsCommand,
  type ListDataQualityRulesetEvaluationRunsCommandInput,
  type ListDataQualityRulesetEvaluationRunsCommandOutput,
  ListDataQualityRulesetsCommand,
  type ListDataQualityRulesetsCommandInput,
  type ListDataQualityRulesetsCommandOutput,
  ListDataQualityStatisticAnnotationsCommand,
  type ListDataQualityStatisticAnnotationsCommandInput,
  type ListDataQualityStatisticAnnotationsCommandOutput,
  ListDataQualityStatisticsCommand,
  type ListDataQualityStatisticsCommandInput,
  type ListDataQualityStatisticsCommandOutput,
  ListDevEndpointsCommand,
  type ListDevEndpointsCommandInput,
  type ListDevEndpointsCommandOutput,
  ListEntitiesCommand,
  type ListEntitiesCommandInput,
  type ListEntitiesCommandOutput,
  ListIntegrationResourcePropertiesCommand,
  type ListIntegrationResourcePropertiesCommandInput,
  type ListIntegrationResourcePropertiesCommandOutput,
  ListJobsCommand,
  type ListJobsCommandInput,
  type ListJobsCommandOutput,
  ListMLTransformsCommand,
  type ListMLTransformsCommandInput,
  type ListMLTransformsCommandOutput,
  ListRegistriesCommand,
  type ListRegistriesCommandInput,
  type ListRegistriesCommandOutput,
  ListSchemasCommand,
  type ListSchemasCommandInput,
  type ListSchemasCommandOutput,
  ListSchemaVersionsCommand,
  type ListSchemaVersionsCommandInput,
  type ListSchemaVersionsCommandOutput,
  ListSessionsCommand,
  type ListSessionsCommandInput,
  type ListSessionsCommandOutput,
  ListStatementsCommand,
  type ListStatementsCommandInput,
  type ListStatementsCommandOutput,
  ListTableOptimizerRunsCommand,
  type ListTableOptimizerRunsCommandInput,
  type ListTableOptimizerRunsCommandOutput,
  ListTriggersCommand,
  type ListTriggersCommandInput,
  type ListTriggersCommandOutput,
  ListUsageProfilesCommand,
  type ListUsageProfilesCommandInput,
  type ListUsageProfilesCommandOutput,
  ListWorkflowsCommand,
  type ListWorkflowsCommandInput,
  type ListWorkflowsCommandOutput,
  ModifyIntegrationCommand,
  type ModifyIntegrationCommandInput,
  type ModifyIntegrationCommandOutput,
  PutDataCatalogEncryptionSettingsCommand,
  type PutDataCatalogEncryptionSettingsCommandInput,
  type PutDataCatalogEncryptionSettingsCommandOutput,
  PutDataQualityProfileAnnotationCommand,
  type PutDataQualityProfileAnnotationCommandInput,
  type PutDataQualityProfileAnnotationCommandOutput,
  PutResourcePolicyCommand,
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutSchemaVersionMetadataCommand,
  type PutSchemaVersionMetadataCommandInput,
  type PutSchemaVersionMetadataCommandOutput,
  PutWorkflowRunPropertiesCommand,
  type PutWorkflowRunPropertiesCommandInput,
  type PutWorkflowRunPropertiesCommandOutput,
  QuerySchemaVersionMetadataCommand,
  type QuerySchemaVersionMetadataCommandInput,
  type QuerySchemaVersionMetadataCommandOutput,
  RegisterSchemaVersionCommand,
  type RegisterSchemaVersionCommandInput,
  type RegisterSchemaVersionCommandOutput,
  RemoveSchemaVersionMetadataCommand,
  type RemoveSchemaVersionMetadataCommandInput,
  type RemoveSchemaVersionMetadataCommandOutput,
  ResetJobBookmarkCommand,
  type ResetJobBookmarkCommandInput,
  type ResetJobBookmarkCommandOutput,
  ResumeWorkflowRunCommand,
  type ResumeWorkflowRunCommandInput,
  type ResumeWorkflowRunCommandOutput,
  RunStatementCommand,
  type RunStatementCommandInput,
  type RunStatementCommandOutput,
  SearchTablesCommand,
  type SearchTablesCommandInput,
  type SearchTablesCommandOutput,
  StartBlueprintRunCommand,
  type StartBlueprintRunCommandInput,
  type StartBlueprintRunCommandOutput,
  StartColumnStatisticsTaskRunCommand,
  type StartColumnStatisticsTaskRunCommandInput,
  type StartColumnStatisticsTaskRunCommandOutput,
  StartColumnStatisticsTaskRunScheduleCommand,
  type StartColumnStatisticsTaskRunScheduleCommandInput,
  type StartColumnStatisticsTaskRunScheduleCommandOutput,
  StartCrawlerCommand,
  type StartCrawlerCommandInput,
  type StartCrawlerCommandOutput,
  StartCrawlerScheduleCommand,
  type StartCrawlerScheduleCommandInput,
  type StartCrawlerScheduleCommandOutput,
  StartDataQualityRuleRecommendationRunCommand,
  type StartDataQualityRuleRecommendationRunCommandInput,
  type StartDataQualityRuleRecommendationRunCommandOutput,
  StartDataQualityRulesetEvaluationRunCommand,
  type StartDataQualityRulesetEvaluationRunCommandInput,
  type StartDataQualityRulesetEvaluationRunCommandOutput,
  StartExportLabelsTaskRunCommand,
  type StartExportLabelsTaskRunCommandInput,
  type StartExportLabelsTaskRunCommandOutput,
  StartImportLabelsTaskRunCommand,
  type StartImportLabelsTaskRunCommandInput,
  type StartImportLabelsTaskRunCommandOutput,
  StartJobRunCommand,
  type StartJobRunCommandInput,
  type StartJobRunCommandOutput,
  StartMLEvaluationTaskRunCommand,
  type StartMLEvaluationTaskRunCommandInput,
  type StartMLEvaluationTaskRunCommandOutput,
  StartMLLabelingSetGenerationTaskRunCommand,
  type StartMLLabelingSetGenerationTaskRunCommandInput,
  type StartMLLabelingSetGenerationTaskRunCommandOutput,
  StartTriggerCommand,
  type StartTriggerCommandInput,
  type StartTriggerCommandOutput,
  StartWorkflowRunCommand,
  type StartWorkflowRunCommandInput,
  type StartWorkflowRunCommandOutput,
  StopColumnStatisticsTaskRunCommand,
  type StopColumnStatisticsTaskRunCommandInput,
  type StopColumnStatisticsTaskRunCommandOutput,
  StopColumnStatisticsTaskRunScheduleCommand,
  type StopColumnStatisticsTaskRunScheduleCommandInput,
  type StopColumnStatisticsTaskRunScheduleCommandOutput,
  StopCrawlerCommand,
  type StopCrawlerCommandInput,
  type StopCrawlerCommandOutput,
  StopCrawlerScheduleCommand,
  type StopCrawlerScheduleCommandInput,
  type StopCrawlerScheduleCommandOutput,
  StopSessionCommand,
  type StopSessionCommandInput,
  type StopSessionCommandOutput,
  StopTriggerCommand,
  type StopTriggerCommandInput,
  type StopTriggerCommandOutput,
  StopWorkflowRunCommand,
  type StopWorkflowRunCommandInput,
  type StopWorkflowRunCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestConnectionCommand,
  type TestConnectionCommandInput,
  type TestConnectionCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateBlueprintCommand,
  type UpdateBlueprintCommandInput,
  type UpdateBlueprintCommandOutput,
  UpdateCatalogCommand,
  type UpdateCatalogCommandInput,
  type UpdateCatalogCommandOutput,
  UpdateClassifierCommand,
  type UpdateClassifierCommandInput,
  type UpdateClassifierCommandOutput,
  UpdateColumnStatisticsForPartitionCommand,
  type UpdateColumnStatisticsForPartitionCommandInput,
  type UpdateColumnStatisticsForPartitionCommandOutput,
  UpdateColumnStatisticsForTableCommand,
  type UpdateColumnStatisticsForTableCommandInput,
  type UpdateColumnStatisticsForTableCommandOutput,
  UpdateColumnStatisticsTaskSettingsCommand,
  type UpdateColumnStatisticsTaskSettingsCommandInput,
  type UpdateColumnStatisticsTaskSettingsCommandOutput,
  UpdateConnectionCommand,
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
  UpdateCrawlerCommand,
  type UpdateCrawlerCommandInput,
  type UpdateCrawlerCommandOutput,
  UpdateCrawlerScheduleCommand,
  type UpdateCrawlerScheduleCommandInput,
  type UpdateCrawlerScheduleCommandOutput,
  UpdateDatabaseCommand,
  type UpdateDatabaseCommandInput,
  type UpdateDatabaseCommandOutput,
  UpdateDataQualityRulesetCommand,
  type UpdateDataQualityRulesetCommandInput,
  type UpdateDataQualityRulesetCommandOutput,
  UpdateDevEndpointCommand,
  type UpdateDevEndpointCommandInput,
  type UpdateDevEndpointCommandOutput,
  UpdateGlueIdentityCenterConfigurationCommand,
  type UpdateGlueIdentityCenterConfigurationCommandInput,
  type UpdateGlueIdentityCenterConfigurationCommandOutput,
  UpdateIntegrationResourcePropertyCommand,
  type UpdateIntegrationResourcePropertyCommandInput,
  type UpdateIntegrationResourcePropertyCommandOutput,
  UpdateIntegrationTablePropertiesCommand,
  type UpdateIntegrationTablePropertiesCommandInput,
  type UpdateIntegrationTablePropertiesCommandOutput,
  UpdateJobCommand,
  type UpdateJobCommandInput,
  type UpdateJobCommandOutput,
  UpdateJobFromSourceControlCommand,
  type UpdateJobFromSourceControlCommandInput,
  type UpdateJobFromSourceControlCommandOutput,
  UpdateMLTransformCommand,
  type UpdateMLTransformCommandInput,
  type UpdateMLTransformCommandOutput,
  UpdatePartitionCommand,
  type UpdatePartitionCommandInput,
  type UpdatePartitionCommandOutput,
  UpdateRegistryCommand,
  type UpdateRegistryCommandInput,
  type UpdateRegistryCommandOutput,
  UpdateSchemaCommand,
  type UpdateSchemaCommandInput,
  type UpdateSchemaCommandOutput,
  UpdateSourceControlFromJobCommand,
  type UpdateSourceControlFromJobCommandInput,
  type UpdateSourceControlFromJobCommandOutput,
  UpdateTableCommand,
  type UpdateTableCommandInput,
  type UpdateTableCommandOutput,
  UpdateTableOptimizerCommand,
  type UpdateTableOptimizerCommandInput,
  type UpdateTableOptimizerCommandOutput,
  UpdateTriggerCommand,
  type UpdateTriggerCommandInput,
  type UpdateTriggerCommandOutput,
  UpdateUsageProfileCommand,
  type UpdateUsageProfileCommandInput,
  type UpdateUsageProfileCommandOutput,
  UpdateUserDefinedFunctionCommand,
  type UpdateUserDefinedFunctionCommandInput,
  type UpdateUserDefinedFunctionCommandOutput,
  UpdateWorkflowCommand,
  type UpdateWorkflowCommandInput,
  type UpdateWorkflowCommandOutput,
} from "@aws-sdk/client-glue";
import type { HttpHandlerOptions, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  AccessDeniedError,
  AlreadyExistsError,
  ColumnStatisticsTaskNotRunningError,
  ColumnStatisticsTaskRunningError,
  ColumnStatisticsTaskStoppingError,
  ConcurrentModificationError,
  ConcurrentRunsExceededError,
  ConditionCheckFailureError,
  ConflictError,
  CrawlerNotRunningError,
  CrawlerRunningError,
  CrawlerStoppingError,
  EntityNotFoundError,
  FederatedResourceAlreadyExistsError,
  FederationSourceError,
  FederationSourceRetryableError,
  GlueEncryptionError,
  IdempotentParameterMismatchError,
  IllegalBlueprintStateError,
  IllegalSessionStateError,
  IllegalWorkflowStateError,
  IntegrationConflictOperationFaultError,
  IntegrationNotFoundFaultError,
  IntegrationQuotaExceededFaultError,
  InternalServerError,
  InternalServiceError,
  InvalidInputError,
  InvalidIntegrationStateFaultError,
  InvalidStateError,
  KMSKeyNotAccessibleFaultError,
  MLTransformNotReadyError,
  NoScheduleError,
  OperationNotSupportedError,
  OperationTimeoutError,
  PermissionTypeMismatchError,
  ResourceNotFoundError,
  ResourceNotReadyError,
  ResourceNumberLimitExceededError,
  SchedulerNotRunningError,
  SchedulerRunningError,
  SchedulerTransitioningError,
  SdkError,
  TargetResourceNotFoundError,
  ThrottlingError,
  ValidationError,
  VersionMismatchError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./GlueClientInstance.js";
import * as GlueServiceConfig from "./GlueServiceConfig.js";

const commands = {
  BatchCreatePartitionCommand,
  BatchDeleteConnectionCommand,
  BatchDeletePartitionCommand,
  BatchDeleteTableCommand,
  BatchDeleteTableVersionCommand,
  BatchGetBlueprintsCommand,
  BatchGetCrawlersCommand,
  BatchGetCustomEntityTypesCommand,
  BatchGetDataQualityResultCommand,
  BatchGetDevEndpointsCommand,
  BatchGetJobsCommand,
  BatchGetPartitionCommand,
  BatchGetTableOptimizerCommand,
  BatchGetTriggersCommand,
  BatchGetWorkflowsCommand,
  BatchPutDataQualityStatisticAnnotationCommand,
  BatchStopJobRunCommand,
  BatchUpdatePartitionCommand,
  CancelDataQualityRuleRecommendationRunCommand,
  CancelDataQualityRulesetEvaluationRunCommand,
  CancelMLTaskRunCommand,
  CancelStatementCommand,
  CheckSchemaVersionValidityCommand,
  CreateBlueprintCommand,
  CreateCatalogCommand,
  CreateClassifierCommand,
  CreateColumnStatisticsTaskSettingsCommand,
  CreateConnectionCommand,
  CreateCrawlerCommand,
  CreateCustomEntityTypeCommand,
  CreateDataQualityRulesetCommand,
  CreateDatabaseCommand,
  CreateDevEndpointCommand,
  CreateGlueIdentityCenterConfigurationCommand,
  CreateIntegrationCommand,
  CreateIntegrationResourcePropertyCommand,
  CreateIntegrationTablePropertiesCommand,
  CreateJobCommand,
  CreateMLTransformCommand,
  CreatePartitionCommand,
  CreatePartitionIndexCommand,
  CreateRegistryCommand,
  CreateSchemaCommand,
  CreateScriptCommand,
  CreateSecurityConfigurationCommand,
  CreateSessionCommand,
  CreateTableCommand,
  CreateTableOptimizerCommand,
  CreateTriggerCommand,
  CreateUsageProfileCommand,
  CreateUserDefinedFunctionCommand,
  CreateWorkflowCommand,
  DeleteBlueprintCommand,
  DeleteCatalogCommand,
  DeleteClassifierCommand,
  DeleteColumnStatisticsForPartitionCommand,
  DeleteColumnStatisticsForTableCommand,
  DeleteColumnStatisticsTaskSettingsCommand,
  DeleteConnectionCommand,
  DeleteCrawlerCommand,
  DeleteCustomEntityTypeCommand,
  DeleteDataQualityRulesetCommand,
  DeleteDatabaseCommand,
  DeleteDevEndpointCommand,
  DeleteGlueIdentityCenterConfigurationCommand,
  DeleteIntegrationCommand,
  DeleteIntegrationResourcePropertyCommand,
  DeleteIntegrationTablePropertiesCommand,
  DeleteJobCommand,
  DeleteMLTransformCommand,
  DeletePartitionCommand,
  DeletePartitionIndexCommand,
  DeleteRegistryCommand,
  DeleteResourcePolicyCommand,
  DeleteSchemaCommand,
  DeleteSchemaVersionsCommand,
  DeleteSecurityConfigurationCommand,
  DeleteSessionCommand,
  DeleteTableCommand,
  DeleteTableOptimizerCommand,
  DeleteTableVersionCommand,
  DeleteTriggerCommand,
  DeleteUsageProfileCommand,
  DeleteUserDefinedFunctionCommand,
  DeleteWorkflowCommand,
  DescribeConnectionTypeCommand,
  DescribeEntityCommand,
  DescribeInboundIntegrationsCommand,
  DescribeIntegrationsCommand,
  GetBlueprintCommand,
  GetBlueprintRunCommand,
  GetBlueprintRunsCommand,
  GetCatalogCommand,
  GetCatalogImportStatusCommand,
  GetCatalogsCommand,
  GetClassifierCommand,
  GetClassifiersCommand,
  GetColumnStatisticsForPartitionCommand,
  GetColumnStatisticsForTableCommand,
  GetColumnStatisticsTaskRunCommand,
  GetColumnStatisticsTaskRunsCommand,
  GetColumnStatisticsTaskSettingsCommand,
  GetConnectionCommand,
  GetConnectionsCommand,
  GetCrawlerCommand,
  GetCrawlerMetricsCommand,
  GetCrawlersCommand,
  GetCustomEntityTypeCommand,
  GetDataCatalogEncryptionSettingsCommand,
  GetDataQualityModelCommand,
  GetDataQualityModelResultCommand,
  GetDataQualityResultCommand,
  GetDataQualityRuleRecommendationRunCommand,
  GetDataQualityRulesetCommand,
  GetDataQualityRulesetEvaluationRunCommand,
  GetDatabaseCommand,
  GetDatabasesCommand,
  GetDataflowGraphCommand,
  GetDevEndpointCommand,
  GetDevEndpointsCommand,
  GetEntityRecordsCommand,
  GetGlueIdentityCenterConfigurationCommand,
  GetIntegrationResourcePropertyCommand,
  GetIntegrationTablePropertiesCommand,
  GetJobCommand,
  GetJobBookmarkCommand,
  GetJobRunCommand,
  GetJobRunsCommand,
  GetJobsCommand,
  GetMLTaskRunCommand,
  GetMLTaskRunsCommand,
  GetMLTransformCommand,
  GetMLTransformsCommand,
  GetMappingCommand,
  GetPartitionCommand,
  GetPartitionIndexesCommand,
  GetPartitionsCommand,
  GetPlanCommand,
  GetRegistryCommand,
  GetResourcePoliciesCommand,
  GetResourcePolicyCommand,
  GetSchemaCommand,
  GetSchemaByDefinitionCommand,
  GetSchemaVersionCommand,
  GetSchemaVersionsDiffCommand,
  GetSecurityConfigurationCommand,
  GetSecurityConfigurationsCommand,
  GetSessionCommand,
  GetStatementCommand,
  GetTableCommand,
  GetTableOptimizerCommand,
  GetTableVersionCommand,
  GetTableVersionsCommand,
  GetTablesCommand,
  GetTagsCommand,
  GetTriggerCommand,
  GetTriggersCommand,
  GetUnfilteredPartitionMetadataCommand,
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredTableMetadataCommand,
  GetUsageProfileCommand,
  GetUserDefinedFunctionCommand,
  GetUserDefinedFunctionsCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  GetWorkflowRunPropertiesCommand,
  GetWorkflowRunsCommand,
  ImportCatalogToGlueCommand,
  ListBlueprintsCommand,
  ListColumnStatisticsTaskRunsCommand,
  ListConnectionTypesCommand,
  ListCrawlersCommand,
  ListCrawlsCommand,
  ListCustomEntityTypesCommand,
  ListDataQualityResultsCommand,
  ListDataQualityRuleRecommendationRunsCommand,
  ListDataQualityRulesetEvaluationRunsCommand,
  ListDataQualityRulesetsCommand,
  ListDataQualityStatisticAnnotationsCommand,
  ListDataQualityStatisticsCommand,
  ListDevEndpointsCommand,
  ListEntitiesCommand,
  ListIntegrationResourcePropertiesCommand,
  ListJobsCommand,
  ListMLTransformsCommand,
  ListRegistriesCommand,
  ListSchemaVersionsCommand,
  ListSchemasCommand,
  ListSessionsCommand,
  ListStatementsCommand,
  ListTableOptimizerRunsCommand,
  ListTriggersCommand,
  ListUsageProfilesCommand,
  ListWorkflowsCommand,
  ModifyIntegrationCommand,
  PutDataCatalogEncryptionSettingsCommand,
  PutDataQualityProfileAnnotationCommand,
  PutResourcePolicyCommand,
  PutSchemaVersionMetadataCommand,
  PutWorkflowRunPropertiesCommand,
  QuerySchemaVersionMetadataCommand,
  RegisterSchemaVersionCommand,
  RemoveSchemaVersionMetadataCommand,
  ResetJobBookmarkCommand,
  ResumeWorkflowRunCommand,
  RunStatementCommand,
  SearchTablesCommand,
  StartBlueprintRunCommand,
  StartColumnStatisticsTaskRunCommand,
  StartColumnStatisticsTaskRunScheduleCommand,
  StartCrawlerCommand,
  StartCrawlerScheduleCommand,
  StartDataQualityRuleRecommendationRunCommand,
  StartDataQualityRulesetEvaluationRunCommand,
  StartExportLabelsTaskRunCommand,
  StartImportLabelsTaskRunCommand,
  StartJobRunCommand,
  StartMLEvaluationTaskRunCommand,
  StartMLLabelingSetGenerationTaskRunCommand,
  StartTriggerCommand,
  StartWorkflowRunCommand,
  StopColumnStatisticsTaskRunCommand,
  StopColumnStatisticsTaskRunScheduleCommand,
  StopCrawlerCommand,
  StopCrawlerScheduleCommand,
  StopSessionCommand,
  StopTriggerCommand,
  StopWorkflowRunCommand,
  TagResourceCommand,
  TestConnectionCommand,
  UntagResourceCommand,
  UpdateBlueprintCommand,
  UpdateCatalogCommand,
  UpdateClassifierCommand,
  UpdateColumnStatisticsForPartitionCommand,
  UpdateColumnStatisticsForTableCommand,
  UpdateColumnStatisticsTaskSettingsCommand,
  UpdateConnectionCommand,
  UpdateCrawlerCommand,
  UpdateCrawlerScheduleCommand,
  UpdateDataQualityRulesetCommand,
  UpdateDatabaseCommand,
  UpdateDevEndpointCommand,
  UpdateGlueIdentityCenterConfigurationCommand,
  UpdateIntegrationResourcePropertyCommand,
  UpdateIntegrationTablePropertiesCommand,
  UpdateJobCommand,
  UpdateJobFromSourceControlCommand,
  UpdateMLTransformCommand,
  UpdatePartitionCommand,
  UpdateRegistryCommand,
  UpdateSchemaCommand,
  UpdateSourceControlFromJobCommand,
  UpdateTableCommand,
  UpdateTableOptimizerCommand,
  UpdateTriggerCommand,
  UpdateUsageProfileCommand,
  UpdateUserDefinedFunctionCommand,
  UpdateWorkflowCommand,
};

interface GlueService$ {
  readonly _: unique symbol;

  /**
   * @see {@link BatchCreatePartitionCommand}
   */
  batchCreatePartition(
    args: BatchCreatePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchCreatePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link BatchDeleteConnectionCommand}
   */
  batchDeleteConnection(
    args: BatchDeleteConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteConnectionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchDeletePartitionCommand}
   */
  batchDeletePartition(
    args: BatchDeletePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeletePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link BatchDeleteTableCommand}
   */
  batchDeleteTable(
    args: BatchDeleteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNotReadyError
  >;

  /**
   * @see {@link BatchDeleteTableVersionCommand}
   */
  batchDeleteTableVersion(
    args: BatchDeleteTableVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchDeleteTableVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetBlueprintsCommand}
   */
  batchGetBlueprints(
    args: BatchGetBlueprintsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetBlueprintsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetCrawlersCommand}
   */
  batchGetCrawlers(
    args: BatchGetCrawlersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCrawlersCommandOutput,
    Cause.TimeoutException | SdkError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetCustomEntityTypesCommand}
   */
  batchGetCustomEntityTypes(
    args: BatchGetCustomEntityTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetCustomEntityTypesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetDataQualityResultCommand}
   */
  batchGetDataQualityResult(
    args: BatchGetDataQualityResultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDataQualityResultCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetDevEndpointsCommand}
   */
  batchGetDevEndpoints(
    args: BatchGetDevEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDevEndpointsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetJobsCommand}
   */
  batchGetJobs(
    args: BatchGetJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetJobsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetPartitionCommand}
   */
  batchGetPartition(
    args: BatchGetPartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetPartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | InvalidStateError
    | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetTableOptimizerCommand}
   */
  batchGetTableOptimizer(
    args: BatchGetTableOptimizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetTableOptimizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
  >;

  /**
   * @see {@link BatchGetTriggersCommand}
   */
  batchGetTriggers(
    args: BatchGetTriggersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetTriggersCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchGetWorkflowsCommand}
   */
  batchGetWorkflows(
    args: BatchGetWorkflowsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetWorkflowsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchPutDataQualityStatisticAnnotationCommand}
   */
  batchPutDataQualityStatisticAnnotation(
    args: BatchPutDataQualityStatisticAnnotationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchPutDataQualityStatisticAnnotationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link BatchStopJobRunCommand}
   */
  batchStopJobRun(
    args: BatchStopJobRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchStopJobRunCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link BatchUpdatePartitionCommand}
   */
  batchUpdatePartition(
    args: BatchUpdatePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    BatchUpdatePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CancelDataQualityRuleRecommendationRunCommand}
   */
  cancelDataQualityRuleRecommendationRun(
    args: CancelDataQualityRuleRecommendationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelDataQualityRuleRecommendationRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CancelDataQualityRulesetEvaluationRunCommand}
   */
  cancelDataQualityRulesetEvaluationRun(
    args: CancelDataQualityRulesetEvaluationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelDataQualityRulesetEvaluationRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CancelMLTaskRunCommand}
   */
  cancelMLTaskRun(
    args: CancelMLTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelMLTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CancelStatementCommand}
   */
  cancelStatement(
    args: CancelStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelStatementCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CheckSchemaVersionValidityCommand}
   */
  checkSchemaVersionValidity(
    args: CheckSchemaVersionValidityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CheckSchemaVersionValidityCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServiceError | InvalidInputError
  >;

  /**
   * @see {@link CreateBlueprintCommand}
   */
  createBlueprint(
    args: CreateBlueprintCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBlueprintCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateCatalogCommand}
   */
  createCatalog(
    args: CreateCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCatalogCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederatedResourceAlreadyExistsError
    | FederationSourceError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateClassifierCommand}
   */
  createClassifier(
    args: CreateClassifierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateClassifierCommandOutput,
    Cause.TimeoutException | SdkError | AlreadyExistsError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link CreateColumnStatisticsTaskSettingsCommand}
   */
  createColumnStatisticsTaskSettings(
    args: CreateColumnStatisticsTaskSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateColumnStatisticsTaskSettingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | ColumnStatisticsTaskRunningError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateCrawlerCommand}
   */
  createCrawler(
    args: CreateCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCrawlerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateCustomEntityTypeCommand}
   */
  createCustomEntityType(
    args: CreateCustomEntityTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomEntityTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateDataQualityRulesetCommand}
   */
  createDataQualityRuleset(
    args: CreateDataQualityRulesetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDataQualityRulesetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateDatabaseCommand}
   */
  createDatabase(
    args: CreateDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | FederatedResourceAlreadyExistsError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateDevEndpointCommand}
   */
  createDevEndpoint(
    args: CreateDevEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDevEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreateGlueIdentityCenterConfigurationCommand}
   */
  createGlueIdentityCenterConfiguration(
    args: CreateGlueIdentityCenterConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateGlueIdentityCenterConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | ConcurrentModificationError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link CreateIntegrationCommand}
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | EntityNotFoundError
    | IntegrationConflictOperationFaultError
    | IntegrationQuotaExceededFaultError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | KMSKeyNotAccessibleFaultError
    | ResourceNotFoundError
    | ResourceNumberLimitExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreateIntegrationResourcePropertyCommand}
   */
  createIntegrationResourceProperty(
    args: CreateIntegrationResourcePropertyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationResourcePropertyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CreateIntegrationTablePropertiesCommand}
   */
  createIntegrationTableProperties(
    args: CreateIntegrationTablePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateIntegrationTablePropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateMLTransformCommand}
   */
  createMLTransform(
    args: CreateMLTransformCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMLTransformCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreatePartitionCommand}
   */
  createPartition(
    args: CreatePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreatePartitionIndexCommand}
   */
  createPartitionIndex(
    args: CreatePartitionIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartitionIndexCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateRegistryCommand}
   */
  createRegistry(
    args: CreateRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRegistryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | ConcurrentModificationError
    | InternalServiceError
    | InvalidInputError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateSchemaCommand}
   */
  createSchema(
    args: CreateSchemaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSchemaCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateScriptCommand}
   */
  createScript(
    args: CreateScriptCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScriptCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link CreateSecurityConfigurationCommand}
   */
  createSecurityConfiguration(
    args: CreateSecurityConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateSessionCommand}
   */
  createSession(
    args: CreateSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
    | ValidationError
  >;

  /**
   * @see {@link CreateTableCommand}
   */
  createTable(
    args: CreateTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNotReadyError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateTableOptimizerCommand}
   */
  createTableOptimizer(
    args: CreateTableOptimizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTableOptimizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateTriggerCommand}
   */
  createTrigger(
    args: CreateTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateUsageProfileCommand}
   */
  createUsageProfile(
    args: CreateUsageProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUsageProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateUserDefinedFunctionCommand}
   */
  createUserDefinedFunction(
    args: CreateUserDefinedFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateUserDefinedFunctionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateWorkflowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link DeleteBlueprintCommand}
   */
  deleteBlueprint(
    args: DeleteBlueprintCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBlueprintCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteCatalogCommand}
   */
  deleteCatalog(
    args: DeleteCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCatalogCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteClassifierCommand}
   */
  deleteClassifier(
    args: DeleteClassifierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteClassifierCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteColumnStatisticsForPartitionCommand}
   */
  deleteColumnStatisticsForPartition(
    args: DeleteColumnStatisticsForPartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteColumnStatisticsForPartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteColumnStatisticsForTableCommand}
   */
  deleteColumnStatisticsForTable(
    args: DeleteColumnStatisticsForTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteColumnStatisticsForTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteColumnStatisticsTaskSettingsCommand}
   */
  deleteColumnStatisticsTaskSettings(
    args: DeleteColumnStatisticsTaskSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteColumnStatisticsTaskSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteCrawlerCommand}
   */
  deleteCrawler(
    args: DeleteCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCrawlerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CrawlerRunningError
    | EntityNotFoundError
    | OperationTimeoutError
    | SchedulerTransitioningError
  >;

  /**
   * @see {@link DeleteCustomEntityTypeCommand}
   */
  deleteCustomEntityType(
    args: DeleteCustomEntityTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomEntityTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteDataQualityRulesetCommand}
   */
  deleteDataQualityRuleset(
    args: DeleteDataQualityRulesetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDataQualityRulesetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteDatabaseCommand}
   */
  deleteDatabase(
    args: DeleteDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteDevEndpointCommand}
   */
  deleteDevEndpoint(
    args: DeleteDevEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDevEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteGlueIdentityCenterConfigurationCommand}
   */
  deleteGlueIdentityCenterConfiguration(
    args: DeleteGlueIdentityCenterConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGlueIdentityCenterConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteIntegrationCommand}
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | EntityNotFoundError
    | IntegrationConflictOperationFaultError
    | IntegrationNotFoundFaultError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | InvalidIntegrationStateFaultError
    | InvalidStateError
    | ValidationError
  >;

  /**
   * @see {@link DeleteIntegrationResourcePropertyCommand}
   */
  deleteIntegrationResourceProperty(
    args: DeleteIntegrationResourcePropertyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationResourcePropertyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteIntegrationTablePropertiesCommand}
   */
  deleteIntegrationTableProperties(
    args: DeleteIntegrationTablePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteIntegrationTablePropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteJobCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteMLTransformCommand}
   */
  deleteMLTransform(
    args: DeleteMLTransformCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMLTransformCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeletePartitionCommand}
   */
  deletePartition(
    args: DeletePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeletePartitionIndexCommand}
   */
  deletePartitionIndex(
    args: DeletePartitionIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePartitionIndexCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteRegistryCommand}
   */
  deleteRegistry(
    args: DeleteRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRegistryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InvalidInputError
  >;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteResourcePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConditionCheckFailureError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteSchemaCommand}
   */
  deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSchemaCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InvalidInputError
  >;

  /**
   * @see {@link DeleteSchemaVersionsCommand}
   */
  deleteSchemaVersions(
    args: DeleteSchemaVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSchemaVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InvalidInputError
  >;

  /**
   * @see {@link DeleteSecurityConfigurationCommand}
   */
  deleteSecurityConfiguration(
    args: DeleteSecurityConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(
    args: DeleteSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteTableCommand}
   */
  deleteTable(
    args: DeleteTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNotReadyError
  >;

  /**
   * @see {@link DeleteTableOptimizerCommand}
   */
  deleteTableOptimizer(
    args: DeleteTableOptimizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableOptimizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteTableVersionCommand}
   */
  deleteTableVersion(
    args: DeleteTableVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTableVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteTriggerCommand}
   */
  deleteTrigger(
    args: DeleteTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteUsageProfileCommand}
   */
  deleteUsageProfile(
    args: DeleteUsageProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUsageProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteUserDefinedFunctionCommand}
   */
  deleteUserDefinedFunction(
    args: DeleteUserDefinedFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteUserDefinedFunctionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteWorkflowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link DescribeConnectionTypeCommand}
   */
  describeConnectionType(
    args: DescribeConnectionTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionTypeCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServiceError | InvalidInputError | ValidationError
  >;

  /**
   * @see {@link DescribeEntityCommand}
   */
  describeEntity(
    args: DescribeEntityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEntityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link DescribeInboundIntegrationsCommand}
   */
  describeInboundIntegrations(
    args: DescribeInboundIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeInboundIntegrationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IntegrationNotFoundFaultError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | TargetResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link DescribeIntegrationsCommand}
   */
  describeIntegrations(
    args: DescribeIntegrationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIntegrationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IntegrationNotFoundFaultError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ValidationError
  >;

  /**
   * @see {@link GetBlueprintCommand}
   */
  getBlueprint(
    args: GetBlueprintCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBlueprintCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetBlueprintRunCommand}
   */
  getBlueprintRun(
    args: GetBlueprintRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBlueprintRunCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InternalServiceError | OperationTimeoutError
  >;

  /**
   * @see {@link GetBlueprintRunsCommand}
   */
  getBlueprintRuns(
    args: GetBlueprintRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBlueprintRunsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetCatalogCommand}
   */
  getCatalog(
    args: GetCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCatalogCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetCatalogImportStatusCommand}
   */
  getCatalogImportStatus(
    args: GetCatalogImportStatusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCatalogImportStatusCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | OperationTimeoutError
  >;

  /**
   * @see {@link GetCatalogsCommand}
   */
  getCatalogs(
    args: GetCatalogsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCatalogsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetClassifierCommand}
   */
  getClassifier(
    args: GetClassifierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClassifierCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | OperationTimeoutError
  >;

  /**
   * @see {@link GetClassifiersCommand}
   */
  getClassifiers(
    args: GetClassifiersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetClassifiersCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link GetColumnStatisticsForPartitionCommand}
   */
  getColumnStatisticsForPartition(
    args: GetColumnStatisticsForPartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetColumnStatisticsForPartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetColumnStatisticsForTableCommand}
   */
  getColumnStatisticsForTable(
    args: GetColumnStatisticsForTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetColumnStatisticsForTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetColumnStatisticsTaskRunCommand}
   */
  getColumnStatisticsTaskRun(
    args: GetColumnStatisticsTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetColumnStatisticsTaskRunCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link GetColumnStatisticsTaskRunsCommand}
   */
  getColumnStatisticsTaskRuns(
    args: GetColumnStatisticsTaskRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetColumnStatisticsTaskRunsCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link GetColumnStatisticsTaskSettingsCommand}
   */
  getColumnStatisticsTaskSettings(
    args: GetColumnStatisticsTaskSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetColumnStatisticsTaskSettingsCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetConnectionsCommand}
   */
  getConnections(
    args: GetConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetConnectionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetCrawlerCommand}
   */
  getCrawler(
    args: GetCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCrawlerCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | OperationTimeoutError
  >;

  /**
   * @see {@link GetCrawlerMetricsCommand}
   */
  getCrawlerMetrics(
    args: GetCrawlerMetricsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCrawlerMetricsCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link GetCrawlersCommand}
   */
  getCrawlers(
    args: GetCrawlersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCrawlersCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link GetCustomEntityTypeCommand}
   */
  getCustomEntityType(
    args: GetCustomEntityTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCustomEntityTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataCatalogEncryptionSettingsCommand}
   */
  getDataCatalogEncryptionSettings(
    args: GetDataCatalogEncryptionSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataCatalogEncryptionSettingsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityModelCommand}
   */
  getDataQualityModel(
    args: GetDataQualityModelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityModelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityModelResultCommand}
   */
  getDataQualityModelResult(
    args: GetDataQualityModelResultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityModelResultCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityResultCommand}
   */
  getDataQualityResult(
    args: GetDataQualityResultCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityResultCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityRuleRecommendationRunCommand}
   */
  getDataQualityRuleRecommendationRun(
    args: GetDataQualityRuleRecommendationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityRuleRecommendationRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityRulesetCommand}
   */
  getDataQualityRuleset(
    args: GetDataQualityRulesetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityRulesetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataQualityRulesetEvaluationRunCommand}
   */
  getDataQualityRulesetEvaluationRun(
    args: GetDataQualityRulesetEvaluationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataQualityRulesetEvaluationRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDatabaseCommand}
   */
  getDatabase(
    args: GetDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDatabasesCommand}
   */
  getDatabases(
    args: GetDatabasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDatabasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDataflowGraphCommand}
   */
  getDataflowGraph(
    args: GetDataflowGraphCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDataflowGraphCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link GetDevEndpointCommand}
   */
  getDevEndpoint(
    args: GetDevEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDevEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetDevEndpointsCommand}
   */
  getDevEndpoints(
    args: GetDevEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetDevEndpointsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetEntityRecordsCommand}
   */
  getEntityRecords(
    args: GetEntityRecordsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEntityRecordsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link GetGlueIdentityCenterConfigurationCommand}
   */
  getGlueIdentityCenterConfiguration(
    args: GetGlueIdentityCenterConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetGlueIdentityCenterConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetIntegrationResourcePropertyCommand}
   */
  getIntegrationResourceProperty(
    args: GetIntegrationResourcePropertyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationResourcePropertyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetIntegrationTablePropertiesCommand}
   */
  getIntegrationTableProperties(
    args: GetIntegrationTablePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIntegrationTablePropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link GetJobCommand}
   */
  getJob(
    args: GetJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetJobBookmarkCommand}
   */
  getJobBookmark(
    args: GetJobBookmarkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobBookmarkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link GetJobRunCommand}
   */
  getJobRun(
    args: GetJobRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetJobRunsCommand}
   */
  getJobRuns(
    args: GetJobRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobRunsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetJobsCommand}
   */
  getJobs(
    args: GetJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetMLTaskRunCommand}
   */
  getMLTaskRun(
    args: GetMLTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMLTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetMLTaskRunsCommand}
   */
  getMLTaskRuns(
    args: GetMLTaskRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMLTaskRunsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetMLTransformCommand}
   */
  getMLTransform(
    args: GetMLTransformCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMLTransformCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetMLTransformsCommand}
   */
  getMLTransforms(
    args: GetMLTransformsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMLTransformsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetMappingCommand}
   */
  getMapping(
    args: GetMappingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetMappingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetPartitionCommand}
   */
  getPartition(
    args: GetPartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetPartitionIndexesCommand}
   */
  getPartitionIndexes(
    args: GetPartitionIndexesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPartitionIndexesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetPartitionsCommand}
   */
  getPartitions(
    args: GetPartitionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPartitionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | InvalidStateError
    | OperationTimeoutError
    | ResourceNotReadyError
  >;

  /**
   * @see {@link GetPlanCommand}
   */
  getPlan(
    args: GetPlanCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPlanCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link GetRegistryCommand}
   */
  getRegistry(
    args: GetRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link GetResourcePoliciesCommand}
   */
  getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetResourcePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(
    args: GetSchemaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSchemaCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link GetSchemaByDefinitionCommand}
   */
  getSchemaByDefinition(
    args: GetSchemaByDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSchemaByDefinitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link GetSchemaVersionCommand}
   */
  getSchemaVersion(
    args: GetSchemaVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSchemaVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link GetSchemaVersionsDiffCommand}
   */
  getSchemaVersionsDiff(
    args: GetSchemaVersionsDiffCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSchemaVersionsDiffCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link GetSecurityConfigurationCommand}
   */
  getSecurityConfiguration(
    args: GetSecurityConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetSecurityConfigurationsCommand}
   */
  getSecurityConfigurations(
    args: GetSecurityConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSecurityConfigurationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetStatementCommand}
   */
  getStatement(
    args: GetStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStatementCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTableCommand}
   */
  getTable(
    args: GetTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNotReadyError
  >;

  /**
   * @see {@link GetTableOptimizerCommand}
   */
  getTableOptimizer(
    args: GetTableOptimizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTableOptimizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
  >;

  /**
   * @see {@link GetTableVersionCommand}
   */
  getTableVersion(
    args: GetTableVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTableVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTableVersionsCommand}
   */
  getTableVersions(
    args: GetTableVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTableVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTablesCommand}
   */
  getTables(
    args: GetTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTablesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTagsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTriggerCommand}
   */
  getTrigger(
    args: GetTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetTriggersCommand}
   */
  getTriggers(
    args: GetTriggersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTriggersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetUnfilteredPartitionMetadataCommand}
   */
  getUnfilteredPartitionMetadata(
    args: GetUnfilteredPartitionMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUnfilteredPartitionMetadataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | PermissionTypeMismatchError
  >;

  /**
   * @see {@link GetUnfilteredPartitionsMetadataCommand}
   */
  getUnfilteredPartitionsMetadata(
    args: GetUnfilteredPartitionsMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUnfilteredPartitionsMetadataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | PermissionTypeMismatchError
  >;

  /**
   * @see {@link GetUnfilteredTableMetadataCommand}
   */
  getUnfilteredTableMetadata(
    args: GetUnfilteredTableMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUnfilteredTableMetadataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | PermissionTypeMismatchError
  >;

  /**
   * @see {@link GetUsageProfileCommand}
   */
  getUsageProfile(
    args: GetUsageProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUsageProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetUserDefinedFunctionCommand}
   */
  getUserDefinedFunction(
    args: GetUserDefinedFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserDefinedFunctionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetUserDefinedFunctionsCommand}
   */
  getUserDefinedFunctions(
    args: GetUserDefinedFunctionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetUserDefinedFunctionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(
    args: GetWorkflowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkflowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetWorkflowRunCommand}
   */
  getWorkflowRun(
    args: GetWorkflowRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkflowRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetWorkflowRunPropertiesCommand}
   */
  getWorkflowRunProperties(
    args: GetWorkflowRunPropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkflowRunPropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link GetWorkflowRunsCommand}
   */
  getWorkflowRuns(
    args: GetWorkflowRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetWorkflowRunsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ImportCatalogToGlueCommand}
   */
  importCatalogToGlue(
    args: ImportCatalogToGlueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ImportCatalogToGlueCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | OperationTimeoutError
  >;

  /**
   * @see {@link ListBlueprintsCommand}
   */
  listBlueprints(
    args: ListBlueprintsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBlueprintsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListColumnStatisticsTaskRunsCommand}
   */
  listColumnStatisticsTaskRuns(
    args: ListColumnStatisticsTaskRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListColumnStatisticsTaskRunsCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link ListConnectionTypesCommand}
   */
  listConnectionTypes(
    args: ListConnectionTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectionTypesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServiceError
  >;

  /**
   * @see {@link ListCrawlersCommand}
   */
  listCrawlers(
    args: ListCrawlersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCrawlersCommandOutput,
    Cause.TimeoutException | SdkError | OperationTimeoutError
  >;

  /**
   * @see {@link ListCrawlsCommand}
   */
  listCrawls(
    args: ListCrawlsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCrawlsCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListCustomEntityTypesCommand}
   */
  listCustomEntityTypes(
    args: ListCustomEntityTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomEntityTypesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListDataQualityResultsCommand}
   */
  listDataQualityResults(
    args: ListDataQualityResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityResultsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListDataQualityRuleRecommendationRunsCommand}
   */
  listDataQualityRuleRecommendationRuns(
    args: ListDataQualityRuleRecommendationRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityRuleRecommendationRunsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListDataQualityRulesetEvaluationRunsCommand}
   */
  listDataQualityRulesetEvaluationRuns(
    args: ListDataQualityRulesetEvaluationRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityRulesetEvaluationRunsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ListDataQualityRulesetsCommand}
   */
  listDataQualityRulesets(
    args: ListDataQualityRulesetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityRulesetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListDataQualityStatisticAnnotationsCommand}
   */
  listDataQualityStatisticAnnotations(
    args: ListDataQualityStatisticAnnotationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityStatisticAnnotationsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError
  >;

  /**
   * @see {@link ListDataQualityStatisticsCommand}
   */
  listDataQualityStatistics(
    args: ListDataQualityStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDataQualityStatisticsCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InternalServiceError | InvalidInputError
  >;

  /**
   * @see {@link ListDevEndpointsCommand}
   */
  listDevEndpoints(
    args: ListDevEndpointsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDevEndpointsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(
    args: ListEntitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEntitiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link ListIntegrationResourcePropertiesCommand}
   */
  listIntegrationResourceProperties(
    args: ListIntegrationResourcePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIntegrationResourcePropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListMLTransformsCommand}
   */
  listMLTransforms(
    args: ListMLTransformsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMLTransformsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListRegistriesCommand}
   */
  listRegistries(
    args: ListRegistriesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRegistriesCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | InternalServiceError | InvalidInputError
  >;

  /**
   * @see {@link ListSchemaVersionsCommand}
   */
  listSchemaVersions(
    args: ListSchemaVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSchemaVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link ListSchemasCommand}
   */
  listSchemas(
    args: ListSchemasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSchemasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(
    args: ListSessionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSessionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListStatementsCommand}
   */
  listStatements(
    args: ListStatementsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStatementsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListTableOptimizerRunsCommand}
   */
  listTableOptimizerRuns(
    args: ListTableOptimizerRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTableOptimizerRunsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link ListTriggersCommand}
   */
  listTriggers(
    args: ListTriggersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTriggersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListUsageProfilesCommand}
   */
  listUsageProfiles(
    args: ListUsageProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListUsageProfilesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListWorkflowsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link ModifyIntegrationCommand}
   */
  modifyIntegration(
    args: ModifyIntegrationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ModifyIntegrationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | EntityNotFoundError
    | IntegrationConflictOperationFaultError
    | IntegrationNotFoundFaultError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | InvalidIntegrationStateFaultError
    | InvalidStateError
    | ValidationError
  >;

  /**
   * @see {@link PutDataCatalogEncryptionSettingsCommand}
   */
  putDataCatalogEncryptionSettings(
    args: PutDataCatalogEncryptionSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDataCatalogEncryptionSettingsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link PutDataQualityProfileAnnotationCommand}
   */
  putDataQualityProfileAnnotation(
    args: PutDataQualityProfileAnnotationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutDataQualityProfileAnnotationCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InternalServiceError | InvalidInputError
  >;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutResourcePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConditionCheckFailureError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link PutSchemaVersionMetadataCommand}
   */
  putSchemaVersionMetadata(
    args: PutSchemaVersionMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutSchemaVersionMetadataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | EntityNotFoundError
    | InvalidInputError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link PutWorkflowRunPropertiesCommand}
   */
  putWorkflowRunProperties(
    args: PutWorkflowRunPropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutWorkflowRunPropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link QuerySchemaVersionMetadataCommand}
   */
  querySchemaVersionMetadata(
    args: QuerySchemaVersionMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    QuerySchemaVersionMetadataCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | EntityNotFoundError | InvalidInputError
  >;

  /**
   * @see {@link RegisterSchemaVersionCommand}
   */
  registerSchemaVersion(
    args: RegisterSchemaVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterSchemaVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link RemoveSchemaVersionMetadataCommand}
   */
  removeSchemaVersionMetadata(
    args: RemoveSchemaVersionMetadataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveSchemaVersionMetadataCommandOutput,
    Cause.TimeoutException | SdkError | AccessDeniedError | EntityNotFoundError | InvalidInputError
  >;

  /**
   * @see {@link ResetJobBookmarkCommand}
   */
  resetJobBookmark(
    args: ResetJobBookmarkCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResetJobBookmarkCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link ResumeWorkflowRunCommand}
   */
  resumeWorkflowRun(
    args: ResumeWorkflowRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ResumeWorkflowRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | IllegalWorkflowStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link RunStatementCommand}
   */
  runStatement(
    args: RunStatementCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RunStatementCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
    | ValidationError
  >;

  /**
   * @see {@link SearchTablesCommand}
   */
  searchTables(
    args: SearchTablesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchTablesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link StartBlueprintRunCommand}
   */
  startBlueprintRun(
    args: StartBlueprintRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartBlueprintRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | IllegalBlueprintStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StartColumnStatisticsTaskRunCommand}
   */
  startColumnStatisticsTaskRun(
    args: StartColumnStatisticsTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartColumnStatisticsTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ColumnStatisticsTaskRunningError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StartColumnStatisticsTaskRunScheduleCommand}
   */
  startColumnStatisticsTaskRunSchedule(
    args: StartColumnStatisticsTaskRunScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartColumnStatisticsTaskRunScheduleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StartCrawlerCommand}
   */
  startCrawler(
    args: StartCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartCrawlerCommandOutput,
    Cause.TimeoutException | SdkError | CrawlerRunningError | EntityNotFoundError | OperationTimeoutError
  >;

  /**
   * @see {@link StartCrawlerScheduleCommand}
   */
  startCrawlerSchedule(
    args: StartCrawlerScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartCrawlerScheduleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | NoScheduleError
    | OperationTimeoutError
    | SchedulerRunningError
    | SchedulerTransitioningError
  >;

  /**
   * @see {@link StartDataQualityRuleRecommendationRunCommand}
   */
  startDataQualityRuleRecommendationRun(
    args: StartDataQualityRuleRecommendationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDataQualityRuleRecommendationRunCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InternalServiceError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link StartDataQualityRulesetEvaluationRunCommand}
   */
  startDataQualityRulesetEvaluationRun(
    args: StartDataQualityRulesetEvaluationRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDataQualityRulesetEvaluationRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StartExportLabelsTaskRunCommand}
   */
  startExportLabelsTaskRun(
    args: StartExportLabelsTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExportLabelsTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StartImportLabelsTaskRunCommand}
   */
  startImportLabelsTaskRun(
    args: StartImportLabelsTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartImportLabelsTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StartJobRunCommand}
   */
  startJobRun(
    args: StartJobRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartJobRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StartMLEvaluationTaskRunCommand}
   */
  startMLEvaluationTaskRun(
    args: StartMLEvaluationTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMLEvaluationTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | MLTransformNotReadyError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StartMLLabelingSetGenerationTaskRunCommand}
   */
  startMLLabelingSetGenerationTaskRun(
    args: StartMLLabelingSetGenerationTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMLLabelingSetGenerationTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StartTriggerCommand}
   */
  startTrigger(
    args: StartTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StartWorkflowRunCommand}
   */
  startWorkflowRun(
    args: StartWorkflowRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartWorkflowRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentRunsExceededError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link StopColumnStatisticsTaskRunCommand}
   */
  stopColumnStatisticsTaskRun(
    args: StopColumnStatisticsTaskRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopColumnStatisticsTaskRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ColumnStatisticsTaskNotRunningError
    | ColumnStatisticsTaskStoppingError
    | EntityNotFoundError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StopColumnStatisticsTaskRunScheduleCommand}
   */
  stopColumnStatisticsTaskRunSchedule(
    args: StopColumnStatisticsTaskRunScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopColumnStatisticsTaskRunScheduleCommandOutput,
    Cause.TimeoutException | SdkError | EntityNotFoundError | InvalidInputError | OperationTimeoutError
  >;

  /**
   * @see {@link StopCrawlerCommand}
   */
  stopCrawler(
    args: StopCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopCrawlerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CrawlerNotRunningError
    | CrawlerStoppingError
    | EntityNotFoundError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StopCrawlerScheduleCommand}
   */
  stopCrawlerSchedule(
    args: StopCrawlerScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopCrawlerScheduleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | OperationTimeoutError
    | SchedulerNotRunningError
    | SchedulerTransitioningError
  >;

  /**
   * @see {@link StopSessionCommand}
   */
  stopSession(
    args: StopSessionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopSessionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | IllegalSessionStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StopTriggerCommand}
   */
  stopTrigger(
    args: StopTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link StopWorkflowRunCommand}
   */
  stopWorkflowRun(
    args: StopWorkflowRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopWorkflowRunCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | IllegalWorkflowStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link TestConnectionCommand}
   */
  testConnection(
    args: TestConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestConnectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConflictError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateBlueprintCommand}
   */
  updateBlueprint(
    args: UpdateBlueprintCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBlueprintCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | IllegalBlueprintStateError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateCatalogCommand}
   */
  updateCatalog(
    args: UpdateCatalogCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCatalogCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateClassifierCommand}
   */
  updateClassifier(
    args: UpdateClassifierCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateClassifierCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | VersionMismatchError
  >;

  /**
   * @see {@link UpdateColumnStatisticsForPartitionCommand}
   */
  updateColumnStatisticsForPartition(
    args: UpdateColumnStatisticsForPartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateColumnStatisticsForPartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateColumnStatisticsForTableCommand}
   */
  updateColumnStatisticsForTable(
    args: UpdateColumnStatisticsForTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateColumnStatisticsForTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateColumnStatisticsTaskSettingsCommand}
   */
  updateColumnStatisticsTaskSettings(
    args: UpdateColumnStatisticsTaskSettingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateColumnStatisticsTaskSettingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | VersionMismatchError
  >;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateCrawlerCommand}
   */
  updateCrawler(
    args: UpdateCrawlerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCrawlerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CrawlerRunningError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | VersionMismatchError
  >;

  /**
   * @see {@link UpdateCrawlerScheduleCommand}
   */
  updateCrawlerSchedule(
    args: UpdateCrawlerScheduleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCrawlerScheduleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InvalidInputError
    | OperationTimeoutError
    | SchedulerTransitioningError
    | VersionMismatchError
  >;

  /**
   * @see {@link UpdateDataQualityRulesetCommand}
   */
  updateDataQualityRuleset(
    args: UpdateDataQualityRulesetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDataQualityRulesetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | EntityNotFoundError
    | IdempotentParameterMismatchError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link UpdateDatabaseCommand}
   */
  updateDatabase(
    args: UpdateDatabaseCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDatabaseCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateDevEndpointCommand}
   */
  updateDevEndpoint(
    args: UpdateDevEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDevEndpointCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link UpdateGlueIdentityCenterConfigurationCommand}
   */
  updateGlueIdentityCenterConfiguration(
    args: UpdateGlueIdentityCenterConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateGlueIdentityCenterConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateIntegrationResourcePropertyCommand}
   */
  updateIntegrationResourceProperty(
    args: UpdateIntegrationResourcePropertyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationResourcePropertyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateIntegrationTablePropertiesCommand}
   */
  updateIntegrationTableProperties(
    args: UpdateIntegrationTablePropertiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIntegrationTablePropertiesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServerError
    | InternalServiceError
    | InvalidInputError
    | ResourceNotFoundError
    | ValidationError
  >;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateJobFromSourceControlCommand}
   */
  updateJobFromSourceControl(
    args: UpdateJobFromSourceControlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateJobFromSourceControlCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link UpdateMLTransformCommand}
   */
  updateMLTransform(
    args: UpdateMLTransformCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMLTransformCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdatePartitionCommand}
   */
  updatePartition(
    args: UpdatePartitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePartitionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateRegistryCommand}
   */
  updateRegistry(
    args: UpdateRegistryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRegistryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link UpdateSchemaCommand}
   */
  updateSchema(
    args: UpdateSchemaCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSchemaCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
  >;

  /**
   * @see {@link UpdateSourceControlFromJobCommand}
   */
  updateSourceControlFromJob(
    args: UpdateSourceControlFromJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSourceControlFromJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | AlreadyExistsError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ValidationError
  >;

  /**
   * @see {@link UpdateTableCommand}
   */
  updateTable(
    args: UpdateTableCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AlreadyExistsError
    | ConcurrentModificationError
    | EntityNotFoundError
    | FederationSourceError
    | FederationSourceRetryableError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
    | ResourceNotReadyError
    | ResourceNumberLimitExceededError
  >;

  /**
   * @see {@link UpdateTableOptimizerCommand}
   */
  updateTableOptimizer(
    args: UpdateTableOptimizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTableOptimizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | AccessDeniedError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateTriggerCommand}
   */
  updateTrigger(
    args: UpdateTriggerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTriggerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateUsageProfileCommand}
   */
  updateUsageProfile(
    args: UpdateUsageProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUsageProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationNotSupportedError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateUserDefinedFunctionCommand}
   */
  updateUserDefinedFunction(
    args: UpdateUserDefinedFunctionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateUserDefinedFunctionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | EntityNotFoundError
    | GlueEncryptionError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;

  /**
   * @see {@link UpdateWorkflowCommand}
   */
  updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateWorkflowCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | EntityNotFoundError
    | InternalServiceError
    | InvalidInputError
    | OperationTimeoutError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeGlueService = Effect.gen(function*() {
  const client = yield* Instance.GlueClientInstance;

  return yield* Service.fromClientAndCommands<GlueService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: GlueServiceConfig.toGlueClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class GlueService extends Effect.Tag("@effect-aws/client-glue/GlueService")<
  GlueService,
  GlueService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeGlueService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: GlueService.Config) =>
    Layer.effect(this, makeGlueService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(GlueServiceConfig.setGlueServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: GlueClientConfig) => GlueClient,
  ) =>
    Layer.effect(this, makeGlueService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.GlueClientInstance,
          Effect.map(GlueServiceConfig.toGlueClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace GlueService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<GlueClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }

  /**
   * @since 1.0.0
   */
  export type Type = GlueService$;
}
