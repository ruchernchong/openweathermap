import React from "react";
import { render } from "@testing-library/react";
import { IndexPage } from "./index";

import { useStaticQuery } from "../../__mocks__/gatsby";

import mockDataJson from "../../__mocks__/graph-data-json.json";
import mockForecast from "../../__mocks__/forecast.json";
import mockWeather from "../../__mocks__/weather.json";

const data = {
  site: {
    siteMetadata: {
      title: "OpenWeatherMap"
    }
  }
};

const mockData = {
  ...mockDataJson,
  ...data
};

describe("Page: Index", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data);
  });

  test("should render", () => {
    const { container } = render(
      <IndexPage
        data={mockData}
        forecast={mockForecast}
        weatherObj={mockWeather}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render the number of forecast days", () => {
    const { getByTestId } = render(
      <IndexPage
        data={mockData}
        forecast={mockForecast}
        weatherObj={mockWeather}
      />
    );
    expect(getByTestId("forecast-list").children).toHaveLength(8);
  });

  test("should render no forecast if data is empty", () => {
    // Simulate no data for daily forecast
    delete mockForecast.data.daily;

    const { getByTestId } = render(
      <IndexPage
        data={mockData}
        forecast={mockForecast}
        weatherObj={mockWeather}
      />
    );
    expect(getByTestId("forecast-list").children).toHaveLength(0);
  });

  test("should show backdrop loader when fetching data", () => {
    // Simulate loading the forecast data
    mockForecast.loading = true;

    const { getByTestId } = render(
      <IndexPage forecast={mockForecast} weatherObj={mockWeather} />
    );
    expect(getByTestId("loader")).toBeVisible();
  });
});
