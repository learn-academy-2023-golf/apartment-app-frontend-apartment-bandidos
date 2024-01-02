import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockApartments from "../mockApartments";
import ApartmentProtectedIndex from "../pages/ApartmentProtectedIndex";

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1,
    };
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex
          currentUser={currentUser}
          apartments={mockApartments}
        />
      </BrowserRouter>
    );
  });
  it("renders the card image", () => {
    expect(
      screen.getByRole("img", {
        name: /image of 0/i,
      })
    ).toBeInTheDocument();
  });
  it("displays the address", () => {
    expect(
      screen.getByRole("heading", {
        name: /unit: 9a, 101 rimrock, san diego, ca\./i,
      })
    );
  });
  it("displays the price", () => {
    expect(
      screen.getByRole("heading", {
        name: /\$1800/i,
      })
    );
  });
  it("displays the BD/BA count", () => {
    expect(
      screen.getByRole("heading", {
        name: /bd\/ba 1/i,
      })
    ).toBeInTheDocument();
  });
  it("has an info button", () => {
    expect(
      screen.getByRole("button", {
        name: /info 1/i,
      })
    );
  });
  it("has an edit button", () => {
    expect(
      screen.getByRole("button", {
        name: /edit 1/i,
      })
    );
  });
  it("has a delete button", () => {
    expect(
      screen.getByRole("button", {
        name: /delete 1/i,
      })
    );
  });
});
