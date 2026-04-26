const { formatColorName } = require("../../utils/colorUtils");

test("formats color name correctly", () => {
  expect(formatColorName("  RED ")).toBe("red");
});