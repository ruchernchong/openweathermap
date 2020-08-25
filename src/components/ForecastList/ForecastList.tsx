import * as React from "react";

import WeatherCard from "../WeatherCard";

interface Temp {
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

interface List {
  dt: number;
  humidity: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  weather: Weather[];
}

interface Props {
  list: List[];
}

export const ForecastList: React.FC<Props> = ({ list }) => {
  return (
    <div data-testid="forecast-list">
      {list.map(({ dt, humidity, sunrise, sunset, temp, weather }) => (
        <WeatherCard
          key={dt}
          dt={dt}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          temp={temp}
          weather={weather}
        />
      ))}
    </div>
  );
};

export default ForecastList;
