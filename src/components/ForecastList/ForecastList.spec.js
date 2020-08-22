import React from "react";
import { render } from "@testing-library/react";
import ForecastList from "./ForecastList";

import mockData from "../../data/weather.json";

const { list } = mockData;

describe("ForecastList", () => {
  test("should render", () => {
    const { container } = render(<ForecastList list={list} />);
    expect(container).toMatchSnapshot();
  });
});
