import fiboEvenSum from "./fiboEvenSum.js";

describe("fiboEvenSum", () => {
  test("should return the correct sum for input 8", () => {
    expect(fiboEvenSum(8)).toBe(10);
  });

  test("should return the correct sum for input 10", () => {
    expect(fiboEvenSum(10)).toBe(10);
  });

  test("should return the correct sum for input 34", () => {
    expect(fiboEvenSum(34)).toBe(44);
  });

  test("should return the correct sum for input 60", () => {
    expect(fiboEvenSum(60)).toBe(44);
  });

  test("should return the correct sum for input 1000", () => {
    expect(fiboEvenSum(1000)).toBe(798);
  });

  test("should return the correct sum for input 100000", () => {
    expect(fiboEvenSum(100000)).toBe(60696);
  });

  test("should return the correct sum for input 4000000", () => {
    expect(fiboEvenSum(4000000)).toBe(4613732);
  });
});
