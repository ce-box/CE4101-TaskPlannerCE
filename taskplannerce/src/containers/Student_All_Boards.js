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

  list_use = ["Academic", "Social", "Personal"];

  new_board() {
    document.getElementsByClassName("board-new-popup")[0].style.display = "block";
  }
  create() {
    document.getElementsByClassName("board-new-popup")[0].style.display = "none";
  }
  closeForm() {
    document.getElementsByClassName("board-new-popup")[0].style.display = "none";
  }

  render() {
    return (
      <div className="student_all_boards_container">
        <div className="board-new-popup">
          <form className="form-container">
          <h1>New Board</h1>
          <label for="name">Board Name </label>
          <br/>
          <input type="text" placeholder="Board Name" name="name" required />
          <br/>
          <label for="description">Description </label>
          <br/>
          <input type="text" placeholder="Description" name="description" required />
          <br/>
          <br/>
          <label for="name">Board Type </label>
          <br/>
          <span>Select the category that the purpose of the board fits into</span>
          <br/>
          <select className="canton_student">
                {this.list_use.map((object) => (
                  <option value="{object}">{object}</option>
                ))}
              </select>
          <br/>
          <button type="button" className="btn" onClick={()=> this.create()}>
            Create Board
          </button>
          <button type="button" className="btn close" onClick={()=> this.closeForm()}>
            Close
          </button>
          </form>
        </div>
        <input type="text" placeholder="Search" />
        <h1>Boards</h1>
        Last modified
        <div className="student_new_board">
          <div className="new_board">
            <div className="new_board_btn" onClick={() => this.new_board()}>+</div>
            New Board
          </div>
          {this.list_boards_new.map((object) => (
            <Student_Board_Item key={object.name} {...object} />
          ))}
        </div>
        <br/>
        <br/>
        <br/>
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
