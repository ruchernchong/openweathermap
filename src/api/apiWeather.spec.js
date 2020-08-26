import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { setWeatherSuccess } from "../actions/weatherActions";

import { SET_WEATHER_SUCCESS } from "../types/weather.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = {
  coord: {
    lon: 103.85,
    lat: 1.29
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04n"
    }
  ],
  base: "stations",
  main: {
    temp: 301.42,
    feels_like: 306.35,
    temp_min: 300.93,
    temp_max: 302.15,
    pressure: 1010,
    humidity: 79
  },
  visibility: 10000,
  wind: {
    speed: 1.5,
    deg: 60
  },
  clouds: {
    all: 75
  },
  dt: 1598281491,
  sys: {
    type: 1,
    id: 9470,
    country: "SG",
    sunrise: 1598223766,
    sunset: 1598267493
  },
  timezone: 28800,
  id: 1880252,
  name: "Singapore",
  cod: 200
};

describe("apiWeather", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should call the api successfully", async () => {
    fetch.mockResponseOnce(mockResponse);
    const expectedActions = [
      {
        payload: mockResponse,
        type: SET_WEATHER_SUCCESS
      }
    ];
    const store = mockStore({});
    await store.dispatch(setWeatherSuccess(mockResponse));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
