import type { GetObjectCommandInput, GetObjectCommandOutput } from '@aws-sdk/client-s3'
import type { Be } from '@ctx-core/object'
export declare const getObject_b:Be<getObject_T>
export declare type getObject_T =
	(opts:GetObjectCommandInput)=>Promise<GetObjectCommandOutput|null>
