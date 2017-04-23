import * as React from "react";
import { IndexRoute, Route } from "react-router";
import App from "./containers/App"
// const Home = () => <div>Hello from Home!</div>
const About = () => <div>We are studying now !!</div>
export default (
    <Route path="/" component= { App } >
        <Route path="/about" component= { About }/>
    </Route>
)
