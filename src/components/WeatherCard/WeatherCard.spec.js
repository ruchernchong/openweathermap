import React from "react";
import { fireEvent, render } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

import mockData from "../../data/weather.json";

const mockListItem = mockData.list[0];
const { dt, humidity, sunrise, sunset, temp, weather } = mockListItem;

describe("WeatherCard", () => {
  test("should render", () => {
    const { container } = render(
      <WeatherCard
        dt={dt}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        weather={weather}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render", () => {
    const onClick = jest.fn();
    const { getAllByText, queryAllByText } = render(
      <WeatherCard
        dt={dt}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        weather={weather}
        onClick={onClick}
      />
    );

    expect(queryAllByText(/Humidity/)[0]).toBeFalsy();

    fireEvent.click(getAllByText(/Click more/)[0]);
    expect(getAllByText(/Humidity/)[0]).toBeTruthy();
  });
});
