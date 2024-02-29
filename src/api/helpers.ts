import queryString from "query-string";

export const apiFetch = <T extends Record<string, unknown>>(
  url: string,
  params: T = {} as T
) => {
  console.log("Test", process.env.OPENWEATHERMAP_APPID);
  const queryParams = {
    ...params,
    units: "metric",
    appid: process.env.OPENWEATHERMAP_APPID
  };

  const queryUrl = `${url}?${queryString.stringify(queryParams)}`;

  return fetch(queryUrl, params).then(res => res.json());
};
