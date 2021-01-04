import type { S3Client } from '@aws-sdk/client-s3-node/S3Client';
import { ListObjectsInput } from '@aws-sdk/client-s3-node/commands/ListObjectsCommand';
import type { ListObjectsOutput } from '@aws-sdk/client-s3-node/types/ListObjectsOutput';
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export declare function listObjects(s3client: S3Client, opts: ListObjectsInput): Promise<ListObjectsOutput>;
