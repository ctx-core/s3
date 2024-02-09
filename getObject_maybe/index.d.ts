import type { GetObjectCommandInput, GetObjectOutput } from '@aws-sdk/client-s3'
import type { ctx_T } from 'ctx-core/be'
/**
 * S3 GetObjectCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#GetObjectV2-property}
 */
export declare function getObject_maybe(ctx:ctx_T, opts:GetObjectCommandInput):Promise<GetObjectOutput>
