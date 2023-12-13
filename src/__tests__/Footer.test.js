import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import { render, screen } from "@testing-library/react";

describe("<Footer />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
  it("displays footer", () => {
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
  it("has footer with correct role", () => {
    expect(
      screen.getByText(/© 2023 greg, michael, corey & enrique/i)
    ).toBeInTheDocument();
  });
});
