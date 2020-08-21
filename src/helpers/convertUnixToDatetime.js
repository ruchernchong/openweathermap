import { fromUnixTime } from "date-fns";

/**
 * Convert the timestamp to readable date and time
 *
 * @param {number} timestamp - Unix timestamp
 * @returns {string}
 */
const convertUnixToDatetime = timestamp => {
  return fromUnixTime(timestamp).toString();
};

export default convertUnixToDatetime;
