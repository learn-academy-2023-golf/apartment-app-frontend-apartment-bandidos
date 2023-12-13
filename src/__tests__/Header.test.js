import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
  it("displays header with correct role", () => {
    expect(
      screen.getByRole("link", {
        name: /apartment bandito's/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called Apartment Bandito's", () => {
    userEvent.click(screen.getByText(/apartment bandito's/i));
    expect(screen.getByText(/apartment bandito's/i)).toBeInTheDocument();
  });
  it("has a button with correct role", () => {
    expect(
      screen.getByRole("button", {
        name: /toggle navigation/i,
      })
    ).toBeInTheDocument();
  });
  it("has a link to Index with correct role", () => {
    expect(
      screen.getByRole("link", {
        name: /index/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called Index", () => {
    userEvent.click(screen.getByText(/index/i));
    expect(screen.getByText(/index/i)).toBeInTheDocument();
  });
  it("has a link to SignIn with correct role", () => {
    expect(
      screen.getByRole("link", {
        name: /signin/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called SignIn", () => {
    userEvent.click(screen.getByText(/signin/i));
    expect(screen.getByText(/signin/i)).toBeInTheDocument();
  });
});
