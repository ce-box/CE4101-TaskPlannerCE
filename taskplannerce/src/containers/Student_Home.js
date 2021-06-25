// Styles
import "../assets/styles/Student_Home.css";

// Components
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Student_Friends from "../containers/Student_Friends";
import Student_All_Boards from "./Student_All_Boards";
import Student_Dashboard from "./Student_Dashboard";

// React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Student_Home extends React.Component {
  render() {
    return (
      <div className="container_home">
        <Router>
          <Header />
          <SideBar />
          <Switch>
            <Route path="/Student/Friends">
              <Student_Friends />
            </Route>
            <Route path="/Student/Board"></Route>
            <Route path="/Student/Dashboard">
              <Student_Dashboard />
            </Route>
            <Route path="/Student/Profile"></Route>
            <Route path="/Student/Home">
              <Student_All_Boards />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Student_Home;
