import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

import { useStaticQuery } from "../../__mocks__/gatsby";

const data = {
  site: {
    siteMetadata: {
      title: "OpenWeatherMap"
    }
  }
};

describe("Layout", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data);
  });

  test("should render", () => {
    const { container, getByText } = render(
      <Layout data={data}>Content</Layout>
    );
    expect(container).toMatchSnapshot();
    expect(getByText("Content")).toBeVisible();
  });
});
