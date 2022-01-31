import { getObject as _getObject } from './getObject.js'
import { s3_client_ } from './s3_client_.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/**
 * {import('@aws-sdk/client-s3').S3Client}
 * @param {Ctx|import('@aws-sdk/client-s3').S3Client}ctx
 * @param {import('@aws-sdk/client-s3').GetObjectCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').GetObjectOutput>}
 */
export function getObject(ctx, opts) {
	return (
		typeof ctx.has === 'function'
		? _getObject(s3_client_(/** @type {Ctx} */ctx), opts)
		: _getObject(ctx, opts)
	)
}
