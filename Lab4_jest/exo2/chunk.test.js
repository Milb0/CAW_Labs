describe("chunk", () => {
    it("should return an empty array if the array is null", () => {
      expect(chunk(null, 1)).toEqual([]);
    });
    it("should return an empty array if the array is empty", () => {
      expect(chunk([], 1)).toEqual([]);
    });
    it("should return an array with one sub-array if the array has the same length as the chunk size", () => {
      expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    });
    it("should return an array with multiple sub-arrays if the array has a longer length than the chunk size", () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
  });