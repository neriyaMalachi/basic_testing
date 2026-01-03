import add from "../app.js";

describe("add function", () => {

  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("throws error on bad input", () => {
    expect(() => add("2", 3)).toThrow();
  });

});
