import { apiFetch, baseUrl } from "./helpers";

import { ForecastOptions } from "../types/forecast.types";

const onecall = async ({ lat, lon, exclude = [] }: ForecastOptions) =>
  apiFetch(`${baseUrl}/onecall`, {
    lat,
    lon,
    exclude
  });

export default onecall;
