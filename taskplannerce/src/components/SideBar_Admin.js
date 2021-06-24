// Styles
import '../assets/styles/SideBar_Admin.css';

// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function SideBar_Admin() {
  return (
    <div className="side-bar-admin">
      <NavLink className="navbar-item" to="/Admin/Home">
        Dashboard
      </NavLink>
      <NavLink className="navbar-item" to="/Admin/Admin_Zone">
        Admin Zone
      </NavLink>
      <NavLink className="navbar-item" to="/Admin/System">
        System
      </NavLink>
    </div>
  );
}

export default SideBar_Admin;
