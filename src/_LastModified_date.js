/**
 * Returns the Date of LastModified
 */
export function _LastModified_date({ LastModified }) {
    return new Date(Date.parse(LastModified));
}
export { _LastModified_date as _date__LastModified__Object };
