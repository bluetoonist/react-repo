import React from "react";
import {Route} from "react-router-dom";
import {Home,About,Login} from "../pages";

export default function App() {

    return (
        <>
            <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/hello" component={Home} />

                <Route exact path="/about" component={About} />
            </div>

        </>

    )

}