import { throw_missing_env } from '@ctx-core/env'
export const AWS_REGION = process.env.AWS_REGION || 'us-east-1'
export function s3_env_validate() {
	if (!process.env.AWS_ACCESS_KEY_ID)
		throw_missing_env('AWS_ACCESS_KEY_ID')
	if (!process.env.AWS_SECRET_ACCESS_KEY)
		throw_missing_env('AWS_SECRET_ACCESS_KEY')
}
export {
	s3_env_validate as validate__env__s3
}
