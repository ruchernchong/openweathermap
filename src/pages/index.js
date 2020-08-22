import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { format } from "date-fns";
import { colours } from "../theme";

import ChartComponent from "../components/ChartComponent";
import ForecastList from "../components/ForecastList";
import Layout from "../components/layout";
import SEO from "../components/seo";

import convertUnixToDatetime from "../helpers/convertUnixToDatetime";

export const IndexPage = ({ data }) => {
  const { dataJson } = data;
  const { city, list } = dataJson;

  const tempHigh = [],
    tempLow = [];

  // Truncate the data to the next 7 days of forecast
  const forecastDays = list.slice(0, 7);

  const labels = forecastDays.map(({ dt }) =>
    format(convertUnixToDatetime(dt), "(EEE) dd MMM")
  );

  forecastDays.forEach(({ temp, weather }) => {
    // Select the first result of the array as the primary value according to OpenWeatherMap API Docs
    const description = weather[0].main;

    tempHigh.push({
      temp: temp.max,
      description
    });
    tempLow.push({
      temp: temp.min,
      description
    });
  });

  // Set the config for common datasets options
  const datasetsOptions = {
    fill: false,
    pointBorderWidth: 5
  };

  // Set the config for each dataset options
  const datasets = [
    {
      ...datasetsOptions,
      backgroundColor: colours.cold,
      borderColor: colours.cold,
      data: tempLow.map(({ temp }) => temp),
      description: tempLow.map(({ description }) => description),
      label: `Low (°C)`
    },
    {
      ...datasetsOptions,
      backgroundColor: colours.hot,
      borderColor: colours.hot,
      data: tempHigh.map(({ temp }) => temp),
      description: tempHigh.map(({ description }) => description),
      label: `High (°C)`
    }
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Weather in {city.name}</h1>
      <div style={{ marginBottom: 64 }}>
        <ChartComponent
          datasets={datasets}
          labels={labels}
          title={{
            display: true,
            text: `Weather forecast in ${city.name}`
          }}
        />
      </div>
      <ForecastList list={list} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;

export const query = graphql`
  {
    dataJson {
      city {
        id
        coord {
          lon
          lat
        }
        country
        name
        population
        timezone
      }
      cnt
      cod
      id
      list {
        dt
        sunrise
        sunset
        pressure
        humidity
        speed
        deg
        clouds
        rain
        feels_like {
          day
          night
          eve
          morn
        }
        temp {
          day
          min
          max
          night
          eve
          morn
        }
        weather {
          id
          description
          icon
          main
        }
      }
      message
    }
  }
`;
