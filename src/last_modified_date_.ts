/**
 * Returns the Date of LastModified
 */
export function LastModified_date_({ LastModified }:LastModified_date_params__I):Date {
	return new Date(Date.parse(LastModified))
}
export interface LastModified_date_params__I {
	LastModified:string
}
export {
	LastModified_date_ as _LastModified_date,
	LastModified_date_ as _date__LastModified__Object,
}
