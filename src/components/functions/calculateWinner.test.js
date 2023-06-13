import "@testing-library/react";
import "@testing-library/jest-dom";
import calculateWinner from "./calculateWinner";

// Arrange-This calculates how many Xs or Os that are horizontal, vertical, and diagonal.
describe ("the number of Xs or Os" , () => {
  it ("should return null when no plays are made", () => {
    // Act- where you actually execute the code you're testing.
    const result = calculateWinner([Array(9).fill(null)])
    // Assert-to verify the code being tested behaves as expected.
    expect(result).toBe(null);
  });

  it ("should calculate how many Xs or Os are vertical", () => {
        // Act- where you actually execute the code you're testing.
    
        // Assert-to verify the code being tested behaves as expected.
  });
     
  it ("should calculate how many Xs or Os are diagonal", () => {
        // Act- where you actually execute the code you're testing.
    
        // Assert-to verify the code being tested behaves as expected.
  }); 
    
})
    