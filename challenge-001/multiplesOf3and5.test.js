import multiplesOf3and5 from "./multiplesOf3and5.js";

describe("multiplesOf3and5", () => {
  test("should return the correct sum for input 10", () => {
    expect(multiplesOf3and5(10)).toBe(23);
  });

  test("should return the correct sum for input 49", () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });

  test("should return the correct sum for input 1000", () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });

  test("should return the correct sum for input 8456", () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
  });

  test("should return the correct sum for input 19564", () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });
});
