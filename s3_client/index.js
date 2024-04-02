/// <reference types="ctx-core" />
import { S3Client } from '@aws-sdk/client-s3'
import { id_be_ } from 'ctx-core/be'
import { import_meta_env_ } from 'ctx-core/env'
/**
 * @param {ctx_T|import('@aws-sdk/client-s3').S3ClientConfig}ctx
 * @return {import('@aws-sdk/client-s3').S3Client}
 * @private
 */
export function s3_client_(ctx) {
	return (
		typeof ctx.has === 'function'
			? _s3_client_(/** @type {ctx_T} */ctx)
			: new S3Client(ctx))
}
const _s3_client_ = id_be_(
	'_s3_client',
	()=>
		new S3Client({
			region: import_meta_env_().AWS_REGION
		}))
