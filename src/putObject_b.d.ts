import type { PutObjectCommandInput, PutObjectCommandOutput } from '@aws-sdk/client-s3'
import type { Be } from '@ctx-core/object'
export declare const putObject_b:Be<putObject_T>
export declare type putObject_T =
	(opts:PutObjectCommandInput)=>Promise<PutObjectCommandOutput|null>
