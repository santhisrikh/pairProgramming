import React from "react"
import {Route}  from "react-router-dom"
import Random from "../components/Random"
// import ListQuotes from "../components/ListQuotes"


const Routes = ()=>{
    return (
        <React.Fragment>
            <Route exact path = "/" component = {Random}></Route>
            {/* <Route path = "/list" component = {ListQuotes}></Route> */}
        </React.Fragment>
    )
}
export default Routes