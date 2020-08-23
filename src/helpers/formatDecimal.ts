/**
 * Format a number to the given number of decimal places
 *
 * @param num - Value of the number
 * @param decimal - Number of decimal places
 * @returns Formatted number with its respective number of decimal places
 */
const formatDecimal = (num: number | string, decimal: number = 2): string =>
  Number(num).toFixed(decimal);

export default formatDecimal;
