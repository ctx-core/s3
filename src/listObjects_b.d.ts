import type { ListObjectsCommandInput, ListObjectsCommandOutput } from '@aws-sdk/client-s3'
import type { Be } from '@ctx-core/object'
export declare const listObjects_b:Be<listObjects_T>
export declare type listObjects_T =
	(opts:ListObjectsCommandInput)=>Promise<ListObjectsCommandOutput|null>
