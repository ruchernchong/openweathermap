import { apiFetch } from "./helpers";
import { BASE_URL } from "../config";
import { Forecast, ForecastOptions } from "../types/forecast.types";

export const apiForecast = ({
  lat,
  lon,
  exclude
}: ForecastOptions): Promise<Forecast> =>
  apiFetch(`${BASE_URL}/3.0/onecall`, { lat, lon, exclude }).then(res => res);
