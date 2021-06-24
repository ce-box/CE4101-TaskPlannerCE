// Styles
import '../assets/styles/SideBar_Admin.css';

// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function SideBar_Professor() {
  return (
    <div className="side-bar-admin">
      <NavLink className="navbar-item" to="/Professor/Home">
        Board
      </NavLink>
      <NavLink className="navbar-item" to="/Professor/Dashboard">
        Dashboard
      </NavLink>
      <NavLink className="navbar-item" to="/Professor/Reports">
        Reports
      </NavLink>
    </div>
  );
}

export default SideBar_Professor;
