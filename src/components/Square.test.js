import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Square from "./Square.js";
import "@testing-library/jest-dom/extend-expect";
import { waitFor } from "@testing-library/react";

describe("click on squares", () => {
    // Arrange- to transform a React component into the DOM node that the browser can display on screen. Set up conditions for the test.
    it("should show an X upon clicking the square", () => {
        render(<Square />)

        // Act- where you actually execute the code you're testing.
        let square = screen.findByRole("button", { name: "square" });
        fireEvent.click(square);
    
        // Update our square variable with the new state after clicking.
        square = screen.findByRole("button", { name: "square" });

        //Assert- to verify the code being tested behaves as expected. 
        waitFor(() => expect(square).toHaveTextContent("X"));
    });

    it("should show an O upon clicking the square", () => {
        render(<Square />)

        // Act- where you actually execute the code you're testing.
        let square = screen.findByRole("button", { name: "square" });
        fireEvent.click(square);
    
        // Update our square variable with the new state after clicking.
        square = screen.findByRole("button", { name: "square" });

        //Assert- to verify the code being tested behaves as expected. 
        waitFor(() => expect(square).toHaveTextContent("O"));
    });
})