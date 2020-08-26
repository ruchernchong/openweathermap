import React from "react";
import { render } from "@testing-library/react";
import ForecastList from "./ForecastList";

import mockForecast from "../../../__mocks__/forecast.json";

const { daily } = mockForecast.data;

describe("ForecastList", () => {
  test("should render", () => {
    const { container } = render(<ForecastList list={daily} />);
    expect(container).toMatchSnapshot();
  });
});
