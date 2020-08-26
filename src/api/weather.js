import { apiFetch, baseUrl } from "./helpers";

const weather = () =>
  apiFetch(`${baseUrl}/weather`, {
    q: `Singapore`
  }).then(res => res);

export default weather;
