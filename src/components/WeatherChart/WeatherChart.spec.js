import React from "react";
import { render } from "@testing-library/react";
import WeatherChart from "./WeatherChart";
import { colours } from "../../theme";

const mockLabels = [
  "(Sun) 28 Jun",
  "(Mon) 29 Jun",
  "(Tue) 30 Jun",
  "(Wed) 01 Jul",
  "(Thu) 02 Jul",
  "(Fri) 03 Jul",
  "(Sat) 04 Jul"
];

const mockTempHigh = [
  { temp: 30.74, description: "Rain" },
  { temp: 30.04, description: "Rain" },
  { temp: 29.79, description: "Rain" },
  { temp: 29.98, description: "Rain" },
  { temp: 30, description: "Rain" },
  { temp: 29.86, description: "Rain" },
  { temp: 29.95, description: "Rain" }
];

const mockTempLow = [
  { temp: 27.71, description: "Rain" },
  { temp: 27.14, description: "Rain" },
  { temp: 27.01, description: "Rain" },
  { temp: 26.76, description: "Rain" },
  { temp: 27.24, description: "Rain" },
  { temp: 26.91, description: "Rain" },
  { temp: 27.07, description: "Rain" }
];

const mockDatasets = [
  {
    backgroundColor: colours.cold,
    borderColor: colours.cold,
    data: mockTempLow.map(({ temp }) => temp),
    description: mockTempLow.map(({ description }) => description),
    fill: false,
    label: `Low (°C)`,
    pointBorderWidth: 5
  },
  {
    backgroundColor: colours.hot,
    borderColor: colours.hot,
    data: mockTempHigh.map(({ temp }) => temp),
    description: mockTempHigh.map(({ description }) => description),
    fill: false,
    label: `High (°C)`,
    pointBorderWidth: 5
  }
];

describe("WeatherChart", () => {
  test("should render", () => {
    const { container } = render(
      <WeatherChart
        datasets={mockDatasets}
        labels={mockLabels}
        title={{
          display: true,
          text: `Weather forecast in Singapore`
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
