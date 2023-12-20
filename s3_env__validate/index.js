import { import_meta_env_, missing_env__throw } from 'ctx-core/env'
export const AWS_REGION = import_meta_env_().AWS_REGION || 'us-east-1'
export function s3_env__validate() {
	if (!import_meta_env_().AWS_ACCESS_KEY_ID) missing_env__throw('AWS_ACCESS_KEY_ID')
	if (!import_meta_env_().AWS_SECRET_ACCESS_KEY) missing_env__throw('AWS_SECRET_ACCESS_KEY')
}
export {
	s3_env__validate as s3_env_validate,
	s3_env__validate as validate__env__s3,
}
