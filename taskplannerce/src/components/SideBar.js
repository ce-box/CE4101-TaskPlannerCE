// Styles
import '../assets/styles/SideBar.css';

// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="side-bar">
      <NavLink className="navbar-item" to="/Student/Home">
        Boards
      </NavLink>
      <NavLink className="navbar-item" to="/Student/Dashboard">
        Dashboard
      </NavLink>
      <NavLink className="navbar-item" to="/Student/Friends">
        Friends
      </NavLink>
    </div>
  );
}

export default SideBar;
