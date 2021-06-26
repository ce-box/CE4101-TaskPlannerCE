// Styles
import "../assets/styles/Header_Admin.css";

import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function help() {
  var help_popup = document.getElementsByClassName("help_popup");
  help_popup[0].classList.toggle("show");
}

function notification() {
  var help_popup = document.getElementsByClassName("notification_popup");
  help_popup[0].classList.toggle("show");
}

function profile() {
  var help_popup = document.getElementsByClassName("profile_popup");
  help_popup[0].classList.toggle("show");
}

function Header_Admin() {
  var information = [
    {
      name: "Fulano Rodrigez Perez",
      mail: "fulanito@xtec.cr",
      plan: "Task Planner Admin",
    },
  ];
  return (
    <header className="header_Admin">
      <div className="image" />
      <div className="help_admin" onClick={help}></div>
      <div className="notification_admin" onClick={notification}></div>
      <div className="profile_admin" onClick={profile}></div>
      <div className="help_popup">
        <p>Help</p>
        <div className="help_img"></div>
      </div>
      <div className="notification_popup">Your Notifications</div>
      <div className="profile_popup">
        <span className="name_popup">{information[0].name}</span>
        <br />
        {information[0].mail}
        <br />
        {information[0].plan}
        <br />
        <hr className="separator" />
        <NavLink className="navbar-item" to="/Admin/Profile">
          Your Profile
        </NavLink>
        <hr className="separator" />
        <a href="/" className="sign_out_a">
          Sign out
        </a>
      </div>
    </header>
  );
}

export default Header_Admin;
