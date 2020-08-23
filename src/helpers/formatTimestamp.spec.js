import { formatDate, formatTime } from "./formatTimestamp";

describe("formatTimestamp", () => {
  test("should return the date", () => {
    expect(formatDate(1598025600)).toBe("(Sat) 22 Aug");
  });

  test("should return the time", () => {
    expect(formatTime(1598025600)).toBe("12:00 AM");
  });
});
