/**
 * Returns the Date of LastModified
 */
export function _LastModified_date({ LastModified }:_LastModified_date_params_type) {
	return new Date(Date.parse(LastModified))
}
export interface _LastModified_date_params_type {
	LastModified:string
}
export {
	_LastModified_date as _date__LastModified__Object
}
