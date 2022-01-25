import { be_ } from '@ctx-core/object'
import { listObjects as _listObjects } from './listObjects.js'
import { s3_client_b } from './s3_client_b.js'
const key = 'listObjects'
/** @type {import('./listObjects_b.d.ts').listObjects_b} */
export const listObjects_b = be_(key, ctx=>{
	return opts=>_listObjects(s3_client_b(ctx), opts)
})
