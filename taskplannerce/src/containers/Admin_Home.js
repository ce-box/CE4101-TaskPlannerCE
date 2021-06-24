// Styles
import '../assets/styles/Admin_Home.css';

// Components
import Header_Admin from "../components/Header_Admin";
import SideBar_Admin from "../components/SideBar_Admin";

import Admin_Zone from './Admin_Zone';
import Admin_System from './Admin_System';
import Admin_Dashboard from './Admin_Dashboard';

// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Admin_Home extends React.Component {
    render() {
        return (
            <div className="container_admin">
                <Router>
                    <Header_Admin/>
                    <SideBar_Admin/>
                    <Switch>
                        <Route path="/Admin/Admin_Zone">
                            <Admin_Zone />
                        </Route>
                        <Route path="/Admin/System">
                            <Admin_System />
                        </Route>
                        <Route path="/Admin/Profile">
                        </Route>
                        <Route path="/Admin/Home">
                            <Admin_Dashboard />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Admin_Home;