import noop from "./noop";

describe("noop", () => {
  test("should return an empty function", () => {
    expect(noop).toBeInstanceOf(Function);
  });
});
