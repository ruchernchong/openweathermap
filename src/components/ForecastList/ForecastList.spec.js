import React from "react";
import { render } from "@testing-library/react";
import ForecastList from "./ForecastList";

import mockForecast from "../../../__mocks__/forecast.json";

const { daily, hourly } = mockForecast.data;

describe("ForecastList", () => {
  test("should render the daily forecast", () => {
    const { container } = render(
      <ForecastList daily={daily} hourly={hourly} />
    );
    expect(container).toMatchSnapshot();
  });

  test("should render the hourly forecast", () => {
    const { container } = render(
      <ForecastList daily={daily} hourly={hourly} isDailyForecast={false} />
    );
    expect(container).toMatchSnapshot();
  });
});
