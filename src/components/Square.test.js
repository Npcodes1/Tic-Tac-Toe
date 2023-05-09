import { render, screen } from "@testing-library/react"
import fireEvent from "@testing-library/user-event"
import Square from "./Square.js"

describe("click on squares", () => {
    // Arrange- to transform a React component into the DOM node that the browser can display on screen. Set up conditions for the test.
    it("should show an X or O upon clicking the square", () => {
        render(<Square />)

        // Act- where you actually execute the code you're testing.
        let square = screen.getByRole("button", { hidden: true });
        fireEvent.click(square);
    
        // Update our square variable with the new state after clicking.
        square = screen.getByRole("button", { hidden: false });

        //Assert- to verify the code being tested behaves as expected. 
        expect(square).toHaveTextContent("X");
        expect(square).toHaveTextContent("O");
    });
})