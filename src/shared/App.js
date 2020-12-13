import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {Home,About,Login,MentionUpload,SignUp,Django,Labs} from "../pages";

export default function App() {

    return (
        <>
        <BrowserRouter>
  
            <div>
                <Route exact path="/" component={Login} />
                <Route exact path="/hello" component={Home} />
                <Route exact path="/django" component={Django} />
                <Route exact path="/about" component={About} />
                <Route exact path="/auth/mention" component={MentionUpload} />
                <Route exact path="/auth/signup" component={SignUp} />
                <Route exact path="/labs/upload" component={Labs} />
                
            </div>
            </BrowserRouter>

        </>

    )

}