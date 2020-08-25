import { apiFetch } from "./helpers";

import { ForecastOptions } from "../types/forecast.types";

const onecall = async ({ lat, lon, exclude = [] }: ForecastOptions) =>
  apiFetch(`/onecall`, {
    lat,
    lon,
    exclude
  }).then(res => res);

export default onecall;
