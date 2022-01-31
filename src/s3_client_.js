import { S3Client } from '@aws-sdk/client-s3'
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
		? s3_client_b(/** @type {Ctx} */ctx)
		: new S3Client(ctx)
	)
}
const key = 's3_client'
const s3_client_b = be_(key, ()=>
	new S3Client({
		region: process.env.AWS_REGION
	})
)
