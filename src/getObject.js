import { GetObjectCommand } from '@aws-sdk/client-s3'
import { s3_client_ } from './s3_client_.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/**
 * {import('@aws-sdk/client-s3').S3Client}
 * @param {Ctx|import('@aws-sdk/client-s3').S3Client}s3_client_or_ctx
 * @param {import('@aws-sdk/client-s3').GetObjectCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').GetObjectOutput>}
 */
export function getObject(s3_client_or_ctx, opts) {
	return (
		typeof s3_client_or_ctx.has === 'function'
		? getObject(s3_client_(/** @type {Ctx} */s3_client_or_ctx), opts)
		: s3_client_or_ctx.send(new GetObjectCommand(opts)))
}
