import ApartmentNew from "../pages/ApartmentNew";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockApartments from "../mockApartments";

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    );
  });
  it("renders heading", () => {
    expect(screen.getByText(/address/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Address'", () => {
    expect(
      screen.getByRole("textbox", {
        name: /address/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/city/i)).toBeInTheDocument();
  });
  it("renders a text input for 'City'", () => {
    expect(
      screen.getByRole("textbox", {
        name: /city/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/square footage/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Square footage'", () => {
    expect(
      screen.getByRole("textbox", {
        name: /square footage/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/state/i)).toBeInTheDocument();
  });
  it("renders a text input for 'State'", () => {
    expect(
      screen.getByRole("textbox", {
        name: /state/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/price/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Price'", () => {
    expect(screen.getByPlaceholderText(/\$0\.00/i)).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/bed/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Bed'", () => {
    expect(
      screen.getByRole("spinbutton", {
        name: /bed bath pets image url/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/bath/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Bath'", () => {
    expect(
      screen.getByRole("spinbutton", {
        name: /bed bath pets image url/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/pets/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Pets'", () => {
    expect(
      screen.getByRole("spinbutton", {
        name: /bed bath pets image url/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Image'", () => {
    expect(
      screen.getByRole("spinbutton", {
        name: /bed bath pets image url/i,
      })
    ).toBeInTheDocument();
  });
  it("renders heading", () => {
    expect(screen.getByText(/unit/i)).toBeInTheDocument();
  });
  it("renders a text input for 'Unit'", () => {
    expect(
      screen.getByRole("spinbutton", {
        name: /bed bath pets image url/i,
      })
    ).toBeInTheDocument();
  });
  it("renders a Button", () => {
    expect(
      screen.getByRole("button", {
        name: /sign in/i,
      })
    ).toBeInTheDocument();
  });
});
