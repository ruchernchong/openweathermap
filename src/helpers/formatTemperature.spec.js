import formatTemperature from "./formatTemperature";

describe("formatTemperature", () => {
  test("should return the value with °C", () => {
    expect(formatTemperature(36)).toBe("36°C");
    expect(formatTemperature(37.5)).toBe("38°C");
    expect(formatTemperature(37.4)).toBe("37°C");
  });
});
