import React from "react";
import { render } from "@testing-library/react";
import { IndexPage } from "./index";

import { useStaticQuery } from "../../__mocks__/gatsby";
import mockDataJson from "../../__mocks__/graph-data-json.json";

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
    const { container } = render(<IndexPage data={mockData} />);
    expect(container).toMatchSnapshot();
  });
});
