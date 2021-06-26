// Styles
import '../assets/styles/Student_Home.css';

// Components
import Header_Professor from '../components/Header_Professor';
import SideBar_Professor from '../components/SideBar_Professor';
import Professor_Report from './Professor_Report';
import Professor_Dashboard from './Professor_Dashboard';
import Professor_All_Boards from './Professor_All_Boards';
import Professor_Board from './Professor_Board';

// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class Professor_Home extends React.Component {
    data = "";
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
                            <Professor_Board />
                        </Route>
                        <Route path="/Professor/Dashboard">
                            <Professor_Dashboard/>
                        </Route>
                        <Route path="/Professor/Profile">
                        </Route>
                        <Route path="/Professor/Home">
                            <Professor_All_Boards />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Professor_Home;
