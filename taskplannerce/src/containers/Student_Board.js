// Styles
import "../assets/styles/Student_Board.css";

import Student_Home from "./Student_Home";
import Student_Board_Columns from "../components/Student_Board_Colums";
// React
import React from "react";

class Student_Board extends React.Component {
  list_columns = [{ name: "To Do" }, { name: "In Progress" }, { name: "Done" }];

  render() {
    return (
      <div className="board_student">
        <h1> {Student_Home.data} </h1>
        <div className="board_student_row">
          {this.list_columns.map((object) => (
            <Student_Board_Columns key={object.name} {...object} />
          ))}
          <div className="new_column">+</div>
        </div>
      </div>
    );
  }
}

export default Student_Board;
