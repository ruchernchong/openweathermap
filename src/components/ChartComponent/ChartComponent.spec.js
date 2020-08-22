import React from "react";
import { render } from "@testing-library/react";
import ChartComponent from "./ChartComponent";

describe("Chart", () => {
  test("should render", () => {
    const { container } = render(<ChartComponent />);
    expect(container).toMatchSnapshot();
  });
});
