import React from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  createMuiTheme,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { formatDate, formatTime } from "../../helpers/formatTimestamp";
import formatTemperature from "../../helpers/formatTemperature";
import formatDecimal from "../../helpers/formatDecimal";

const theme = createMuiTheme();

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

const WeatherCard = ({ dt, humidity, sunrise, sunset, temp, weather }) => {
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
                {formatDate(dt)}
              </Info>
              <Info item xs={12} md>
                High: {formatTemperature(temp.max)}
              </Info>
              <Info item xs={12} md>
                Low: {formatTemperature(temp.min)}
              </Info>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Info item xs={12}>{`Humidity: ${formatDecimal(humidity, 0)}%`}</Info>
          <Info item xs={12}>
            Sunrise: {formatTime(sunrise)}
          </Info>
          <Info item xs={12}>
            Sunset: {formatTime(sunset)}
          </Info>
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
  temp: PropTypes.object,
  weather: PropTypes.arrayOf(PropTypes.object)
};

export default WeatherCard;
