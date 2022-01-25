import { be_ } from '@ctx-core/object'
import { getObject as _getObject } from './getObject.js'
import { s3_client_b } from './s3_client_b.js'
const key = 'getObject'
/** @type {import('./getObject_b.d.ts').getObject_b} */
export const getObject_b = be_(key, ctx=>{
	return opts=>_getObject(s3_client_b(ctx), opts)
})
