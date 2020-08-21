import React, { Fragment, useState } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import convertUnixToDatetime from "../helpers/convertUnixToDatetime";
import formatTemperature from "../helpers/formatTemperature";

import weather from "../data/weather.json";

const IndexPage = () => {
  const { city, list } = weather;

  const [showMore, setShowMore] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Weather in {city.name}</h1>
      <ul>
        {list.map(item => {
          const { dt, humidity, sunrise, sunset, temp } = item;

          return (
            <div key={dt} style={{ border: `1px solid black` }}>
              <li>{convertUnixToDatetime(dt)}</li>
              <li>
                {item.weather.map(({ description, icon, id }, key) => (
                  <Fragment key={key}>
                    <img
                      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt=""
                    />
                    <div>Description: {description}</div>
                  </Fragment>
                ))}
              </li>
              <li>High: {formatTemperature(temp.max)}</li>
              <li>Low: {formatTemperature(temp.min)}</li>
              <span onClick={() => setShowMore(!showMore)}>Click more...</span>
              {showMore && (
                <ul>
                  <li>Humidity: {humidity.toFixed(2)}%</li>
                  <li>Sunrise: {convertUnixToDatetime(sunrise)}</li>
                  <li>Sunset: {convertUnixToDatetime(sunset)}</li>
                </ul>
              )}
            </div>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
