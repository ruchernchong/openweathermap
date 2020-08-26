import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getCurrentWeather } from "./weatherActions";

import {
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
  SET_WEATHER_SUCCESS
} from "../types/weather.types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockResponse = {
  coord: {
    lon: 103.85,
    lat: 1.29
  },
  weather: [
    {
      id: 521,
      main: "Rain",
      description: "shower rain",
      icon: "09d"
    }
  ],
  base: "stations",
  main: {
    temp: 29.34,
    feels_like: 31.88,
    temp_min: 27,
    temp_max: 31,
    pressure: 1010,
    humidity: 70
  },
  visibility: 10000,
  wind: {
    speed: 4.1,
    deg: 190
  },
  clouds: {
    all: 75
  },
  dt: 1598334984,
  sys: {
    type: 1,
    id: 9470,
    country: "SG",
    sunrise: 1598310152,
    sunset: 1598353875
  },
  timezone: 28800,
  id: 1880252,
  name: "Singapore",
  cod: 200
};

describe("weatherActions", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should set the response and call the expected action type", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockResponse));
    const expectedActions = [
      {
        type: SET_WEATHER_LOADING
      },
      {
        payload: mockResponse,
        type: SET_WEATHER_SUCCESS
      }
    ];
    const store = mockStore({});
    await store.dispatch(getCurrentWeather());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test("should call the api and return api failure", async () => {
    fetch.mockRejectOnce(new Error());
    const expectedActions = [
      {
        type: SET_WEATHER_LOADING
      },
      {
        type: SET_WEATHER_ERROR
      }
    ];
    const store = mockStore({});
    await store.dispatch(getCurrentWeather());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
