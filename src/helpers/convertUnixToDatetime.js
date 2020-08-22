import { fromUnixTime } from "date-fns";

/**
 * Convert the timestamp to readable date and time
 *
 * @param {number} timestamp - Unix timestamp
 * @returns {Date}
 */
const convertUnixToDatetime = timestamp => fromUnixTime(timestamp);

export default convertUnixToDatetime;
