import React from "react";
import { render } from "@testing-library/react";
import NotFoundPage from "./404";

import { useStaticQuery } from "../../__mocks__/gatsby";

const data = {
  site: {
    siteMetadata: {
      author: "John Doe",
      title: "OpenWeatherMap",
      version: `v1.0.0`
    }
  }
};

describe("Page: NotFound", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data);
  });

  test("should render", () => {
    const { container, getByText } = render(<NotFoundPage data={data} />);
    expect(container).toMatchSnapshot();
    expect(
      getByText(/You just hit a route that doesn't exist.../)
    ).toBeVisible();
  });
});
