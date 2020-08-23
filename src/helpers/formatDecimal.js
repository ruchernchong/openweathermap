/**
 * Format a number to the given number of decimal places
 *
 * @param {number|string} num - The value of the number
 * @param {number=} [decimal] - Number of decimal places
 * @returns {string} - The formatted number with its respective number of decimal places
 */
const formatDecimal = (num, decimal = 2) => Number(num).toFixed(decimal);

export default formatDecimal;
