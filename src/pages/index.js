import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Box as MuiBox, Typography, withStyles } from "@material-ui/core";
import { colours } from "../theme";

import WeatherChart from "../components/WeatherChart";
import ForecastList from "../components/ForecastList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { formatDate } from "../helpers/formatTimestamp";

const Box = withStyles({
  root: {
    width: `100%`,
    height: `100%`
  }
})(MuiBox);

export const IndexPage = ({ data }) => {
  const { dataJson } = data;
  const { city, list } = dataJson;

  const tempHigh = [],
    tempLow = [];

  // Truncate the data to the next 7 days of forecast
  const forecastDays = list.slice(0, 7);

  // Flatten the array of objects to show only the dates
  const labels = forecastDays.map(({ dt }) => formatDate(dt));

  // Loop through each of the temperature ranges and store it in their respective datasets
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
      <Typography align="center" component="h2" variant="h3" gutterBottom>
        {city.name}
      </Typography>
      <Box marginBottom={8}>
        <WeatherChart
          datasets={datasets}
          labels={labels}
          title={{
            display: true,
            text: `Weather forecast in ${city.name}`
          }}
        />
      </Box>
      <Box marginBottom={8}>
        <ForecastList list={list} />
      </Box>
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
