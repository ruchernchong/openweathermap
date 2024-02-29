import { apiFetch } from "./helpers";
import { BASE_URL } from "../config";
import { Forecast, ForecastOptions } from "../types/forecast.types";

export const apiOnecall = ({
  lat,
  lon,
  exclude = []
}: ForecastOptions): Promise<Forecast> =>
  apiFetch(`${BASE_URL}/onecall`, {
    lat,
    lon,
    exclude
  });
