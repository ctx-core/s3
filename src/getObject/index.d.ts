import type { GetObjectCommandInput, GetObjectCommandOutput, S3Client } from '@aws-sdk/client-s3'
import type { Ctx } from '@ctx-core/object'
/**
 * S3 GetObjectCommand
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#GetObjectV2-property}
 */
export declare function getObject(
	s3client:S3Client, opts:GetObjectCommandInput
):Promise<GetObjectCommandOutput|null>
export declare function getObject(
	ctx:Ctx, opts:GetObjectCommandInput
):Promise<GetObjectCommandOutput|null>