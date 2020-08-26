import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import { setForecastSuccess } from "../actions/forecastActions";

import { SET_FORECAST_SUCCESS } from "../types/forecast.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = {
  lat: 1.29,
  lon: 103.85,
  timezone: "Asia/Singapore",
  timezone_offset: 28800,
  data: {
    dt: 1598335060,
    sunrise: 1598310152,
    sunset: 1598353875,
    temp: 29.34,
    feels_like: 31.88,
    pressure: 1010,
    humidity: 70,
    dew_point: 23.3,
    uvi: 13.35,
    clouds: 75,
    visibility: 10000,
    wind_speed: 4.1,
    wind_deg: 190,
    weather: [
      {
        id: 521,
        main: "Rain",
        description: "shower rain",
        icon: "09d"
      }
    ]
  },
  hourly: [
    {
      dt: 1598331600,
      temp: 29.34,
      feels_like: 31.5,
      pressure: 1010,
      humidity: 70,
      dew_point: 23.3,
      clouds: 75,
      visibility: 10000,
      wind_speed: 4.64,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.97,
      rain: {
        "1h": 0.41
      }
    },
    {
      dt: 1598335200,
      temp: 29.37,
      feels_like: 30.67,
      pressure: 1010,
      humidity: 69,
      dew_point: 23.09,
      clouds: 86,
      visibility: 10000,
      wind_speed: 5.69,
      wind_deg: 153,
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
      dt: 1598338800,
      temp: 29.31,
      feels_like: 30.55,
      pressure: 1009,
      humidity: 68,
      dew_point: 22.79,
      clouds: 86,
      visibility: 10000,
      wind_speed: 5.55,
      wind_deg: 152,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.78
    },
    {
      dt: 1598342400,
      temp: 29.37,
      feels_like: 30.77,
      pressure: 1008,
      humidity: 68,
      dew_point: 22.85,
      clouds: 82,
      visibility: 10000,
      wind_speed: 5.36,
      wind_deg: 153,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ],
      pop: 0.73
    },
    {
      dt: 1598346000,
      temp: 29.15,
      feels_like: 30.71,
      pressure: 1008,
      humidity: 70,
      dew_point: 23.12,
      clouds: 71,
      visibility: 10000,
      wind_speed: 5.35,
      wind_deg: 158,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.77,
      rain: {
        "1h": 0.42
      }
    },
    {
      dt: 1598349600,
      temp: 28.92,
      feels_like: 30.63,
      pressure: 1008,
      humidity: 71,
      dew_point: 23.31,
      clouds: 75,
      visibility: 10000,
      wind_speed: 5.14,
      wind_deg: 160,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.77,
      rain: {
        "1h": 0.28
      }
    },
    {
      dt: 1598353200,
      temp: 28.52,
      feels_like: 30.57,
      pressure: 1008,
      humidity: 73,
      dew_point: 23.32,
      clouds: 80,
      visibility: 10000,
      wind_speed: 4.72,
      wind_deg: 159,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.81,
      rain: {
        "1h": 0.23
      }
    },
    {
      dt: 1598356800,
      temp: 28.31,
      feels_like: 30.42,
      pressure: 1009,
      humidity: 73,
      dew_point: 23.21,
      clouds: 82,
      visibility: 10000,
      wind_speed: 4.47,
      wind_deg: 156,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.81,
      rain: {
        "1h": 0.19
      }
    },
    {
      dt: 1598360400,
      temp: 28.32,
      feels_like: 30.67,
      pressure: 1010,
      humidity: 73,
      dew_point: 23.14,
      clouds: 96,
      visibility: 10000,
      wind_speed: 4.14,
      wind_deg: 151,
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
      temp: 28.31,
      feels_like: 30.81,
      pressure: 1011,
      humidity: 73,
      dew_point: 23.11,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.91,
      wind_deg: 148,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.62,
      rain: {
        "1h": 0.1
      }
    },
    {
      dt: 1598367600,
      temp: 28.26,
      feels_like: 31.27,
      pressure: 1011,
      humidity: 72,
      dew_point: 22.95,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.97,
      wind_deg: 141,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.72,
      rain: {
        "1h": 0.23
      }
    },
    {
      dt: 1598371200,
      temp: 28.18,
      feels_like: 31.2,
      pressure: 1011,
      humidity: 73,
      dew_point: 23.03,
      clouds: 99,
      visibility: 10000,
      wind_speed: 3.07,
      wind_deg: 145,
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
        "1h": 0.61
      }
    },
    {
      dt: 1598374800,
      temp: 27.81,
      feels_like: 30.87,
      pressure: 1010,
      humidity: 75,
      dew_point: 23.04,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.09,
      wind_deg: 133,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      pop: 0.85,
      rain: {
        "1h": 1.03
      }
    },
    {
      dt: 1598378400,
      temp: 27.63,
      feels_like: 30.73,
      pressure: 1010,
      humidity: 75,
      dew_point: 22.88,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.9,
      wind_deg: 132,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n"
        }
      ],
      pop: 0.84,
      rain: {
        "1h": 1.41
      }
    },
    {
      dt: 1598382000,
      temp: 27.68,
      feels_like: 30.6,
      pressure: 1009,
      humidity: 73,
      dew_point: 22.63,
      clouds: 98,
      visibility: 10000,
      wind_speed: 2.84,
      wind_deg: 144,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.6,
      rain: {
        "1h": 0.27
      }
    },
    {
      dt: 1598385600,
      temp: 27.65,
      feels_like: 30.68,
      pressure: 1008,
      humidity: 73,
      dew_point: 22.51,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.66,
      wind_deg: 136,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.77,
      rain: {
        "1h": 0.6
      }
    },
    {
      dt: 1598389200,
      temp: 27.71,
      feels_like: 30.77,
      pressure: 1008,
      humidity: 73,
      dew_point: 22.45,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.66,
      wind_deg: 139,
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
        "1h": 0.25
      }
    },
    {
      dt: 1598392800,
      temp: 27.77,
      feels_like: 30.73,
      pressure: 1009,
      humidity: 72,
      dew_point: 22.38,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.68,
      wind_deg: 128,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n"
        }
      ],
      pop: 0.68,
      rain: {
        "1h": 0.1
      }
    },
    {
      dt: 1598396400,
      temp: 27.78,
      feels_like: 30.57,
      pressure: 1009,
      humidity: 72,
      dew_point: 22.43,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.93,
      wind_deg: 122,
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
      temp: 28.07,
      feels_like: 30.87,
      pressure: 1010,
      humidity: 72,
      dew_point: 22.69,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.13,
      wind_deg: 127,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.68
    },
    {
      dt: 1598403600,
      temp: 28.52,
      feels_like: 31.18,
      pressure: 1010,
      humidity: 71,
      dew_point: 22.82,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.49,
      wind_deg: 140,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.33
    },
    {
      dt: 1598407200,
      temp: 29.06,
      feels_like: 31.45,
      pressure: 1011,
      humidity: 69,
      dew_point: 22.8,
      clouds: 99,
      visibility: 10000,
      wind_speed: 3.9,
      wind_deg: 156,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.38
    },
    {
      dt: 1598410800,
      temp: 29.49,
      feels_like: 31.62,
      pressure: 1011,
      humidity: 67,
      dew_point: 22.92,
      clouds: 98,
      visibility: 10000,
      wind_speed: 4.22,
      wind_deg: 172,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.36
    },
    {
      dt: 1598414400,
      temp: 29.62,
      feels_like: 31.57,
      pressure: 1011,
      humidity: 68,
      dew_point: 23.22,
      clouds: 99,
      visibility: 10000,
      wind_speed: 4.76,
      wind_deg: 183,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.49
    },
    {
      dt: 1598418000,
      temp: 29.61,
      feels_like: 31.22,
      pressure: 1010,
      humidity: 69,
      dew_point: 23.33,
      clouds: 98,
      visibility: 10000,
      wind_speed: 5.43,
      wind_deg: 186,
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
      temp: 29.38,
      feels_like: 30.02,
      pressure: 1009,
      humidity: 69,
      dew_point: 23.28,
      clouds: 98,
      visibility: 10000,
      wind_speed: 6.65,
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
        "1h": 0.27
      }
    },
    {
      dt: 1598425200,
      temp: 29.31,
      feels_like: 29.71,
      pressure: 1008,
      humidity: 70,
      dew_point: 23.28,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.13,
      wind_deg: 177,
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
        "1h": 0.23
      }
    },
    {
      dt: 1598428800,
      temp: 29.07,
      feels_like: 29.53,
      pressure: 1008,
      humidity: 71,
      dew_point: 23.42,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.05,
      wind_deg: 175,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.71,
      rain: {
        "1h": 0.18
      }
    },
    {
      dt: 1598432400,
      temp: 28.82,
      feels_like: 29.62,
      pressure: 1007,
      humidity: 72,
      dew_point: 23.48,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.56,
      wind_deg: 171,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.75,
      rain: {
        "1h": 0.34
      }
    },
    {
      dt: 1598436000,
      temp: 28.51,
      feels_like: 29.34,
      pressure: 1007,
      humidity: 73,
      dew_point: 23.42,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.45,
      wind_deg: 163,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.87,
      rain: {
        "1h": 0.97
      }
    },
    {
      dt: 1598439600,
      temp: 28.27,
      feels_like: 29.18,
      pressure: 1008,
      humidity: 75,
      dew_point: 23.45,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.52,
      wind_deg: 166,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.85,
      rain: {
        "1h": 0.27
      }
    },
    {
      dt: 1598443200,
      temp: 27.96,
      feels_like: 29.12,
      pressure: 1008,
      humidity: 76,
      dew_point: 23.43,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.1,
      wind_deg: 170,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.83
    },
    {
      dt: 1598446800,
      temp: 27.9,
      feels_like: 29.73,
      pressure: 1009,
      humidity: 77,
      dew_point: 23.55,
      clouds: 84,
      visibility: 10000,
      wind_speed: 5.27,
      wind_deg: 168,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      pop: 0
    },
    {
      dt: 1598450400,
      temp: 27.94,
      feels_like: 29.95,
      pressure: 1009,
      humidity: 76,
      dew_point: 23.44,
      clouds: 91,
      visibility: 10000,
      wind_speed: 4.87,
      wind_deg: 163,
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
      temp: 28.08,
      feels_like: 30.16,
      pressure: 1010,
      humidity: 74,
      dew_point: 23.18,
      clouds: 89,
      visibility: 10000,
      wind_speed: 4.52,
      wind_deg: 152,
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
      temp: 28.06,
      feels_like: 30.42,
      pressure: 1010,
      humidity: 73,
      dew_point: 22.89,
      clouds: 91,
      visibility: 10000,
      wind_speed: 3.92,
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
      temp: 27.92,
      feels_like: 30.39,
      pressure: 1009,
      humidity: 73,
      dew_point: 22.8,
      clouds: 93,
      visibility: 10000,
      wind_speed: 3.67,
      wind_deg: 143,
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
      temp: 27.65,
      feels_like: 30.29,
      pressure: 1008,
      humidity: 75,
      dew_point: 22.85,
      clouds: 94,
      visibility: 10000,
      wind_speed: 3.56,
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
      dt: 1598468400,
      temp: 27.46,
      feels_like: 30.16,
      pressure: 1008,
      humidity: 76,
      dew_point: 23.04,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.51,
      wind_deg: 149,
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
      temp: 27.45,
      feels_like: 30.29,
      pressure: 1007,
      humidity: 76,
      dew_point: 22.95,
      clouds: 99,
      visibility: 10000,
      wind_speed: 3.3,
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
      dt: 1598475600,
      temp: 27.59,
      feels_like: 30.06,
      pressure: 1007,
      humidity: 74,
      dew_point: 22.69,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.59,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.05
    },
    {
      dt: 1598479200,
      temp: 27.67,
      feels_like: 29.76,
      pressure: 1008,
      humidity: 73,
      dew_point: 22.49,
      clouds: 96,
      visibility: 10000,
      wind_speed: 4.02,
      wind_deg: 146,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.12
    },
    {
      dt: 1598482800,
      temp: 27.68,
      feels_like: 29.87,
      pressure: 1008,
      humidity: 74,
      dew_point: 22.79,
      clouds: 97,
      visibility: 10000,
      wind_speed: 4.06,
      wind_deg: 145,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      pop: 0.13
    },
    {
      dt: 1598486400,
      temp: 28.06,
      feels_like: 30.28,
      pressure: 1009,
      humidity: 74,
      dew_point: 23.14,
      clouds: 97,
      visibility: 10000,
      wind_speed: 4.31,
      wind_deg: 156,
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
      dt: 1598490000,
      temp: 28.48,
      feels_like: 30.44,
      pressure: 1009,
      humidity: 71,
      dew_point: 22.88,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.45,
      wind_deg: 164,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.49
    },
    {
      dt: 1598493600,
      temp: 28.82,
      feels_like: 30.8,
      pressure: 1010,
      humidity: 69,
      dew_point: 22.77,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.31,
      wind_deg: 162,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.55,
      rain: {
        "1h": 0.13
      }
    },
    {
      dt: 1598497200,
      temp: 29.13,
      feels_like: 30.97,
      pressure: 1009,
      humidity: 69,
      dew_point: 22.9,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.74,
      wind_deg: 156,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      pop: 0.64,
      rain: {
        "1h": 0.12
      }
    },
    {
      dt: 1598500800,
      temp: 29.46,
      feels_like: 30.78,
      pressure: 1009,
      humidity: 67,
      dew_point: 22.86,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.35,
      wind_deg: 161,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      pop: 0.75
    }
  ],
  daily: [
    {
      dt: 1598331600,
      sunrise: 1598310152,
      sunset: 1598353875,
      temp: {
        day: 29.37,
        min: 27.63,
        max: 29.37,
        night: 27.63,
        eve: 28.38,
        morn: 29.34
      },
      feels_like: {
        day: 30.67,
        night: 30.73,
        eve: 30.53,
        morn: 31.85
      },
      pressure: 1010,
      humidity: 69,
      dew_point: 23.09,
      wind_speed: 5.69,
      wind_deg: 153,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 86,
      pop: 0.97,
      rain: 6.51,
      uvi: 13.35
    },
    {
      dt: 1598418000,
      sunrise: 1598396538,
      sunset: 1598440256,
      temp: {
        day: 29.38,
        min: 27.65,
        max: 29.49,
        night: 27.65,
        eve: 27.96,
        morn: 28.07
      },
      feels_like: {
        day: 30.02,
        night: 30.29,
        eve: 29.12,
        morn: 30.87
      },
      pressure: 1009,
      humidity: 69,
      dew_point: 23.28,
      wind_speed: 6.65,
      wind_deg: 182,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 98,
      pop: 0.83,
      rain: 2.39,
      uvi: 13.42
    },
    {
      dt: 1598504400,
      sunrise: 1598482923,
      sunset: 1598526637,
      temp: {
        day: 29.69,
        min: 27.82,
        max: 29.69,
        night: 27.97,
        eve: 27.82,
        morn: 28.06
      },
      feels_like: {
        day: 30.21,
        night: 30.41,
        eve: 29.64,
        morn: 30.28
      },
      pressure: 1007,
      humidity: 66,
      dew_point: 22.91,
      wind_speed: 6.47,
      wind_deg: 164,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 83,
      pop: 0.88,
      rain: 3.24,
      uvi: 13.33
    },
    {
      dt: 1598590800,
      sunrise: 1598569308,
      sunset: 1598613017,
      temp: {
        day: 29.46,
        min: 27.68,
        max: 29.46,
        night: 27.68,
        eve: 28.49,
        morn: 27.86
      },
      feels_like: {
        day: 29.8,
        night: 29.83,
        eve: 30.69,
        morn: 29.34
      },
      pressure: 1007,
      humidity: 67,
      dew_point: 22.87,
      wind_speed: 6.75,
      wind_deg: 172,
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d"
        }
      ],
      clouds: 96,
      pop: 0.93,
      rain: 12.74,
      uvi: 13.12
    },
    {
      dt: 1598677200,
      sunrise: 1598655692,
      sunset: 1598699397,
      temp: {
        day: 29.35,
        min: 28.01,
        max: 29.67,
        night: 28.06,
        eve: 28.74,
        morn: 28.01
      },
      feels_like: {
        day: 31.15,
        night: 31.04,
        eve: 30.86,
        morn: 31.01
      },
      pressure: 1006,
      humidity: 68,
      dew_point: 22.98,
      wind_speed: 4.77,
      wind_deg: 178,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 26,
      pop: 0.69,
      rain: 1.89,
      uvi: 13.19
    },
    {
      dt: 1598763600,
      sunrise: 1598742076,
      sunset: 1598785777,
      temp: {
        day: 29.93,
        min: 27.83,
        max: 29.93,
        night: 27.83,
        eve: 28.92,
        morn: 28.08
      },
      feels_like: {
        day: 33.61,
        night: 30.75,
        eve: 32.08,
        morn: 30.77
      },
      pressure: 1005,
      humidity: 64,
      dew_point: 22.52,
      wind_speed: 1.74,
      wind_deg: 147,
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
      rain: 6.14,
      uvi: 13.27
    },
    {
      dt: 1598850000,
      sunrise: 1598828460,
      sunset: 1598872156,
      temp: {
        day: 29.81,
        min: 27.97,
        max: 29.81,
        night: 27.97,
        eve: 28.97,
        morn: 27.97
      },
      feels_like: {
        day: 32.73,
        night: 31.35,
        eve: 32.11,
        morn: 31.28
      },
      pressure: 1005,
      humidity: 65,
      dew_point: 22.66,
      wind_speed: 2.93,
      wind_deg: 109,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 53,
      pop: 0.94,
      rain: 4.67,
      uvi: 13.39
    },
    {
      dt: 1598936400,
      sunrise: 1598914843,
      sunset: 1598958535,
      temp: {
        day: 29.41,
        min: 26.96,
        max: 29.41,
        night: 26.96,
        eve: 27.85,
        morn: 27.12
      },
      feels_like: {
        day: 31.42,
        night: 29.92,
        eve: 30.17,
        morn: 31.89
      },
      pressure: 1006,
      humidity: 66,
      dew_point: 22.62,
      wind_speed: 4.13,
      wind_deg: 218,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d"
        }
      ],
      clouds: 98,
      pop: 0.94,
      rain: 8.65,
      uvi: 14.05
    }
  ]
};

describe("apiOnecall", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should call the api successfully", async () => {
    fetch.mockResponseOnce(mockResponse);
    const expectedActions = [
      {
        payload: mockResponse,
        type: SET_FORECAST_SUCCESS
      }
    ];
    const store = mockStore({});
    await store.dispatch(setForecastSuccess(mockResponse));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
