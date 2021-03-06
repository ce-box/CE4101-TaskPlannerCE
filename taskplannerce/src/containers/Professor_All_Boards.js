// Styles
import "../assets/styles/Professor_All_Boards.css";

// Component
import Professor_Board_Item from "../components/Professor_Board_Item";
// React
import React, { Component } from "react";

class Professor_All_Boards extends React.Component {
  list_boards = [
    { name: "Help" },
    { name: "Datos" },
    { name: "Lenguaje" },
    { name: "Mate" },
  ];

  render() {
    return (
      <div className="professor_all_boards_container">
        <div class="search_all_boards">
          <span class="search-icon"></span>
          <input type="text" placeholder="Search a board"></input>
        </div>
        <h1>Boards</h1>
        <span className="all">All Boards</span>
        <div className="professor_all_board">
          {this.list_boards.map((object) => (
            <Professor_Board_Item key={object.name} {...object} />
          ))}
        </div>
      </div>
    );
  }

  /*
  componentDidMount() {
    fetch("http://18.119.101.103:3000/config/types")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log);
  }*/
}

export default Professor_All_Boards;
