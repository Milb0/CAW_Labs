describe("last", () => {
  it("should return an empty array if the array is null", () => {
    expect(last(null, 1)).toEqual([]);
  });
  it("should return an empty array if the array is empty", () => {
    expect(last([], 1)).toEqual([]);
  });
  it("should return the last element of the array if n is null", () => {
    expect(last([1, 2, 3], null)).toEqual(3);
  });
  it("should return the last n elements of the array", () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });
});