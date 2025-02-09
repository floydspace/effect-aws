import type {
  AccountSendingPausedException,
  AlreadyExistsException,
  CannotDeleteException,
  ConfigurationSetAlreadyExistsException,
  ConfigurationSetDoesNotExistException,
  ConfigurationSetSendingPausedException,
  CustomVerificationEmailInvalidContentException,
  CustomVerificationEmailTemplateAlreadyExistsException,
  CustomVerificationEmailTemplateDoesNotExistException,
  EventDestinationAlreadyExistsException,
  EventDestinationDoesNotExistException,
  FromEmailAddressNotVerifiedException,
  InvalidCloudWatchDestinationException,
  InvalidConfigurationSetException,
  InvalidDeliveryOptionsException,
  InvalidFirehoseDestinationException,
  InvalidLambdaFunctionException,
  InvalidPolicyException,
  InvalidRenderingParameterException,
  InvalidS3ConfigurationException,
  InvalidSNSDestinationException,
  InvalidSnsTopicException,
  InvalidTemplateException,
  InvalidTrackingOptionsException,
  LimitExceededException,
  MailFromDomainNotVerifiedException,
  MessageRejected,
  MissingRenderingAttributeException,
  ProductionAccessNotGrantedException,
  RuleDoesNotExistException,
  RuleSetDoesNotExistException,
  TemplateDoesNotExistException,
  TrackingOptionsAlreadyExistsException,
  TrackingOptionsDoesNotExistException,
} from "@aws-sdk/client-ses";
import type { TaggedException } from "@effect-aws/commons";
import { SdkError as CommonSdkError } from "@effect-aws/commons";

export const AllServiceErrors = [
  "AccountSendingPausedException",
  "AlreadyExistsException",
  "CannotDeleteException",
  "ConfigurationSetAlreadyExistsException",
  "ConfigurationSetDoesNotExistException",
  "ConfigurationSetSendingPausedException",
  "CustomVerificationEmailInvalidContentException",
  "CustomVerificationEmailTemplateAlreadyExistsException",
  "CustomVerificationEmailTemplateDoesNotExistException",
  "EventDestinationAlreadyExistsException",
  "EventDestinationDoesNotExistException",
  "FromEmailAddressNotVerifiedException",
  "InvalidCloudWatchDestinationException",
  "InvalidConfigurationSetException",
  "InvalidDeliveryOptionsException",
  "InvalidFirehoseDestinationException",
  "InvalidLambdaFunctionException",
  "InvalidPolicyException",
  "InvalidRenderingParameterException",
  "InvalidS3ConfigurationException",
  "InvalidSNSDestinationException",
  "InvalidSnsTopicException",
  "InvalidTemplateException",
  "InvalidTrackingOptionsException",
  "LimitExceededException",
  "MailFromDomainNotVerifiedException",
  "MessageRejected",
  "MissingRenderingAttributeException",
  "ProductionAccessNotGrantedException",
  "RuleDoesNotExistException",
  "RuleSetDoesNotExistException",
  "TemplateDoesNotExistException",
  "TrackingOptionsAlreadyExistsException",
  "TrackingOptionsDoesNotExistException",
] as const;

export type AccountSendingPausedError = TaggedException<AccountSendingPausedException>;
export type AlreadyExistsError = TaggedException<AlreadyExistsException>;
export type CannotDeleteError = TaggedException<CannotDeleteException>;
export type ConfigurationSetAlreadyExistsError = TaggedException<ConfigurationSetAlreadyExistsException>;
export type ConfigurationSetDoesNotExistError = TaggedException<ConfigurationSetDoesNotExistException>;
export type ConfigurationSetSendingPausedError = TaggedException<ConfigurationSetSendingPausedException>;
export type CustomVerificationEmailInvalidContentError = TaggedException<
  CustomVerificationEmailInvalidContentException
>;
export type CustomVerificationEmailTemplateAlreadyExistsError = TaggedException<
  CustomVerificationEmailTemplateAlreadyExistsException
>;
export type CustomVerificationEmailTemplateDoesNotExistError = TaggedException<
  CustomVerificationEmailTemplateDoesNotExistException
>;
export type EventDestinationAlreadyExistsError = TaggedException<EventDestinationAlreadyExistsException>;
export type EventDestinationDoesNotExistError = TaggedException<EventDestinationDoesNotExistException>;
export type FromEmailAddressNotVerifiedError = TaggedException<FromEmailAddressNotVerifiedException>;
export type InvalidCloudWatchDestinationError = TaggedException<InvalidCloudWatchDestinationException>;
export type InvalidConfigurationSetError = TaggedException<InvalidConfigurationSetException>;
export type InvalidDeliveryOptionsError = TaggedException<InvalidDeliveryOptionsException>;
export type InvalidFirehoseDestinationError = TaggedException<InvalidFirehoseDestinationException>;
export type InvalidLambdaFunctionError = TaggedException<InvalidLambdaFunctionException>;
export type InvalidPolicyError = TaggedException<InvalidPolicyException>;
export type InvalidRenderingParameterError = TaggedException<InvalidRenderingParameterException>;
export type InvalidS3ConfigurationError = TaggedException<InvalidS3ConfigurationException>;
export type InvalidSNSDestinationError = TaggedException<InvalidSNSDestinationException>;
export type InvalidSnsTopicError = TaggedException<InvalidSnsTopicException>;
export type InvalidTemplateError = TaggedException<InvalidTemplateException>;
export type InvalidTrackingOptionsError = TaggedException<InvalidTrackingOptionsException>;
export type LimitExceededError = TaggedException<LimitExceededException>;
export type MailFromDomainNotVerifiedError = TaggedException<MailFromDomainNotVerifiedException>;
export type MessageRejectedError = TaggedException<MessageRejected>;
export type MissingRenderingAttributeError = TaggedException<MissingRenderingAttributeException>;
export type ProductionAccessNotGrantedError = TaggedException<ProductionAccessNotGrantedException>;
export type RuleDoesNotExistError = TaggedException<RuleDoesNotExistException>;
export type RuleSetDoesNotExistError = TaggedException<RuleSetDoesNotExistException>;
export type TemplateDoesNotExistError = TaggedException<TemplateDoesNotExistException>;
export type TrackingOptionsAlreadyExistsError = TaggedException<TrackingOptionsAlreadyExistsException>;
export type TrackingOptionsDoesNotExistError = TaggedException<TrackingOptionsDoesNotExistException>;

export type SdkError = CommonSdkError;
export const SdkError = CommonSdkError;
