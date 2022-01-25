import { S3Client } from '@aws-sdk/client-s3'
import { be_ } from '@ctx-core/object'
const key = 's3'
/** @type {import('./s3_client_b.d.ts').s3_client_b} */
export const s3_client_b = be_(key, ()=>
	new S3Client({
		region: process.env.AWS_REGION
	})
)
