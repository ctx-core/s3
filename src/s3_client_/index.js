import { S3Client } from '@aws-sdk/client-s3'
import { import_meta_env_ } from '@ctx-core/env'
import { be_ } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/**
 * @param {Ctx|import('@aws-sdk/client-s3').S3ClientConfig}ctx
 * @return {import('@aws-sdk/client-s3').S3Client}
 * @private
 */
export function s3_client_(ctx) {
	return (
		typeof ctx.has === 'function'
		? _s3_client_(/** @type {Ctx} */ctx)
		: new S3Client(ctx))
}
const _s3_client_ = be_('_s3_client', ()=>
	new S3Client({
		region: import_meta_env_().AWS_REGION
	})
)