import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from 'react';
import errorPic from '../assets/notfound.jpg';

describe ("<NotFound />", () => {
    it ("has an image", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const image = screen.getByRole("img")
        expect(image).toHaveAttribute("src", errorPic)
    })
})