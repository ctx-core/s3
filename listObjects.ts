import type { S3Client } from '@aws-sdk/client-s3-node/S3Client'
import { ListObjectsCommand, ListObjectsInput } from '@aws-sdk/client-s3-node/commands/ListObjectsCommand'
import type { ListObjectsOutput } from '@aws-sdk/client-s3-node/types/ListObjectsOutput'
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export function listObjects(s3client:S3Client, opts:ListObjectsInput):Promise<ListObjectsOutput> {
	return s3client.send(new ListObjectsCommand(opts))
}
