// Style
import "../assets/styles/Student_Board_Item.css";

import Student_Home from "../containers/Student_Home";
// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function open_board(name) {
  Student_Home.data = name;
  
  console.log(Student_Home.data);
}

function Student_Board_Item({ name }) {
  return (
    <div className="student_board_item" onClick={() => open_board(name)}>
      <NavLink className="navbar-item" to="/Student/Board">
        {name}
      </NavLink>
    </div>
  );
}

export default Student_Board_Item;
