import React from "react";
import { render } from "@testing-library/react";
import { IndexPage } from "./index";

import { useStaticQuery } from "../../__mocks__/gatsby";

import mockForecast from "../../__mocks__/forecast.json";
import mockWeather from "../../__mocks__/weather.json";
import { fireEvent } from "@testing-library/dom";

const data = {
  site: {
    siteMetadata: {
      title: "OpenWeatherMap"
    }
  }
};

describe("Page: Index", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data);
  });

  test("should render the daily forecast", () => {
    const { container } = render(
      <IndexPage
        cityName={mockWeather.data.name}
        coord={mockWeather.data.coord}
        daily={mockForecast.data.daily}
        hourly={mockForecast.data.hourly}
        forecast={mockForecast}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render the hourly forecast", () => {
    const { container, getByText } = render(
      <IndexPage
        cityName={mockWeather.data.name}
        coord={mockWeather.data.coord}
        daily={mockForecast.data.daily}
        forecast={mockForecast}
        hourly={mockForecast.data.hourly}
      />
    );
    fireEvent.click(getByText("Hourly"));
    expect(container).toMatchSnapshot();
  });

  test("should render the number of forecast days", () => {
    const { getByTestId } = render(
      <IndexPage
        cityName={mockWeather.data.name}
        coord={mockWeather.data.coord}
        forecast={mockForecast}
        daily={mockForecast.data.daily}
      />
    );
    expect(getByTestId("forecast-list").children).toHaveLength(8);
  });

  test("should render no forecast if data is empty", () => {
    // Simulate no data for daily forecast
    delete mockForecast.data.daily;

    const { getByTestId } = render(
      <IndexPage
        cityName={mockWeather.data.name}
        coord={mockWeather.data.coord}
        daily={mockForecast.data.daily}
        forecast={mockForecast}
      />
    );
    expect(getByTestId("forecast-list").children).toHaveLength(0);
  });

  test("should show backdrop loader when fetching data", () => {
    // Simulate loading the forecast data
    mockForecast.loading = true;

    const { getByTestId } = render(
      <IndexPage
        cityName={mockWeather.data.name}
        coord={mockWeather.data.coord}
        daily={mockForecast.data.daily}
        forecast={mockForecast}
      />
    );
    expect(getByTestId("loader")).toBeVisible();
  });
});
