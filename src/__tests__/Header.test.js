import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header currentUser={false} />
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
        name: /sign in/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called SignIn", () => {
    userEvent.click(screen.getByText(/sign in/i));
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
  it("has a link to MyIndex with correct role", () => {
    const currentUser = true;
    render(
      <BrowserRouter>
        <Header currentUser={currentUser} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("link", {
        name: /MyIndex/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called My Index", () => {
    const currentUser = true;
    render(
      <BrowserRouter>
        <Header currentUser={currentUser} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/MyIndex/i));
    expect(screen.getByText(/MyIndex/i)).toBeInTheDocument();
  });
  it("has a link to Log Out with correct role", () => {
    const currentUser = true;
    render(
      <BrowserRouter>
        <Header currentUser={currentUser} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole("link", {
        name: /log out/i,
      })
    ).toBeInTheDocument();
  });
  it("has a clickable link called Log Out", () => {
    const currentUser = true;
    render(
      <BrowserRouter>
        <Header currentUser={currentUser} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/log out/i));
    expect(screen.getByText(/log out/i)).toBeInTheDocument();
  });
});
