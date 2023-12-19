/// <reference types="ctx-core" />
import { getObject } from '../getObject/index.js'
/**
 * @param {Ctx}ctx
 * @param {import('@aws-sdk/client-s3').GetObjectCommandInput}opts
 * @return {Promise<import('@aws-sdk/client-s3').GetObjectCommandOutput>}
 */
export async function getObject_maybe(
	ctx, opts
) {
	try {
		return await getObject(ctx, opts)
	} catch (e) {
		if (e.code === 'NoSuchKey') return null
		throw e
	}
}
