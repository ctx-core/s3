/**
 * Returns the Date of LastModified
 */
export function _LastModified_date({ LastModified }) {
	return new Date(Date.parse(LastModified))
}
export const _date__LastModified__Object = _LastModified_date
