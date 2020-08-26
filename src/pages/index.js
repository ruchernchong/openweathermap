import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Backdrop, Box, CircularProgress, Typography } from "@material-ui/core";
import { colours } from "../theme";

import WeatherChart from "../components/WeatherChart";
import ForecastList from "../components/ForecastList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import forecastActions from "../actions/forecastActions";
import weatherActions from "../actions/weatherActions";

import { formatDate } from "../helpers/formatTimestamp";
import noop from "../helpers/noop";

export const IndexPage = ({
  cityName,
  coord,
  daily = [],
  forecast,
  getCurrentWeather = noop,
  getForecast = noop
}) => {
  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  useEffect(() => {
    if (coord) {
      const { lat, lon } = coord;

      const exclude = [`minutely`];

      getForecast({ lat, lon, exclude });
    }
  }, [coord, getForecast]);

  const tempHigh = [],
    tempLow = [];

  // Truncate the data to the next 7 days of forecast
  const forecastDays = daily.slice(0, 7);

  // Flatten the array of objects to show only the dates
  const labels = forecastDays.map(({ dt }) => formatDate(dt));

  // Loop through each of the temperature ranges and store it in their respective datasets
  forecastDays.forEach(({ temp, weather }) => {
    // Select the first result of the array as the primary value according to OpenWeatherMap API Docs
    const description = weather[0].description;

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
      data: tempLow.map(({ temp }) => temp.toFixed(0)),
      description: tempLow.map(({ description }) => description),
      label: `Low (°C)`
    },
    {
      ...datasetsOptions,
      backgroundColor: colours.hot,
      borderColor: colours.hot,
      data: tempHigh.map(({ temp }) => temp.toFixed(0)),
      description: tempHigh.map(({ description }) => description),
      label: `High (°C)`
    }
  ];

  const loading = forecast.loading;

  return (
    <Layout>
      <SEO title="Home" />
      {loading ? (
        <Backdrop open={true} data-testid="loader">
          <CircularProgress />
        </Backdrop>
      ) : (
        <Fragment>
          <Typography align="center" component="h2" variant="h3" gutterBottom>
            {cityName}
          </Typography>
          <Box marginBottom={8}>
            <WeatherChart
              datasets={datasets}
              labels={labels}
              title={{
                display: true,
                text: `Weather forecast in ${cityName}`
              }}
            />
          </Box>
          <Box marginBottom={8}>
            <ForecastList list={daily} data-testid="forecast-list" />
          </Box>
        </Fragment>
      )}
    </Layout>
  );
};

IndexPage.propTypes = {
  cityName: PropTypes.string,
  coord: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  daily: PropTypes.array,
  forecast: PropTypes.object,
  getCurrentWeather: PropTypes.func
};

/* istanbul ignore next */
const mapStateToProps = state => {
  const { forecast, weather } = state;

  return {
    cityName: weather.data.name,
    coord: weather.data.coord,
    daily: forecast.data.daily,
    forecast: forecast
  };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
  const { getForecast } = forecastActions;
  const { getCurrentWeather } = weatherActions;

  return {
    getCurrentWeather: () => dispatch(getCurrentWeather()),
    getForecast: options => dispatch(getForecast(options))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
