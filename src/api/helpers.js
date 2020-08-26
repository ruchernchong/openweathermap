import queryString from "query-string";

export const baseUrl = `https://api.openweathermap.org/data/2.5`;

/**
 *
 * @param {string} url
 * @param {Object} [params]
 * @returns {Promise<T>}
 */
export const apiFetch = (url, params = {}) => {
  params = {
    ...params,
    units: `metric`,
    appid: process.env.OPENWEATHERMAP_APPID
  };

  url += `?${queryString.stringify(params)}`;

  return fetch(url, params).then(res => res.json());
};
