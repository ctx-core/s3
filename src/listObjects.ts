import {
	ListObjectsCommand, ListObjectsCommandInput, ListObjectsOutput, S3Client
} from '@aws-sdk/client-s3'
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export function listObjects(s3client: S3Client, opts: ListObjectsCommandInput): Promise<ListObjectsOutput> {
	return s3client.send(new ListObjectsCommand(opts))
}
