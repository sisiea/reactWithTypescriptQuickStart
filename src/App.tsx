import * as React from "react";
import { Router, RouteProps, Route, Link, IndexRoute, hashHistory, browserHistory, createMemoryHistory } from 'react-router'
import Constant = require("./Constant");
import * as $ from "jquery";
const {myhistory, vrid} = Constant;
console.log(vrid);

// $.ajax({
//     url:"http://localhost:8080/api/total",
//     async:true,
//     success:(data)=>{
//     }
// })

interface HomeRouteProps extends RouteProps {
    homekey?: any
}
class HomeRoute extends React.Component<HomeRouteProps, any> { }
class App extends React.Component<any, any> {
    render() {
        return (
            <Router history={myhistory}>
                <Route path="/" component={Common}>
                    <div>
                        <HomeRoute path="/home" component={Home} homekey={this.props.mykey} />
                        <Route path="/about" component={About} />
                    </div>
                </Route>
            </Router>
        )
    }
}
class Common extends React.Component<any, any>{
    onHomeClick() {
        myhistory.push("/home");
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.onHomeClick.bind(this)}>Home</li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {this.props.children}
            </div>

        )
    }
}
class Home extends React.Component<any, any>{
    render() {
        return (
            <div>Hello from Home!</div>
        )
    }
}
// const Home = () => <div>Hello from Home!</div>
const About = () => <div>We are located at 555 Jackson St.</div>
export default App