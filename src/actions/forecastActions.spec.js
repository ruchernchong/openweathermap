import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getForecast } from "./forecastActions";

import {
  SET_FORECAST_ERROR,
  SET_FORECAST_LOADING,
  SET_FORECAST_SUCCESS
} from "../types/forecast.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = {
  lat: 1.35,
  lon: 103.82,
  timezone: "Asia/Singapore",
  timezone_offset: 28800,
  current: {
    dt: 1598338116,
    sunrise: 1598310157,
    sunset: 1598353885,
    temp: 301.05,
    feels_like: 303.32,
    pressure: 1009,
    humidity: 83,
    dew_point: 297.89,
    uvi: 13.35,
    clouds: 40,
    visibility: 10000,
    wind_speed: 5.7,
    wind_deg: 170,
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d"
      }
    ]
  },
  hourly: [
    {
      dt: 1598335200,
      temp: 301.05,
      feels_like: 303.48,
      pressure: 1009,
      humidity: 83,
      dew_point: 297.89,
      clouds: 40,
      visibility: 10000,
      wind_speed: 5.47,
      wind_deg: 153,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.98,
      rain: {
        "1h": 0.38
      }
    },
    {
      dt: 1598338800,
      temp: 301.77,
      feels_like: 303.69,
      pressure: 1009,
      humidity: 75,
      dew_point: 296.9,
      clouds: 60,
      visibility: 10000,
      wind_speed: 5.35,
      wind_deg: 153,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      pop: 0.81
    },
    {
      dt: 1598342400,
      temp: 302.23,
      feels_like: 304.04,
      pressure: 1008,
      humidity: 71,
      dew_point: 296.43,
      clouds: 65,
      visibility: 10000,
      wind_speed: 5.12,
      wind_deg: 154,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      pop: 0.76
    },
    {
      dt: 1598346000,
      temp: 302.09,
      feels_like: 303.79,
      pressure: 1008,
      humidity: 70,
      dew_point: 296.07,
      clouds: 60,
      visibility: 10000,
      wind_speed: 4.98,
      wind_deg: 158,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      pop: 0.8
    },
    {
      dt: 1598349600,
      temp: 301.75,
      feels_like: 303.82,
      pressure: 1008,
      humidity: 72,
      dew_point: 296.21,
      clouds: 67,
      visibility: 10000,
      wind_speed: 4.57,
      wind_deg: 161,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.8,
      rain: {
        "1h": 0.55
      }
    },
    {
      dt: 1598353200,
      temp: 301.15,
      feels_like: 303.83,
      pressure: 1008,
      humidity: 76,
      dew_point: 296.54,
      clouds: 74,
      visibility: 10000,
      wind_speed: 3.95,
      wind_deg: 160,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.84,
      rain: {
        "1h": 0.3
      }
    },
    {
      dt: 1598356800,
      temp: 300.83,
      feels_like: 303.49,
      pressure: 1009,
      humidity: 76,
      dew_point: 296.37,
      clouds: 77,
      visibility: 10000,
      wind_speed: 3.73,
      wind_deg: 158,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.84,
      rain: {
        "1h": 0.16
      }
    },
    {
      dt: 1598360400,
      temp: 300.79,
      feels_like: 303.59,
      pressure: 1010,
      humidity: 76,
      dew_point: 296.28,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.5,
      wind_deg: 153,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.56
    },
    {
      dt: 1598364000,
      temp: 300.72,
      feels_like: 303.58,
      pressure: 1011,
      humidity: 76,
      dew_point: 296.16,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.36,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.61,
      rain: {
        "1h": 0.11
      }
    },
    {
      dt: 1598367600,
      temp: 300.63,
      feels_like: 303.96,
      pressure: 1011,
      humidity: 75,
      dew_point: 296.02,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.45,
      wind_deg: 139,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.69,
      rain: {
        "1h": 0.21
      }
    },
    {
      dt: 1598371200,
      temp: 300.63,
      feels_like: 304.15,
      pressure: 1011,
      humidity: 76,
      dew_point: 296.09,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.35,
      wind_deg: 144,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.73,
      rain: {
        "1h": 0.47
      }
    },
    {
      dt: 1598374800,
      temp: 300.29,
      feels_like: 303.71,
      pressure: 1010,
      humidity: 77,
      dew_point: 296.1,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.41,
      wind_deg: 128,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.82,
      rain: {
        "1h": 0.8
      }
    },
    {
      dt: 1598378400,
      temp: 300.11,
      feels_like: 303.65,
      pressure: 1010,
      humidity: 78,
      dew_point: 296.01,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.27,
      wind_deg: 127,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      pop: 0.81,
      rain: {
        "1h": 1.02
      }
    },
    {
      dt: 1598382000,
      temp: 300.1,
      feels_like: 303.6,
      pressure: 1009,
      humidity: 77,
      dew_point: 295.74,
      clouds: 95,
      visibility: 10000,
      wind_speed: 2.15,
      wind_deg: 139,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.57,
      rain: {
        "1h": 0.18
      }
    },
    {
      dt: 1598385600,
      temp: 300.04,
      feels_like: 303.4,
      pressure: 1008,
      humidity: 76,
      dew_point: 295.64,
      clouds: 97,
      visibility: 10000,
      wind_speed: 2.14,
      wind_deg: 131,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.76,
      rain: {
        "1h": 0.39
      }
    },
    {
      dt: 1598389200,
      temp: 300.05,
      feels_like: 303.41,
      pressure: 1008,
      humidity: 76,
      dew_point: 295.55,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.14,
      wind_deg: 135,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.71,
      rain: {
        "1h": 0.15
      }
    },
    {
      dt: 1598392800,
      temp: 300.05,
      feels_like: 303.25,
      pressure: 1009,
      humidity: 75,
      dew_point: 295.45,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.21,
      wind_deg: 126,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.69
    },
    {
      dt: 1598396400,
      temp: 300.03,
      feels_like: 303.17,
      pressure: 1009,
      humidity: 76,
      dew_point: 295.46,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.44,
      wind_deg: 120,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.66
    },
    {
      dt: 1598400000,
      temp: 300.62,
      feels_like: 303.88,
      pressure: 1010,
      humidity: 75,
      dew_point: 295.81,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.54,
      wind_deg: 122,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.67
    },
    {
      dt: 1598403600,
      temp: 301.39,
      feels_like: 304.33,
      pressure: 1010,
      humidity: 72,
      dew_point: 295.88,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.06,
      wind_deg: 137,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.28
    },
    {
      dt: 1598407200,
      temp: 302.22,
      feels_like: 304.65,
      pressure: 1011,
      humidity: 68,
      dew_point: 295.79,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.67,
      wind_deg: 155,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.31
    },
    {
      dt: 1598410800,
      temp: 302.83,
      feels_like: 304.88,
      pressure: 1011,
      humidity: 66,
      dew_point: 295.89,
      clouds: 96,
      visibility: 10000,
      wind_speed: 4.27,
      wind_deg: 171,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.31
    },
    {
      dt: 1598414400,
      temp: 302.99,
      feels_like: 304.85,
      pressure: 1011,
      humidity: 67,
      dew_point: 296.2,
      clouds: 97,
      visibility: 10000,
      wind_speed: 4.87,
      wind_deg: 182,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.44
    },
    {
      dt: 1598418000,
      temp: 303.02,
      feels_like: 304.53,
      pressure: 1010,
      humidity: 67,
      dew_point: 296.33,
      clouds: 96,
      visibility: 10000,
      wind_speed: 5.38,
      wind_deg: 185,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.6
    },
    {
      dt: 1598421600,
      temp: 302.59,
      feels_like: 303.41,
      pressure: 1009,
      humidity: 69,
      dew_point: 296.33,
      clouds: 97,
      visibility: 10000,
      wind_speed: 6.43,
      wind_deg: 182,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.76,
      rain: {
        "1h": 0.34
      }
    },
    {
      dt: 1598425200,
      temp: 302.52,
      feels_like: 302.96,
      pressure: 1008,
      humidity: 69,
      dew_point: 296.34,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.93,
      wind_deg: 178,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.68,
      rain: {
        "1h": 0.47
      }
    },
    {
      dt: 1598428800,
      temp: 302.17,
      feels_like: 302.73,
      pressure: 1007,
      humidity: 71,
      dew_point: 296.48,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.86,
      wind_deg: 176,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.7,
      rain: {
        "1h": 0.48
      }
    },
    {
      dt: 1598432400,
      temp: 301.85,
      feels_like: 302.8,
      pressure: 1007,
      humidity: 73,
      dew_point: 296.55,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.43,
      wind_deg: 173,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.74,
      rain: {
        "1h": 0.41
      }
    },
    {
      dt: 1598436000,
      temp: 301.37,
      feels_like: 302.43,
      pressure: 1007,
      humidity: 74,
      dew_point: 296.47,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.08,
      wind_deg: 167,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.86,
      rain: {
        "1h": 0.81
      }
    },
    {
      dt: 1598439600,
      temp: 300.88,
      feels_like: 302.12,
      pressure: 1008,
      humidity: 76,
      dew_point: 296.46,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.81,
      wind_deg: 166,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.83,
      rain: {
        "1h": 0.21
      }
    },
    {
      dt: 1598443200,
      temp: 300.57,
      feels_like: 302.07,
      pressure: 1008,
      humidity: 77,
      dew_point: 296.37,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.37,
      wind_deg: 169,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.82
    },
    {
      dt: 1598446800,
      temp: 300.46,
      feels_like: 302.49,
      pressure: 1009,
      humidity: 78,
      dew_point: 296.47,
      clouds: 91,
      visibility: 10000,
      wind_speed: 4.69,
      wind_deg: 169,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598450400,
      temp: 300.41,
      feels_like: 302.7,
      pressure: 1009,
      humidity: 78,
      dew_point: 296.38,
      clouds: 94,
      visibility: 10000,
      wind_speed: 4.28,
      wind_deg: 164,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598454000,
      temp: 300.49,
      feels_like: 302.95,
      pressure: 1010,
      humidity: 77,
      dew_point: 296.19,
      clouds: 94,
      visibility: 10000,
      wind_speed: 3.93,
      wind_deg: 153,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598457600,
      temp: 300.47,
      feels_like: 303.24,
      pressure: 1010,
      humidity: 76,
      dew_point: 295.91,
      clouds: 94,
      visibility: 10000,
      wind_speed: 3.31,
      wind_deg: 146,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598461200,
      temp: 300.34,
      feels_like: 303.13,
      pressure: 1009,
      humidity: 75,
      dew_point: 295.74,
      clouds: 95,
      visibility: 10000,
      wind_speed: 3.01,
      wind_deg: 142,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598464800,
      temp: 300.09,
      feels_like: 303.07,
      pressure: 1008,
      humidity: 77,
      dew_point: 295.73,
      clouds: 96,
      visibility: 10000,
      wind_speed: 2.88,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598468400,
      temp: 299.91,
      feels_like: 302.93,
      pressure: 1008,
      humidity: 78,
      dew_point: 295.88,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.86,
      wind_deg: 147,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598472000,
      temp: 299.86,
      feels_like: 302.94,
      pressure: 1007,
      humidity: 78,
      dew_point: 295.89,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.73,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598475600,
      temp: 299.93,
      feels_like: 302.75,
      pressure: 1007,
      humidity: 77,
      dew_point: 295.74,
      clouds: 99,
      visibility: 10000,
      wind_speed: 3,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.06
    },
    {
      dt: 1598479200,
      temp: 299.99,
      feels_like: 302.43,
      pressure: 1008,
      humidity: 76,
      dew_point: 295.53,
      clouds: 96,
      visibility: 10000,
      wind_speed: 3.42,
      wind_deg: 146,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.14
    },
    {
      dt: 1598482800,
      temp: 299.99,
      feels_like: 302.5,
      pressure: 1008,
      humidity: 77,
      dew_point: 295.65,
      clouds: 97,
      visibility: 10000,
      wind_speed: 3.48,
      wind_deg: 144,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.17
    },
    {
      dt: 1598486400,
      temp: 300.64,
      feels_like: 303.33,
      pressure: 1009,
      humidity: 76,
      dew_point: 296.13,
      clouds: 97,
      visibility: 10000,
      wind_speed: 3.54,
      wind_deg: 154,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.35
    },
    {
      dt: 1598490000,
      temp: 301.38,
      feels_like: 303.6,
      pressure: 1009,
      humidity: 72,
      dew_point: 295.99,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 162,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.47
    },
    {
      dt: 1598493600,
      temp: 301.94,
      feels_like: 304,
      pressure: 1010,
      humidity: 69,
      dew_point: 295.83,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.17,
      wind_deg: 161,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.53,
      rain: {
        "1h": 0.18
      }
    },
    {
      dt: 1598497200,
      temp: 302.4,
      feels_like: 304.27,
      pressure: 1009,
      humidity: 68,
      dew_point: 295.88,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.6,
      wind_deg: 158,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.65,
      rain: {
        "1h": 0.16
      }
    },
    {
      dt: 1598500800,
      temp: 302.7,
      feels_like: 304,
      pressure: 1009,
      humidity: 66,
      dew_point: 295.82,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.25,
      wind_deg: 164,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.77
    },
    {
      dt: 1598504400,
      temp: 302.98,
      feels_like: 303.9,
      pressure: 1008,
      humidity: 64,
      dew_point: 295.67,
      clouds: 97,
      visibility: 10000,
      wind_speed: 5.6,
      wind_deg: 168,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.8
    }
  ],
  daily: [
    {
      dt: 1598331600,
      sunrise: 1598310157,
      sunset: 1598353885,
      temp: {
        day: 301.05,
        min: 300.12,
        max: 301.59,
        night: 300.12,
        eve: 300.88,
        morn: 301.05
      },
      feels_like: {
        day: 303.48,
        night: 303.66,
        eve: 303.69,
        morn: 303.48
      },
      pressure: 1009,
      humidity: 83,
      dew_point: 297.89,
      wind_speed: 5.47,
      wind_deg: 153,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 40,
      pop: 0.98,
      rain: 6.44,
      uvi: 13.35
    },
    {
      dt: 1598418000,
      sunrise: 1598396542,
      sunset: 1598440266,
      temp: {
        day: 302.59,
        min: 300.09,
        max: 302.83,
        night: 300.09,
        eve: 300.57,
        morn: 300.62
      },
      feels_like: {
        day: 303.41,
        night: 303.07,
        eve: 302.07,
        morn: 303.88
      },
      pressure: 1009,
      humidity: 69,
      dew_point: 296.33,
      wind_speed: 6.43,
      wind_deg: 182,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 97,
      pop: 0.82,
      rain: 2.78,
      uvi: 13.42
    },
    {
      dt: 1598504400,
      sunrise: 1598482928,
      sunset: 1598526647,
      temp: {
        day: 303.08,
        min: 300.38,
        max: 303.08,
        night: 300.38,
        eve: 300.41,
        morn: 300.64
      },
      feels_like: {
        day: 303.64,
        night: 303.09,
        eve: 302.63,
        morn: 303.33
      },
      pressure: 1007,
      humidity: 64,
      dew_point: 295.74,
      wind_speed: 6.19,
      wind_deg: 166,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 87,
      pop: 0.88,
      rain: 3.38,
      uvi: 13.33
    },
    {
      dt: 1598590800,
      sunrise: 1598569313,
      sunset: 1598613027,
      temp: {
        day: 302.65,
        min: 300.11,
        max: 302.65,
        night: 300.11,
        eve: 300.97,
        morn: 300.35
      },
      feels_like: {
        day: 302.95,
        night: 302.53,
        eve: 303.42,
        morn: 302.27
      },
      pressure: 1007,
      humidity: 66,
      dew_point: 295.86,
      wind_speed: 6.64,
      wind_deg: 173,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 97,
      pop: 0.92,
      rain: 11.18,
      uvi: 13.12
    },
    {
      dt: 1598677200,
      sunrise: 1598655697,
      sunset: 1598699407,
      temp: {
        day: 302.76,
        min: 300.36,
        max: 302.86,
        night: 300.36,
        eve: 301.26,
        morn: 300.53
      },
      feels_like: {
        day: 304.43,
        night: 303.56,
        eve: 303.7,
        morn: 303.99
      },
      pressure: 1006,
      humidity: 67,
      dew_point: 296.01,
      wind_speed: 4.96,
      wind_deg: 180,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 33,
      pop: 0.69,
      rain: 2.09,
      uvi: 13.19
    },
    {
      dt: 1598763600,
      sunrise: 1598742081,
      sunset: 1598785787,
      temp: {
        day: 303.5,
        min: 300.12,
        max: 303.5,
        night: 300.12,
        eve: 301.48,
        morn: 300.57
      },
      feels_like: {
        day: 306.71,
        night: 303.54,
        eve: 305,
        morn: 303.75
      },
      pressure: 1005,
      humidity: 61,
      dew_point: 295.39,
      wind_speed: 2.11,
      wind_deg: 152,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 78,
      pop: 0.92,
      rain: 7.01,
      uvi: 13.27
    },
    {
      dt: 1598850000,
      sunrise: 1598828465,
      sunset: 1598872166,
      temp: {
        day: 303.29,
        min: 300.33,
        max: 303.29,
        night: 300.35,
        eve: 301.49,
        morn: 300.33
      },
      feels_like: {
        day: 306.4,
        night: 303.9,
        eve: 305.06,
        morn: 303.94
      },
      pressure: 1005,
      humidity: 64,
      dew_point: 295.74,
      wind_speed: 2.7,
      wind_deg: 118,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 62,
      pop: 0.93,
      rain: 6.08,
      uvi: 13.39
    },
    {
      dt: 1598936400,
      sunrise: 1598914848,
      sunset: 1598958544,
      temp: {
        day: 303.09,
        min: 299.58,
        max: 303.09,
        night: 299.58,
        eve: 300.47,
        morn: 299.59
      },
      feels_like: {
        day: 305.2,
        night: 302.75,
        eve: 303.21,
        morn: 304.07
      },
      pressure: 1006,
      humidity: 64,
      dew_point: 295.64,
      wind_speed: 3.99,
      wind_deg: 213,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 96,
      pop: 0.96,
      rain: 7.55,
      uvi: 14.05
    }
  ]
};

describe("forecastActions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should call the api and return the response", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const expectedActions = [
      {
        type: SET_FORECAST_LOADING
      },
      {
        payload: mockResponse,
        type: SET_FORECAST_SUCCESS
      }
    ];
    const store = mockStore({});
    await store.dispatch(getForecast({ lat: 1.35, lon: 103.82 }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("should call the api and return api failure", async () => {
    fetch.mockRejectOnce(new Error());
    const expectedActions = [
      {
        type: SET_FORECAST_LOADING
      },
      {
        type: SET_FORECAST_ERROR
      }
    ];
    const store = mockStore({});
    await store.dispatch(
      getForecast({ lat: 1.35, lon: 103.82, exclude: ["minutely"] })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
