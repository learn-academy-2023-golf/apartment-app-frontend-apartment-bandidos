import ApartmentNew from "../pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import mockApartments from "../mockApartments";
import SignIn from "../pages/SignIn";


describe("SignIn />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        )
    })

    it("renders a text input for email", () => {
        expect(screen.getByRole('textbox')
        ).toBeInTheDocument()
    })
    it("renders a text input for password", () => {
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    })
    it("renders a submit button", () => {
        expect(screen.getByRole('button', {
            name: /submit/i
        })).toBeInTheDocument
    })
    it("renders a signup link", () => {
        expect(screen.getByRole('link', {
            name: /signup/i
        }))
    })
    it("renders Not registered instructions", () => {
        expect(screen.getByText(/not registered, here\./i)).toBeInTheDocument
    })

})