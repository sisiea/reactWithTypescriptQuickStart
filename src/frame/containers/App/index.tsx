import * as React from 'react';
import { Link } from 'react-router';
import {connect} from "react-redux";
import { Carousel } from 'antd';
import './app';

class App extends React.Component<any, any> {
    render() {
        const imgArray = [];
        const {children} = this.props;
        return (
            <div>
                <div className="appNav">
                    <Link to="/about">About</Link>
                </div>
                <div className="appBanner">
                    <Carousel autoplay>
                        <div><h3>苏</h3></div>
                        <div><h3>张</h3></div>
                        <div><h3>哈</h3></div>
                        <div><h3>哈</h3></div>
                    </Carousel>
                </div>
                {
                    children
                }
                <div className = "appFooter">
                 Footer
                </div>
            </div>
        )
    }
}

export default connect()(App)