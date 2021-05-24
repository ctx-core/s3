import { ListObjectsCommand } from '@aws-sdk/client-s3';
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export function listObjects(s3client, opts) {
    return s3client.send(new ListObjectsCommand(opts));
}
