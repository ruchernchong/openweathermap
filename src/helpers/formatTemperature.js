/**
 * Format a given value to temperature with its respective units
 *
 * @param {number} value - Value of the temperature
 * @returns {string}
 */
const formatTemperature = value => {
  return `${value.toFixed(1)}°C`;
};

export default formatTemperature;
