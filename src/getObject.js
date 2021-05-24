import { GetObjectCommand } from '@aws-sdk/client-s3';
/**
 * S3 getObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property}
 */
export function getObject(s3client, opts) {
    return s3client.send(new GetObjectCommand(opts));
}
