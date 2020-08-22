import React from "react";
import PropTypes from "prop-types";

import WeatherCard from "../WeatherCard";

export const ForecastList = ({ list }) => {
  return list.map(({ dt, humidity, sunrise, sunset, temp, weather }) => (
    <div key={dt} style={{ marginBottom: 64 }}>
      <WeatherCard
        dt={dt}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        weather={weather}
      />
    </div>
  ));
};

ForecastList.propTypes = {
  list: PropTypes.array
};

export default ForecastList;
