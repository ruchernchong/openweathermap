import formatTemperature from "./formatTemperature";

describe("formatTemperature", () => {
  test("should return the value with °C", () => {
    expect(formatTemperature(36)).toBe("36.0°C");
    expect(formatTemperature(37.5)).toBe("37.5°C");
  });
});
