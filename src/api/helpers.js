export const baseUrl = `https://api.openweathermap.org/data/2.5`;

/**
 *
 * @param {string} url
 * @param {Object} [params]
 * @returns {Promise<T>}
 */
export const apiFetch = async (url, params = {}) => {
  const path = new URL(`${baseUrl.concat(url)}`);
  path.search = new URLSearchParams({
    ...params,
    units: `metric`,
    appid: process.env.OPENWEATHERMAP_APPID
  }).toString();

  return fetch(path)
    .then(res => res.json())
    .catch(err => err);
};
