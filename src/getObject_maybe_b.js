import { be_ } from '@ctx-core/object'
import { getObject_b } from './getObject_b.js'
const key = 'getObject_maybe'
/** @type {import('./getObject_maybe_b.d.ts').getObject_maybe_b} */
export const getObject_maybe_b = be_(key, ctx=>
	async opts=>{
		try {
			return await getObject_b(ctx)(opts)
		} catch (e) {
			if (e.code === 'NoSuchKey') return null
			throw e
		}
	})
