import { Headers } from '@effect/platform'
import * as HttpBody from '@effect/platform/HttpBody'
import * as Match from 'effect/Match'

const HOST_SERVICES: Record<string, string> = {
  appstream2: 'appstream',
  cloudhsmv2: 'cloudhsm',
  email: 'ses',
  marketplace: 'aws-marketplace',
  mobile: 'AWSMobileHubService',
  pinpoint: 'mobiletargeting',
  queue: 'sqs',
  'git-codecommit': 'codecommit',
  'mturk-requester-sandbox': 'mturk-requester',
  'personalize-runtime': 'personalize',
}

/**
 * @internal
 */
export const getBody = Match.type<HttpBody.HttpBody>().pipe(
  Match.tag(`Empty`, (): XMLHttpRequestBodyInit => ``),
  Match.tag(`FormData`, (body): XMLHttpRequestBodyInit => body.formData),
  Match.tag(`Raw`, (body): XMLHttpRequestBodyInit => body.body as string),
  Match.tag(`Stream`, (): XMLHttpRequestBodyInit => ``),
  Match.tag(`Uint8Array`, (body): XMLHttpRequestBodyInit => body.body),
  Match.exhaustive,
)


/**
 * @internal
 * 
 * Snatched from https://github.com/mhart/aws4fetch/blob/master/src/main.js
 */
export function guessServiceRegion(url: URL, headers: Headers.Headers): [service: string, region: string] {
  const { hostname, pathname } = url

  if (hostname.endsWith('.on.aws')) {
    const match = hostname.match(/^[^.]{1,63}\.lambda-url\.([^.]{1,63})\.on\.aws$/)
    return match != null ? ['lambda', match[1] || ''] : ['', '']
  }
  if (hostname.endsWith('.r2.cloudflarestorage.com')) {
    return ['s3', 'auto']
  }
  if (hostname.endsWith('.backblazeb2.com')) {
    const match = hostname.match(/^(?:[^.]{1,63}\.)?s3\.([^.]{1,63})\.backblazeb2\.com$/)
    return match != null ? ['s3', match[1] || ''] : ['', '']
  }
  const match = hostname.replace('dualstack.', '').match(/([^.]{1,63})\.(?:([^.]{0,63})\.)?amazonaws\.com(?:\.cn)?$/)
  let service = (match && match[1]) || ''
  let region = match && match[2]

  if (region === 'us-gov') {
    region = 'us-gov-west-1'
  } else if (region === 's3' || region === 's3-accelerate') {
    region = 'us-east-1'
    service = 's3'
  } else if (service === 'iot') {
    if (hostname.startsWith('iot.')) {
      service = 'execute-api'
    } else if (hostname.startsWith('data.jobs.iot.')) {
      service = 'iot-jobs-data'
    } else {
      service = pathname === '/mqtt' ? 'iotdevicegateway' : 'iotdata'
    }
  } else if (service === 'autoscaling') {
    const targetPrefix = (headers['X-Amz-Target'] || '').split('.')[0]
    if (targetPrefix === 'AnyScaleFrontendService') {
      service = 'application-autoscaling'
    } else if (targetPrefix === 'AnyScaleScalingPlannerFrontendService') {
      service = 'autoscaling-plans'
    }
  } else if (region == null && service.startsWith('s3-')) {
    region = service.slice(3).replace(/^fips-|^external-1/, '')
    service = 's3'
  } else if (service.endsWith('-fips')) {
    service = service.slice(0, -5)
  } else if (region && /-\d$/.test(service) && !/-\d$/.test(region)) {
    ;[service, region] = [region, service]
  }

  return [HOST_SERVICES[service] || service, region || '']
}
