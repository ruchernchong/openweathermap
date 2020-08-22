import React, { Fragment, useState } from "react";
import { format, fromUnixTime } from "date-fns";
import { colours } from "../theme";

import ChartComponent from "../components/ChartComponent";
import Layout from "../components/layout";
import SEO from "../components/seo";

import convertUnixToDatetime from "../helpers/convertUnixToDatetime";
import formatTemperature from "../helpers/formatTemperature";

import weather from "../data/weather.json";

export const IndexPage = () => {
  const { city, list } = weather;

  const [showMore, setShowMore] = useState(false);

  let tempLow = [],
    tempHigh = [];

  const forecastDays = list.slice(0, 7);

  const labels = forecastDays.map(({ dt }) =>
    format(fromUnixTime(dt), "(EEE) dd MMM")
  );

  forecastDays.forEach(({ temp }) => {
    tempLow.push(temp.min);
    tempHigh.push(temp.max);
  });

  const datasetOptions = {
    fill: false,
    pointBorderWidth: 5
  };

  const datasets = [
    {
      ...datasetOptions,
      backgroundColor: colours.cold,
      borderColor: colours.cold,
      data: tempLow,
      label: `Low (°C)`
    },
    {
      ...datasetOptions,
      backgroundColor: colours.hot,
      borderColor: colours.hot,
      data: tempHigh,
      label: `High (°C)`
    }
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Weather in {city.name}</h1>
      <div style={{ marginBottom: `64px` }}>
        <ChartComponent
          datasets={datasets}
          labels={labels}
          title={{
            display: true,
            text: `Weather forecast in ${city.name}`
          }}
        />
      </div>
      <ul>
        {list.map(item => {
          const { dt, humidity, sunrise, sunset, temp } = item;

          return (
            <div key={dt} style={{ border: `1px solid black` }}>
              <li>{convertUnixToDatetime(dt).toString()}</li>
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
                  <li>Sunrise: {convertUnixToDatetime(sunrise).toString()}</li>
                  <li>Sunset: {convertUnixToDatetime(sunset).toString()}</li>
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
