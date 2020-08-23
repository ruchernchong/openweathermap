import formatDecimal from "./formatDecimal";

describe("formatDecimal", () => {
  test("should format to two decimal places if no decimal was passed", () => {
    expect(formatDecimal(100)).toBe(`100.00`);
  });

  test("should format correctly if the number is a string", () => {
    expect(formatDecimal("100", 0)).toBe(`100`);
  });

  test("should format to three decimal places if 3 is passed", () => {
    expect(formatDecimal(200, 3)).toBe(`200.000`);
  });

  test("should format to no decimal places if 0 is passed", () => {
    expect(formatDecimal(300, 0)).toBe(`300`);
  });
});
