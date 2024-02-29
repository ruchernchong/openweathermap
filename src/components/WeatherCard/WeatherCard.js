import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  createTheme,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import {
  formatDate,
  formatDecimal,
  formatTemperature,
  formatTime
} from "../../utils";

const theme = createTheme();

const Description = withStyles({
  root: {
    textTransform: "capitalize"
  }
})(Typography);

const Info = withStyles({
  root: {
    padding: theme.spacing(1, 0)
  }
})(Grid);

const WeatherIcon = withStyles({
  root: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(2)
  }
})(Avatar);

const WeatherCard = ({
  dt,
  humidity,
  sunrise,
  sunset,
  temp,
  tempRange,
  weather,
  isDailyForecast
}) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={4}>
            {weather.map(({ description, icon, id }, key) => (
              <Grid key={key} container alignItems="center">
                <Grid item>
                  <WeatherIcon
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={`icon-${icon}`}
                  />
                </Grid>
                <Grid item>
                  <Description>{description}</Description>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md>
            <Grid container alignItems="center">
              <Info item xs={12} md>
                {isDailyForecast
                  ? formatDate(dt)
                  : [formatDate(dt), formatTime(dt)].join(" ")}
              </Info>
              {tempRange ? (
                <Fragment>
                  <Info item xs={12} md>
                    High: {formatTemperature(tempRange.max)}
                  </Info>
                  <Info item xs={12} md>
                    Low: {formatTemperature(tempRange.min)}
                  </Info>
                </Fragment>
              ) : (
                <Info item xs={12} md>
                  Temp: {formatTemperature(temp)}
                </Info>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Info item xs={12}>{`Humidity: ${formatDecimal(humidity, 0)}%`}</Info>
          {sunrise && sunset && (
            <Fragment>
              <Info item xs={12}>
                Sunrise: {formatTime(sunrise)}
              </Info>
              <Info item xs={12}>
                Sunset: {formatTime(sunset)}
              </Info>
            </Fragment>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

WeatherCard.propTypes = {
  dt: PropTypes.number,
  humidity: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  temp: PropTypes.number,
  tempRange: PropTypes.object,
  weather: PropTypes.arrayOf(PropTypes.object),
  isDailyForecast: PropTypes.bool
};

export default WeatherCard;
