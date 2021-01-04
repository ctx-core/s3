import type { S3Client } from '@aws-sdk/client-s3-node/S3Client'
import type { PutObjectInput } from '@aws-sdk/client-s3-node/types/PutObjectInput'
import { PutObjectCommand, PutObjectOutput } from '@aws-sdk/client-s3-node/commands/PutObjectCommand'
/**
 * S3 putObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export function putObject(s3client:S3Client, opts:PutObjectInput):Promise<PutObjectOutput> {
	return s3client.send(new PutObjectCommand(opts))
}
