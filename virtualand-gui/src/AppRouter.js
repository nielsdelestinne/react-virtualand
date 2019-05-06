import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Experiment01 from "./experiment01/Experiment01";
import "./AppRouter.css"

export default class AppRouter extends React.Component {

    render() {
        return (
            <Router>
                <nav>
                    <ul className="nav">
                        {/*<li className="nav-item active">*/}
                        {/*    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="/exp01/">Experiment 01</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/">Pricing</Link>
                        </li>
                    </ul>
                </nav>

                {/*<Route path="/" exact component={App}/>*/}
                <Route path="/exp01/" component={Experiment01}/>

            </Router>
        );
    }

}