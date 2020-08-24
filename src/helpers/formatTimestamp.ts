import { format, fromUnixTime } from "date-fns";

/**
 * Format the timestamp to date
 *
 * @param timestamp - Unix timestamp
 * @returns
 */
const formatDate = (timestamp: number): string =>
  format(fromUnixTime(timestamp), "(EEE) dd MMM");

/**
 * Format the timestamp to time
 *
 * @param timestamp - Unix timestamp
 * @returns
 */
const formatTime = (timestamp: number): string =>
  format(fromUnixTime(timestamp), "h:mm a");

export { formatDate, formatTime };
