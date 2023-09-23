import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
    it("Should load contact us component", () => {
        render(<Contact />);
      
        const heading = screen.getByRole("heading");
      
        expect(heading).toBeInTheDocument();
      });
      
      test("Should load button inside contact us component", () => {
        render(<Contact />);
      
        const button = screen.getByRole("button");
      
        expect(button).toBeInTheDocument();
      });
      
      test("Should load inputname inside contact us component", () => {
        render(<Contact />);
      
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
      });
      
      test('Should load input boxes on the Contact component',()=>{
          render(<Contact/>);
      
          // Querying
          const inputBoxes = screen.getAllByRole('textbox')
      // Assertion
          expect(inputBoxes.length).toBe(2)
      })
})

