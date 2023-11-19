import { getObject } from '../getObject/index.js'

/**
 * @param {import('@ctx-core/object').Ctx}ctx
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
