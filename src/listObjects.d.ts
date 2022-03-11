import { ListObjectsCommandInput, ListObjectsCommandOutput, ListObjectsOutput, S3Client } from '@aws-sdk/client-s3'
import type { Ctx } from '@ctx-core/object'
/**
 * S3 ListObjectsCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export declare function listObjects(s3client:S3Client, opts:ListObjectsCommandInput):Promise<ListObjectsOutput>;
export declare function listObjects(ctx:Ctx, opts:ListObjectsCommandInput):Promise<ListObjectsCommandOutput|null>