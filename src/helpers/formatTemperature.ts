/**
 * Format a given value to temperature with its respective units
 *
 * @param value - Value of the temperature
 * @returns
 */
const formatTemperature = (value: number): string => `${value.toFixed(0)}°C`;

export default formatTemperature;
