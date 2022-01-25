import { PutObjectCommand } from '@aws-sdk/client-s3'
/**
 * S3 putObject
 * @param {import('@aws-sdk/client-s3').S3Client}s3client
 * @param {import('@aws-sdk/client-s3').PutObjectCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').PutObjectOutput>}
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export function putObject(s3client, opts) {
	return s3client.send(new PutObjectCommand(opts))
}
