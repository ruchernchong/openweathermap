import convertUnixToDatetime from "./convertUnixToDatetime";

describe("convertUnixToDatetime", () => {
  test("should return type of Date", () => {
    expect(convertUnixToDatetime(1598025600)).toBeInstanceOf(Date);
    expect(convertUnixToDatetime(1598025600)).toStrictEqual(
      new Date("2020-08-21T16:00:00.000Z")
    );
  });
});
