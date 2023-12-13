import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { render,screen } from "@testing-library/react"

describe("<Footer />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    }) 
    it("displays footer", () => {

    })

})