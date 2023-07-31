import { getFormattedDate } from "../getFormattedDate";

describe("getFormattedDate", () => {
  it("should convert '2023-07-30' to 'July 30'", () => {
    const result = getFormattedDate("2023-07-30");
    expect(result).toBe("July 30");
  });

  it("should convert '2023-12-25' to 'December 25'", () => {
    const result = getFormattedDate("2023-12-25");
    expect(result).toBe("December 25");
  });

  it("should convert '2023-01-01' to 'January 1'", () => {
    const result = getFormattedDate("2023-01-01");
    expect(result).toBe("January 1");
  });

  it("should convert '2022-11-11' to 'November 11'", () => {
    const result = getFormattedDate("2022-11-11");
    expect(result).toBe("November 11");
  });

  it("should convert '2023-09-05' to 'September 5'", () => {
    const result = getFormattedDate("2023-09-05");
    expect(result).toBe("September 5");
  });

  it("should convert '2023-02-14' to 'February 14'", () => {
    const result = getFormattedDate("2023-02-14");
    expect(result).toBe("February 14");
  });
});
