import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import background from '../assets/aptlayout2.JPG'

describe("<Home />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
      
    });
    it("displays a message", () => {
        expect(
         screen.getByText("Find the best deals for apartments here!").toBeInTheDocument   
        )
    })
    it("Displays a background image", () => {
         const image = screen.getByTestId('background') 
         expect(image).toBeInTheDocument
         expect(image).toHaveStyle("backgroundImage: `url(${background})`")
    })
})