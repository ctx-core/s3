import type { ListObjectsCommandInput, ListObjectsCommandOutput, ListObjectsOutput, S3Client } from '@aws-sdk/client-s3'
import type { ctx_T } from 'ctx-core/be'
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export declare function listObjects(
	s3client:S3Client, opts:ListObjectsCommandInput
):Promise<ListObjectsOutput>
export declare function listObjects(
	ctx:ctx_T, opts:ListObjectsCommandInput
):Promise<ListObjectsCommandOutput|null>
