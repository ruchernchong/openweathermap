import { apiFetch } from "./helpers";
import { BASE_URL } from "../config";
import { Weather } from "../types/weather.types";

export const apiWeather = (): Promise<Weather> =>
  apiFetch(`${BASE_URL}/2.5/weather`, { q: "Singapore" }).then(res => res);
