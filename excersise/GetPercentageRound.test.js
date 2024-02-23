describe("getPercentageRound", () => {
  test("percentage 0", () => {
    expect(getPercentageRound(0)).toBe("⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪");
  });

  test("percentage 0.05", () => {
    expect(getPercentageRound(0.05)).toBe("🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪");
  });

  test("percentage 0.15", () => {
    expect(getPercentageRound(0.15)).toBe("🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪");
  });

  test("percentage 0.25", () => {
    expect(getPercentageRound(0.25)).toBe("🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪");
  });

  test("percentage 0.35", () => {
    expect(getPercentageRound(0.35)).toBe("🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪");
  });

  test("percentage 0.45", () => {
    expect(getPercentageRound(0.45)).toBe("🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪");
  });

  test("percentage 0.55", () => {
    expect(getPercentageRound(0.55)).toBe("🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪");
  });

  test("percentage 0.65", () => {
    expect(getPercentageRound(0.65)).toBe("🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪");
  });

  test("percentage 0.75", () => {
    expect(getPercentageRound(0.75)).toBe("🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪");
  });

  test("percentage 0.85", () => {
    expect(getPercentageRound(0.85)).toBe("🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪");
  });

  test("percentage 0.95", () => {
    expect(getPercentageRound(0.95)).toBe("🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵");
  });

  test("percentage above 1", () => {
    expect(getPercentageRound(1.1)).toBe("🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵");
  });
});
