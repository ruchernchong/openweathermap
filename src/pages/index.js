import React, { Fragment, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Backdrop,
  Box,
  CircularProgress,
  Grid,
  Switch,
  Typography
} from "@material-ui/core";
import { colours } from "../theme";
import { WeatherChart } from "../components/WeatherChart";
import { ForecastList } from "../components/ForecastList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { setDatasets, setLabels } from "../actions/chartActions";
import { getForecast } from "../actions/forecastActions";
import { getCurrentWeather } from "../actions/weatherActions";
import { formatDate, formatTime } from "../utils";

export const IndexPage = () => {
  const dispatch = useDispatch();
  const { cityName, coord, daily, hourly, datasets, labels, loading } =
    useSelector(state => ({
      cityName: state.weather.data.name,
      coord: state.weather.data.coord,
      daily: state.forecast.data.daily,
      hourly: state.forecast.data.hourly,
      datasets: state.chart.datasets,
      labels: state.chart.labels,
      loading: state.forecast.loading
    }));

  const [isDailyForecast, setIsDailyForecast] = useState(true);

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  useEffect(() => {
    if (coord) {
      const { lat, lon } = coord;

      getForecast({ lat, lon });
    }
  }, [coord, dispatch]);

  const forecastDays = useMemo(() => daily.slice(0, 7), [daily]);
  const forecastWithTempRange = useMemo(
    () =>
      forecastDays.map(({ dt, temp, weather }) => ({
        max: temp.max.toFixed(),
        min: temp.min.toFixed(),
        description: weather[0].description,
        formattedDateTime: formatDate(dt)
      })),
    [forecastDays]
  );

  useEffect(() => {
    // Set the config for common datasets options
    const datasetsOptions = { fill: false, pointBorderWidth: 3 };

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
        dispatch(
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
          )
        );
        dispatch(setLabels(dataLabels));
      } else {
        dispatch(
          setDatasets([
            {
              ...datasetsOptions,
              backgroundColor: colours.black,
              borderColor: colours.black,
              data: hourly.map(({ temp }) => temp.toFixed(0)),
              label: `Temp (°C)`
            }
          ])
        );
        dispatch(
          setLabels(
            hourly.map(({ dt }) => [formatDate(dt), formatTime(dt)].join(" "))
          )
        );
      }
    }
  }, [forecastDays, forecastWithTempRange, hourly, isDailyForecast, dispatch]);

  const handleSwitchChange = e => setIsDailyForecast(e.target.checked);

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
              <Grid component="label" container alignItems="center">
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

export default IndexPage;
