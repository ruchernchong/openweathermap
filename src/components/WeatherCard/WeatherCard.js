import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import convertUnixToDatetime from "../../helpers/convertUnixToDatetime";
import formatTemperature from "../../helpers/formatTemperature";

const WeatherCard = ({ dt, humidity, sunrise, sunset, temp, weather }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h4>{convertUnixToDatetime(dt).toString()}</h4>
      {weather.map(({ description, icon, id }, key) => (
        <Fragment key={key}>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <div>Description: {description}</div>
        </Fragment>
      ))}
      <div>High: {formatTemperature(temp.max)}</div>
      <div>Low: {formatTemperature(temp.min)}</div>
      <button onClick={() => setShowMore(!showMore)}>Click more...</button>
      {showMore && (
        <Fragment>
          <div>Humidity: {humidity.toFixed(2)}%</div>
          <div>Sunrise: {convertUnixToDatetime(sunrise).toString()}</div>
          <div>Sunset: {convertUnixToDatetime(sunset).toString()}</div>
        </Fragment>
      )}
    </div>
  );
};

WeatherCard.propTypes = {
  dt: PropTypes.number,
  humidity: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  temp: PropTypes.object,
  weather: PropTypes.arrayOf(PropTypes.object)
};

export default WeatherCard;
