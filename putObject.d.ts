import type { S3Client } from '@aws-sdk/client-s3-node/S3Client';
import type { PutObjectInput } from '@aws-sdk/client-s3-node/types/PutObjectInput';
/**
 * S3 putObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export declare function putObject(s3client: S3Client, opts: PutObjectInput): Promise<import("@aws-sdk/client-s3-node/types/PutObjectOutput").PutObjectOutput>;
