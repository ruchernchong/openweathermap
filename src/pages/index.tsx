import React, {
  ChangeEvent,
  Fragment,
  useEffect,
  useMemo,
  useState
} from "react";
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
import { WeatherChart } from "../components/WeatherChart";
import { ForecastList } from "../components/ForecastList";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import chartActions from "../actions/chartActions";
import forecastActions from "../actions/forecastActions";
import weatherActions from "../actions/weatherActions";
import { formatDate, formatTime } from "../utils";
import { ChartState } from "../types/chart.types";
import {
  Forecast,
  ForecastOptions,
  ForecastState
} from "../types/forecast.types";
import { WeatherState } from "../types/weather.types";

interface IndexPageProps {
  chart: ChartState;
  forecast: ForecastState;
  weather: WeatherState;
  getCurrentWeather: () => void;
  getForecast: (options: ForecastOptions) => Forecast;
  setDatasets: <T extends object>(datasets: T[]) => void;
  setLabels: (labels: string[]) => void;
}

export const IndexPage = ({
  chart,
  forecast,
  weather,
  getCurrentWeather,
  getForecast,
  setDatasets,
  setLabels
}: IndexPageProps) => {
  const { datasets, labels } = chart;
  const daily = forecast.data?.daily;
  const hourly = forecast.data?.hourly;
  const cityName = weather.data?.cityName;
  const coord = weather.data?.coord;
  const [isDailyForecast, setIsDailyForecast] = useState<boolean>(true);

  useEffect(() => {
    getCurrentWeather();
  }, [getCurrentWeather]);

  useEffect(() => {
    if (coord) {
      getForecast({
        lat: coord.lat,
        lon: coord.lon,
        exclude: ["minutely"]
      });
    }
  }, [coord]);

  const forecastDays = useMemo(() => daily?.slice(0, 7), [daily]);
  const forecastWithTempRange = useMemo(
    () =>
      forecastDays?.map(({ dt, temp, weather }) => ({
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

    let rangeHigh: string[] = [],
      rangeLow: string[] = [],
      dataDescription: string[] = [],
      dataLabels: string[] = [];

    if (forecastWithTempRange) {
      rangeHigh = forecastWithTempRange.map(({ max }) => max);
      rangeLow = forecastWithTempRange.map(({ min }) => min);
      dataDescription = forecastWithTempRange.map(
        ({ description }) => description
      );
      // Flatten the array of objects to show only the dates as labels
      dataLabels = forecastWithTempRange.map(
        ({ formattedDateTime }) => formattedDateTime
      );
    }

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

  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setIsDailyForecast(e.target.checked);

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
              isDailyForecast={isDailyForecast}
              labels={labels}
              title={{
                display: true,
                text: `Weather forecast in ${cityName}`
              }}
            />
          </Box>
          {daily?.length > 0 && hourly.length > 0 && (
            <Box marginBottom={2}>
              <Grid
                component="label"
                container
                justifyContent="center"
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
          {daily && (
            <Box marginBottom={8}>
              <ForecastList
                daily={daily}
                hourly={hourly}
                isDailyForecast={isDailyForecast}
                data-testid="forecast-list"
              />
            </Box>
          )}
        </Fragment>
      )}
    </Layout>
  );
};

const mapStateToProps = ({ chart, forecast, weather }) => ({
  chart,
  forecast,
  weather
});

const mapDispatchToProps = dispatch => {
  const { setDatasets, setLabels } = chartActions;
  const { getForecast } = forecastActions;
  const { getCurrentWeather } = weatherActions;

  return {
    getCurrentWeather: () => dispatch(getCurrentWeather()),
    getForecast: options => dispatch(getForecast(options)),
    setDatasets: <T extends object>(datasets: T[]) =>
      dispatch(setDatasets(datasets)),
    setLabels: (labels: string[]) => dispatch(setLabels(labels))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
