import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import { render,screen } from "@testing-library/react"

describe("<Header />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    }) 
    it("displays header", () => {

    })

})