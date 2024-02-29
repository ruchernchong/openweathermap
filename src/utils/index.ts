import { format, fromUnixTime } from "date-fns";

/**
 * Format a number to the given number of decimal places
 *
 * @param num - Value of the number
 * @param decimal - Number of decimal places
 * @returns Formatted number with its respective number of decimal places
 */
export const formatDecimal = (
  num: number | string,
  decimal: number = 2
): string => Number(num).toFixed(decimal);

/**
 * Format a given value to temperature with its respective units
 *
 * @param value - Value of the temperature
 * @returns
 */
export const formatTemperature = (value: number): string =>
  `${value.toFixed(0)}°C`;

/**
 * Format the timestamp to date
 *
 * @param timestamp - Unix timestamp
 * @returns
 */
export const formatDate = (timestamp: number): string =>
  format(fromUnixTime(timestamp), "EEE, dd MMM");

/**
 * Format the timestamp to time
 *
 * @param timestamp - Unix timestamp
 * @returns
 */
export const formatTime = (timestamp: number): string =>
  format(fromUnixTime(timestamp), "h:mm a");
