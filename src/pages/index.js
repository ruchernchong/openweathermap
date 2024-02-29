import React, { Fragment, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Switch,
  Typography
} from "@material-ui/core";
import { colours } from "../theme";

import WeatherChart from "../components/WeatherChart";
import ForecastList from "../components/ForecastList";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import chartActions from "../actions/chartActions";
import forecastActions from "../actions/forecastActions";
import weatherActions from "../actions/weatherActions";

import { formatDate, formatTime } from "../helpers/formatTimestamp";
import noop from "../helpers/noop";

export const IndexPage = ({
  cityName,
  coord,
  daily = [],
  datasets = [],
  forecast,
  getCurrentWeather = noop,
  getForecast = noop,
  hourly = [],
  labels = [],
  setDatasets = noop,
  setLabels = noop
}) => {
  const [isDailyForecast, setIsDailyForecast] = useState(true);

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

  const forecastDays = useMemo(() => daily.slice(0, 7), [daily]);
  const forecastWithTempRange = useMemo(
    () =>
      forecastDays.map(({ dt, temp, weather }) => {
        let { max, min } = temp;
        max = max.toFixed();
        min = min.toFixed();
        // Select the first result of the array as the primary value according to OpenWeatherMap API Docs
        const description = weather[0].description;
        const formattedDateTime = formatDate(dt);

        return { max, min, description, formattedDateTime };
      }),
    [forecastDays]
  );

  useEffect(() => {
    // Set the config for common datasets options
    const datasetsOptions = {
      fill: false,
      pointBorderWidth: 3
    };

    const rangeHigh = forecastWithTempRange.map(({ max }) => max);
    const rangeLow = forecastWithTempRange.map(({ min }) => min);
    const dataDescription = forecastWithTempRange.map(
      ({ description }) => description
    );
    // Flatten the array of objects to show only the dates as labels
    const dataLabels = forecastWithTempRange.map(
      ({ formattedDateTime }) => formattedDateTime
    );

    const isChartDataReady =
      rangeHigh.length > 0 &&
      rangeLow.length > 0 &&
      dataDescription.length > 0 &&
      dataLabels.length > 0;

    if (isChartDataReady) {
      if (isDailyForecast) {
        setDatasets(
          // Set the config for each dataset options
          [
            {
              ...datasetsOptions,
              backgroundColor: colours.hot,
              borderColor: colours.hot,
              data: rangeHigh,
              description: dataDescription,
              label: `High (°C)`
            },
            {
              ...datasetsOptions,
              backgroundColor: colours.cold,
              borderColor: colours.cold,
              data: rangeLow,
              description: dataDescription,
              label: `Low (°C)`
            }
          ]
        );
        setLabels(dataLabels);
      } else {
        setDatasets([
          {
            ...datasetsOptions,
            backgroundColor: colours.black,
            borderColor: colours.black,
            data: hourly.map(({ temp }) => temp.toFixed(0)),
            label: `Temp (°C)`
          }
        ]);
        setLabels(
          hourly.map(({ dt }) => [formatDate(dt), formatTime(dt)].join(" "))
        );
      }
    }
  }, [
    forecastDays,
    forecastWithTempRange,
    hourly,
    isDailyForecast,
    setDatasets,
    setLabels
  ]);

  const handleSwitchChange = e => {
    setIsDailyForecast(e.target.checked);
  };

  const loading = forecast.loading;

  return (
    <Layout>
      <Seo title="Home" />
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
              isDailyForecast={isDailyForecast}
              labels={labels}
              title={{
                display: true,
                text: `Weather forecast in ${cityName}`
              }}
            />
          </Box>
          {daily.length > 0 && hourly.length > 0 && (
            <Box marginBottom={2}>
              <Grid
                component="label"
                container
                justify="center"
                alignItems="center"
              >
                <Grid item>Hourly</Grid>
                <Grid item>
                  <Switch
                    checked={isDailyForecast}
                    onChange={handleSwitchChange}
                    name="forecastType"
                  />
                </Grid>
                <Grid item>Daily</Grid>
              </Grid>
            </Box>
          )}
          <Box marginBottom={8}>
            <ForecastList
              daily={daily}
              hourly={hourly}
              isDailyForecast={isDailyForecast}
              data-testid="forecast-list"
            />
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
  datasets: PropTypes.array,
  forecast: PropTypes.object,
  getCurrentWeather: PropTypes.func,
  hourly: PropTypes.array,
  labels: PropTypes.array
};

/* istanbul ignore next */
const mapStateToProps = state => {
  const { chart, forecast, weather } = state;

  return {
    cityName: weather.data.name,
    coord: weather.data.coord,
    daily: forecast.data.daily,
    datasets: chart.datasets,
    forecast: forecast,
    hourly: forecast.data.hourly,
    labels: chart.labels
  };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => {
  const { setDatasets, setLabels } = chartActions;
  const { getForecast } = forecastActions;
  const { getCurrentWeather } = weatherActions;

  return {
    getCurrentWeather: () => dispatch(getCurrentWeather()),
    getForecast: options => dispatch(getForecast(options)),
    setDatasets: datasets => dispatch(setDatasets(datasets)),
    setLabels: labels => dispatch(setLabels(labels))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
