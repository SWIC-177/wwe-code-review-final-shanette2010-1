import { describe, expect, test } from "vitest";
import { removeCorrespondingItemsByTerm, getLastName } from "./lib";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
});

test("removeCorrespondingItemsByTerm", () => {
  // Arrange
  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items
  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});
