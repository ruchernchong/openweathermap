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

  test("should show additional contents when the accordion summary is clicked", () => {
    const { getAllByText, queryAllByText } = render(
      <WeatherCard
        dt={dt}
        humidity={humidity}
        sunrise={sunrise}
        sunset={sunset}
        temp={temp}
        weather={weather}
      />
    );

    expect(queryAllByText(/Humidity/)[0]).not.toBeVisible();

    fireEvent.click(getAllByText(/\(Sun\) 28 Jun/)[0]);
    expect(getAllByText(/Humidity/)[0]).toBeVisible();
  });
});
