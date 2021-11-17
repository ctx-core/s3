import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3'
export function S3Client_(config:S3ClientConfig):S3Client {
	return new S3Client(config)
}
export {
	S3Client_ as _S3Client,
}
