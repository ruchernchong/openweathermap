import { apiFetch } from "./helpers";

const weather = async () => {
  return apiFetch(`/weather`, {
    q: `Singapore`
  }).then(res => res);
};

export default weather;
