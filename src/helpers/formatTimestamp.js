import { format, fromUnixTime } from "date-fns";

/**
 * Format the timestamp to date
 *
 * @param {number} timestamp - Unix timestamp
 * @returns {string}
 */
const formatDate = timestamp => format(fromUnixTime(timestamp), "(EEE) dd MMM");

/**
 * Format the timestamp to time
 *
 * @param {number} timestamp - Unix timestamp
 * @returns {string}
 */
const formatTime = timestamp => format(fromUnixTime(timestamp), "h:mm a");

export { formatDate, formatTime };
