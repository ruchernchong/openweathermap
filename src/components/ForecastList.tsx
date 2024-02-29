import * as React from "react";
import { useCallback } from "react";
import { WeatherCard } from "./WeatherCard";

interface TempRange {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface Weather {
  id: number;
  description: string;
  icon: string;
  main: string;
}

interface Daily {
  dt: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: TempRange;
  weather: Weather[];
}

interface Hourly {
  dt: number;
  humidity: number;
  temp: number;
  weather: Weather[];
}

interface Props {
  daily: Daily[];
  hourly: Hourly[];
  isDailyForecast: boolean;
}

export const ForecastList: React.FC<Props> = ({
  daily,
  hourly,
  isDailyForecast
}) => {
  const renderForecast = useCallback(() => {
    if (isDailyForecast) {
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
    } else {
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
    }
  }, [isDailyForecast]);

  return <div data-testid="forecast-list">{renderForecast()}</div>;
};
