import { PutObjectCommandInput, PutObjectOutput, S3Client } from '@aws-sdk/client-s3'
import { type Ctx } from '@ctx-core/object'
/**
 * S3 putObject
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export declare function putObject(s3client:S3Client, opts:PutObjectCommandInput):Promise<PutObjectOutput>
export declare function putObject(ctx:Ctx, opts:PutObjectCommandInput):Promise<PutObjectOutput>
