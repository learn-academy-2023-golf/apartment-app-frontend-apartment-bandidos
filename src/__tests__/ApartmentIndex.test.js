import ApartmentIndex from "../pages/ApartmentIndex";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockApartments from "../mockApartments";

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    );
    
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /Here is a list of our apartments/i,
      })
    ).toBeInTheDocument();
  });
  it("displays a heading", () => {
    expect(
    screen.getByRole('heading', {
        name: /unit: 9a, 101 rimrock, san diego, ca\./i
      })).toBeInTheDocument
  })
  it("displays a heading", () => {
    expect(
    screen.getByRole('heading', {
        name: /\$1800/i
      })).toBeInTheDocument
  })
  it("displays an image", () => {
    mockApartments.map((apartment ,index) => {
        const image = screen.getByAltText(`image of ${index}`)
        expect(image).toBeInTheDocument()
    })
  })

});