// Styles
import "../assets/styles/Professor_Board.css";

import Professor_Home from "./Professor_Home";
import Professor_Board_Columns from "../components/Professor_Board_Columns";
// React
import React from "react";

class Professor_Board extends React.Component {
  list_columns = [{ name: "To Do" }, { name: "In Progress" }, { name: "Done" }];

  render() {
    return (
      <div className="board_professor">
        <h1> {Professor_Home.data}</h1>
        <div className="board_professor_row">
        {this.list_columns.map((object) => (
            <Professor_Board_Columns key={object.name} {...object} />
          ))}
        </div>
      </div>
    );
  }
}

export default Professor_Board;
