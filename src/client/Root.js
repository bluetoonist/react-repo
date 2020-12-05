import React from "react"
import  {BrowserRouter} from "react-router-dom"
import App from "../shared/App.js"

export default function Root() {

    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )

}