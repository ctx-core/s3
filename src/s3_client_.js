import { S3Client } from '@aws-sdk/client-s3'
/**
 * @param {import('@aws-sdk/client-s3').S3ClientConfig} config
 * @return {import('@aws-sdk/client-s3').S3Client}
 * @private
 */
export function S3Client_(config) {
	return new S3Client(config)
}
export { S3Client_ as _S3Client, }
