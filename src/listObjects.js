import { ListObjectsCommand } from '@aws-sdk/client-s3'
/**
 * S3 ListObjectsCommand
 * @param {import('@aws-sdk/client-s3').S3Client}s3client
 * @param {import('@aws-sdk/client-s3').ListObjectsCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').ListObjectsOutput>}
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export function listObjects(s3client, opts) {
	return s3client.send(new ListObjectsCommand(opts))
}
