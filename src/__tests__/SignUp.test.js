import SignUp from "../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockApartments from "../mockApartments";
import SignIn from "../pages/SignIn";


describe("SignUp />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
    })

    it("renders a text input for email", () => {
        // screen.logTestingPlaygroundURL() 
        expect(screen.getByRole('textbox'))
    })
    it("renders a text input for confirm password", () => {
        // screen.logTestingPlaygroundURL() 
        expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    })
    it("renders a text input for password", () => {
        // screen.logTestingPlaygroundURL() 
        expect(screen.getByPlaceholderText(/\b password\b/i)).toBeInTheDocument()
    })
    it("renders a submit button", () => {
        expect(screen.getByRole('button', {
            name: /submit/i
        })).toBeInTheDocument
    })
    it("renders a signin link", () => {
        expect(screen.getByRole('link', {
            name: /login/i
        }))
    })
    it("renders Already registered instructions", () => {
        expect(screen.getByText(/already registered, here\./i)).toBeInTheDocument
    })
})