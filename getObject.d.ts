/// <reference types="node" />
import type { S3Client } from '@aws-sdk/client-s3-node/S3Client';
import type { GetObjectInput } from '@aws-sdk/client-s3-node/types/GetObjectInput';
/**
 * S3 getObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property}
 */
export declare function getObject(s3client: S3Client, opts: GetObjectInput): Promise<import("@aws-sdk/client-s3-node/types/GetObjectOutput").GetObjectOutput<import("stream").Readable>>;
