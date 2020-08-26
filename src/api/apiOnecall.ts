import { apiFetch, baseUrl } from "./helpers";

import { ForecastOptions } from "../types/forecast.types";

const apiOnecall = async ({ lat, lon, exclude = [] }: ForecastOptions) =>
  apiFetch(`${baseUrl}/onecall`, {
    lat,
    lon,
    exclude
  });

export default apiOnecall;
