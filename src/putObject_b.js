import { be_ } from '@ctx-core/object'
import { putObject as _putObject } from './putObject.js'
import { s3_client_b } from './s3_client_b.js'
const key = 'putObject'
/** @type {import('./putObject_b.d.ts').putObject_b} */
export const putObject_b = be_(key, ctx=>{
	return opts=>_putObject(s3_client_b(ctx), opts)
})
