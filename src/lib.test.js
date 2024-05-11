import { describe, expect, it } from "vitest";
import {
  getLastName,
  merge2ArraysIntoAnArrayOfObjects,
  removeCorrespondingItemsByTerm,
} from "./lib";

describe("getLastName", () => {
  it("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  it("returns the last name from a full name with extra spaces", () => {
    // Arrange
    const fullName = "John    Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  it("returns the last name from a full name with extra spaces at the beginning", () => {
    // Arrange
    const fullName = "   John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  it("returns the last name from a full name with extra spaces at the end", () => {
    // Arrange
    const fullName = "John Doe   ";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  it("returns the last name from a multi-word full name", () => {
    // Arrange
    const fullName = "John Michael Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  it("returns the last name from a full name with special characters", () => {
    // Arrange
    const fullName = "Starsky & Hutch";
    const expected = "Hutch";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });
});

it("merges 2️⃣ arrays into a an array of objects", () => {
  // Arrange
  const a1 = ["title1", "title2", "title3"];
  const a2 = ["champion1", "champion2", "champion3"];
  const key1 = "title";
  const key2 = "champion";

  const expected = [
    { title: "title1", champion: "champion1" },
    { title: "title2", champion: "champion2" },
    { title: "title3", champion: "champion3" },
  ];

  // Act
  const result = merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 });

  // Assert - Check if the function correctly merges the two arrays
  expect(result).toEqual(expected);
});

describe("removeCorrespondingItemsByTerm", () => {
  it("should remove the terms that include the 'filter term'", () => {
    // Arrange
    const terms1 = ["term1", "term2", "term3"];
    const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
    const filterTerm = "term2";

    const expected = {
      terms1: ["term1", "term3"],
      terms2: ["corresponding1", "corresponding3"],
    };

    // Act
    const result = removeCorrespondingItemsByTerm({
      terms1,
      terms2,
      filterTerm,
    });

    // Assert - Check if the function correctly removes the corresponding items
    expect(result.terms1).toEqual(expected.terms1);
    expect(result.terms2).toEqual(expected.terms2);
  });

  it("should remove the terms that include a 'partial filter term'", () => {
    // Arrange
    const terms1 = ["something", "this"];
    const terms2 = ["wicked", "way"];
    const filterTerm = "so";

    /**
     * Given `"so"`, `"something"`
     * and the corresponding `"wicked"` should be removed 🔥
     */
    const expected = {
      terms1: ["this"],
      terms2: ["way"],
    };

    // Act
    const result = removeCorrespondingItemsByTerm({
      terms1,
      terms2,
      filterTerm,
    });

    // Assert - Check if the function correctly removes the corresponding items
    expect(result.terms1).toEqual(expected.terms1);
    expect(result.terms2).toEqual(expected.terms2);
  });

  it("should remove the corresponding terms regardless of case", () => {
    // Arrange - Set up the initial state
    const initialState = {
      terms1: ["Something", "Nothing", "Anything"],
      terms2: ["Something else", "Nothing else", "Anything else"],
      filterTerm: "SOMETHING",
    };

    const expected = {
      terms1: ["Nothing", "Anything"],
      terms2: ["Nothing else", "Anything else"],
    };

    // Act - Call the function with the initial state
    const result = removeCorrespondingItemsByTerm(initialState);

    // Assert - Check if the function correctly removes the corresponding items
    expect(result.terms1).toEqual(expected.terms1);
    expect(result.terms2).toEqual(expected.terms2);
  });

  it("should return the original terms if the 'filter term' is empty", () => {
    // Arrange
    const terms1 = ["term1", "term2", "term3"];
    const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
    const filterTerm = "";

    const expected = {
      terms1: ["term1", "term2", "term3"],
      terms2: ["corresponding1", "corresponding2", "corresponding3"],
    };

    // Act
    const result = removeCorrespondingItemsByTerm({
      terms1,
      terms2,
      filterTerm,
    });

    // Assert - Check if the function correctly returns the original terms
    expect(result.terms1).toEqual(expected.terms1);
    expect(result.terms2).toEqual(expected.terms2);
  });
});
