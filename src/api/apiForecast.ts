import { apiFetch } from "./helpers";
import { BASE_URL } from "../config";
import { Forecast, ForecastOptions } from "../types/forecast.types";

export const apiForecast = ({ lat, lon }: ForecastOptions): Promise<Forecast> =>
  apiFetch(`${BASE_URL}/forecast`, { lat, lon }).then(res => res);
