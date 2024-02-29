import queryString from "query-string";

export const apiFetch = <T extends Record<string, unknown>>(
  url: string,
  params: T = {} as T
) => {
  const queryParams = {
    ...params,
    units: "metric",
    appid: process.env.GATSBY_OPENWEATHERMAP_APPID
  };

  const queryUrl = `${url}?${queryString.stringify(queryParams)}`;

  return fetch(queryUrl, params).then(res => res.json());
};
