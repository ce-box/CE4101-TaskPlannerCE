// Styles
import '../assets/styles/Student_Home.css';

// Components
import Header_Professor from '../components/Header_Professor';
import SideBar_Professor from '../components/SideBar_Professor';


// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Professor_Report from './Professor_Report';
import Professor_Dashboard from './Professor_Dashboard';

class Professor_Home extends React.Component {
    render() {
        return (
            <div className="container_home">
                <Router>
                    <Header_Professor />
                    <SideBar_Professor />
                    <Switch>
                        <Route path="/Professor/Reports">
                            <Professor_Report/>
                        </Route>
                        <Route path="/Professor/Board">
                        </Route>
                        <Route path="/Professor/Dashboard">
                            <Professor_Dashboard/>
                        </Route>
                        <Route path="/Professor/Profile">
                        </Route>
                        <Route path="/Professor/Home">
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Professor_Home;
