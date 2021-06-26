// Style
import "../assets/styles/Professor_Board_Item.css"

import Professor_Home from "../containers/Professor_Home"
// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Professor_Board_Item({ name }) {
  function open_board(name) {
    Professor_Home.data = name;
  
    console.log(Professor_Home.data);
  }
  return (
      <div className="professor_board_item">
        <NavLink className="navbar-item" to="/Professor/Board">
        <div className="board_item" onClick={() => open_board(name)}>
          <div className="board_img"></div>
          <div class="board-icon"/>
          <span className="board-text">{name}</span>
        </div>
      </NavLink>
      </div>
  );
}

export default Professor_Board_Item;
