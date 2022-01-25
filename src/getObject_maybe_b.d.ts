import type { GetObjectCommandInput, GetObjectOutput } from '@aws-sdk/client-s3'
import type { Be } from '@ctx-core/object'
export declare const getObject_maybe_b:Be<getObject_maybe_T>
export type getObject_maybe_T = (opts:GetObjectCommandInput)=>Promise<GetObjectOutput>
