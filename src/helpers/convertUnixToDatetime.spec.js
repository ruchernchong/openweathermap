import convertUnixToDatetime from "./convertUnixToDatetime";

describe("convertUnixToDatetime", () => {
  test("should return readable date and time for each timestamp", () => {
    expect(convertUnixToDatetime(1598025600)).toBe(
      "Sat Aug 22 2020 00:00:00 GMT+0800 (Singapore Standard Time)"
    );
  });
});
