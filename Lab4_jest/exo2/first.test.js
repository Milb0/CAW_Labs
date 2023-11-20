const first = require('./first');

describe("first", () => {
  it("should return an empty array if the array is null", () => {
    expect(first(null, 1)).toEqual([]);
  });

  it("should return an empty array if the array is empty", () => {
    expect(first([], 1)).toEqual([]);
  });

  it("should return the first element of the array if n is null", () => {
    expect(first([1, 2, 3], null)).toEqual(1);
  });

  it("should return the first n elements of the array", () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });
});
