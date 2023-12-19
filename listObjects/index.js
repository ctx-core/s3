/// <reference types="ctx-core" />
import { ListObjectsCommand } from '@aws-sdk/client-s3'
import { s3_client_ } from '../s3_client_'
/**
 * S3 ListObjectsCommand
 * @param {Ctx|import('@aws-sdk/client-s3').S3Client}ctx
 * @param {import('@aws-sdk/client-s3').ListObjectsCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').ListObjectsOutput>}
 * @see {@link http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listObjectsV2-property}
 */
export function listObjects(ctx, opts) {
	return (
		typeof ctx.has === 'function'
			? s3_client_(/** @type {Ctx} */ctx).send(new ListObjectsCommand(opts))
			: ctx.send(new ListObjectsCommand(opts)))
}
