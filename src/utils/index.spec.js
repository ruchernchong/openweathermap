import {
  formatDate,
  formatDecimal,
  formatTemperature,
  formatTime,
  noop
} from "./";

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

describe("formatTemperature", () => {
  test("should return the value with °C", () => {
    expect(formatTemperature(36)).toBe("36°C");
    expect(formatTemperature(37.5)).toBe("38°C");
    expect(formatTemperature(37.4)).toBe("37°C");
  });
});

describe("formatTimestamp", () => {
  test("should return the date", () => {
    expect(formatDate(1598025600)).toBe("Sat, 22 Aug");
  });

  test("should return the time", () => {
    expect(formatTime(1598025600)).toBe("12:00 AM");
  });
});

describe("noop", () => {
  test("should return an empty function", () => {
    expect(noop).toBeInstanceOf(Function);
  });
});
