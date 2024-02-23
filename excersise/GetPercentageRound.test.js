import { test, expect } from "vitest";
import { getPercentageRound } from "./GetPercentageRound";

const testCases = [
  { percentage: 0, expected: "⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪" },
  { percentage: 0.05, expected: "🔵⚪⚪⚪⚪⚪⚪⚪⚪⚪" },
  { percentage: 0.15, expected: "🔵🔵⚪⚪⚪⚪⚪⚪⚪⚪" },
  { percentage: 0.25, expected: "🔵🔵🔵⚪⚪⚪⚪⚪⚪⚪" },
  { percentage: 0.35, expected: "🔵🔵🔵🔵⚪⚪⚪⚪⚪⚪" },
  { percentage: 0.45, expected: "🔵🔵🔵🔵🔵⚪⚪⚪⚪⚪" },
  { percentage: 0.55, expected: "🔵🔵🔵🔵🔵🔵⚪⚪⚪⚪" },
  { percentage: 0.65, expected: "🔵🔵🔵🔵🔵🔵🔵⚪⚪⚪" },
  { percentage: 0.75, expected: "🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪" },
  { percentage: 0.85, expected: "🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪" },
  { percentage: 0.95, expected: "🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵" },
  { percentage: 1.1, expected: "🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵" },
];

testCases.forEach(({ percentage, expected }) => {
  test(`When percentage ${percentage}`, () => {
    const result = getPercentageRound(percentage);
    expect(result).toBe(expected);
  });
});
