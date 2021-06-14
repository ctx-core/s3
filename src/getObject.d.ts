import { GetObjectCommandInput, GetObjectOutput, S3Client } from '@aws-sdk/client-s3';
/**
 * S3 getObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property}
 */
export declare function getObject(s3client: S3Client, opts: GetObjectCommandInput): Promise<GetObjectOutput>;
