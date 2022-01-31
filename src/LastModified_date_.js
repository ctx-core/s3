/**
 * Returns the Date of LastModified
 * @param {import('./LastModified_date_.d.ts').LastModified_date__params_T}params
 * @return {Date}
 */
export function LastModified_date_(params) {
	const { LastModified } = params
	return new Date(Date.parse(LastModified))
}
export { LastModified_date_ as _LastModified_date, LastModified_date_ as _date__LastModified__Object, }
