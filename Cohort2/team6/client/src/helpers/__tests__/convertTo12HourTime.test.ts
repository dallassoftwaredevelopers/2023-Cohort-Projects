import { describe, expect, it } from "vitest";
import { convertTo12HourFormat } from "../convertTo12HourTime";

describe("convertTo12HourFormat", () => {
  it("should convert 00:00 to 12:00 AM", () => {
    const result = convertTo12HourFormat("00:00");
    expect(result).toBe("12:00 AM");
  });

  it("should convert 12:00 to 12:00 PM", () => {
    const result = convertTo12HourFormat("12:00");
    expect(result).toBe("12:00 PM");
  });

  it("should convert 15:30 to 3:30 PM", () => {
    const result = convertTo12HourFormat("15:30");
    expect(result).toBe("3:30 PM");
  });

  it("should convert 08:45 to 8:45 AM", () => {
    const result = convertTo12HourFormat("08:45");
    expect(result).toBe("8:45 AM");
  });

  it("should convert 23:59 to 11:59 PM", () => {
    const result = convertTo12HourFormat("23:59");
    expect(result).toBe("11:59 PM");
  });
});
