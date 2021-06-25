// Styles
import "../assets/styles/Student_All_Boards.css"

// Component
import Student_Board_Item from "../components/Student_Boart_Item";

// React
import React from "react";

class Student_All_Boards extends React.Component {
  list_boards = [
    { name: "Help" },
    { name: "Datos" },
    { name: "Lenguaje" },
    { name: "Mate" },
  ];
  list_boards_new = [{ name: "Help" }, { name: "Datos" }];

  render() {
    return (
      <div className="student_all_boards_container">
        <input type="text" placeholder="Search" />
        <h1>Boards</h1>
        Last modified
        <div className="student_new_board">
          <div className="new_board">
            New Board
          </div>
          {this.list_boards_new.map((object) => (
            <Student_Board_Item key={object.name} {...object} />
          ))}
        </div>
        <br/>
        All Boards
        <div className="student_all_board">
          {this.list_boards.map((object) => (
            <Student_Board_Item key={object.name} {...object} />
          ))}
        </div>
      </div>
    );
  }
}

export default Student_All_Boards;
