import ApartmentShow from "../pages/ApartmentShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockApartments from "../mockApartments";
import ApartmentIndex from "../pages/ApartmentIndex";

describe("<ApartmentShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route
            path="apartmentshow/:id"
            element={<ApartmentShow apartments={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders square_footage", () => {
    expect(
      screen.getByText(`Square footage: ${mockApartments[0].square_footage}`)
    ).toBeInTheDocument();
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /unit: 9a, 101 rimrock, san diego, ca\./i,
      })
    ).toBeInTheDocument;
  });
  it("displays a heading", () => {
    expect(
      screen.getByRole("heading", {
        name: /\$1800/i,
      })
    ).toBeInTheDocument;
  });
  it("displays an image", () => {
    expect(
      screen.getByRole("img", {
        name: /image of 1/i,
      })
    ).toBeInTheDocument();
  });
});
