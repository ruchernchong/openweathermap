import { apiFetch, baseUrl } from "./helpers";

const apiWeather = () =>
  apiFetch(`${baseUrl}/weather`, {
    q: `Singapore`
  }).then(res => res);

export default apiWeather;
