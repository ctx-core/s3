import type { S3Client } from '@aws-sdk/client-s3-node/S3Client'
import type { GetObjectInput } from '@aws-sdk/client-s3-node/types/GetObjectInput'
import { GetObjectCommand } from '@aws-sdk/client-s3-node/commands/GetObjectCommand'
/**
 * S3 getObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property}
 */
export function getObject(s3client:S3Client, opts:GetObjectInput) {
	return s3client.send(new GetObjectCommand(opts))
}