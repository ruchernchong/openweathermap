import React from "react";
import { render } from "@testing-library/react";
import { IndexPage } from "./index";

import mockData from "../../__mocks__/graph-data.json";

jest.mock("../components/Header", () => "mocked-header");
jest.mock("../components/seo", () => "mocked-seo");

describe("Page: Index", () => {
  test("should render", () => {
    const { container } = render(<IndexPage data={mockData} />);
    expect(container).toMatchSnapshot();
  });
});
