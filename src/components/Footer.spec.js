import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

import { useStaticQuery } from "../../__mocks__/gatsby";

const data = {
  site: {
    siteMetadata: {
      author: "John Doe",
      version: "v1.0.0"
    }
  }
};

describe("Footer", () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => data);
  });

  test("should render", () => {
    const { container, getByText } = render(<Footer data={data} />);
    expect(container).toMatchSnapshot();
    expect(getByText(/John Doe/)).toBeVisible();
    expect(getByText(/v1.0.0/)).toBeVisible();
  });
});
