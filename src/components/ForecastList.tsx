import * as React from "react";
import { WeatherCard } from "./WeatherCard";
import { Daily, Hourly } from "../types/forecast.types";

interface ForecastListProps {
  daily: Daily[];
  hourly: Hourly[];
  isDailyForecast: boolean;
}

export const ForecastList = ({
  daily,
  hourly,
  isDailyForecast
}: ForecastListProps) => {
  const DailyForecast = () => {
    return daily.map(({ dt, humidity, sunrise, sunset, temp, weather }) => (
      <WeatherCard
        key={dt}
        dt={dt}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        tempRange={temp}
        weather={weather}
        isDailyForecast={isDailyForecast}
      />
    ));
  };

  const HourlyForecast = () => {
    return hourly.map(({ dt, humidity, temp, weather }) => (
      <WeatherCard
        key={dt}
        dt={dt}
        humidity={humidity}
        temp={temp}
        weather={weather}
        isDailyForecast={isDailyForecast}
      />
    ));
  };

  return (
    <div data-testid="forecast-list">
      {isDailyForecast ? <DailyForecast /> : <HourlyForecast />}
    </div>
  );
};
