import { PutObjectCommand } from '@aws-sdk/client-s3'
import { s3_client_ } from '../s3_client_/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/**
 * S3 putObject
 * @param {Ctx|import('@aws-sdk/client-s3').S3Client}ctx
 * @param {import('@aws-sdk/client-s3').PutObjectCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').PutObjectOutput>}
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property}
 */
export function putObject(ctx, opts) {
	return (
		typeof ctx.has === 'function'
		? s3_client_(/** @type {Ctx} */ctx).send(new PutObjectCommand(opts))
		: ctx.send(new PutObjectCommand(opts)))
}
