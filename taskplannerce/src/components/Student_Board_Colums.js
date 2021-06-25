// Styles

import Student_Board_Task from "./Student_Board_Task";
// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function new_task() {
  document.getElementsByClassName("task-new-popup")[0].style.display = "block";
}
function create() {
  document.getElementsByClassName("task-new-popup")[0].style.display = "none";
}
function closeForm() {
  document.getElementsByClassName("task-new-popup")[0].style.display = "none";
}

function Student_Board_Columns({ name }) {
  var list_task = [
    { name: "hola" },
    { name: "conversacion" },
    { name: "Adios" },
  ];

  return (
    <div className="board_student_columns">
      <div className="task-new-popup">
        <form className="form-container">
          <h1>New Task</h1>
          <div className="left_new_task">
            <input type="text" placeholder="Task Title" />
            <br />
            <label for="description">Description </label>
            <br />
            <input
              type="text"
              placeholder="Description"
              name="description"
              required
            />
          </div>
          <div className="right_new_task">
            <label for="description">Assignee </label>
            <br />
            <select className="canton_student">
                <option disabled selected>
                  No one
                </option>
              </select>
            <br />
            <hr className="separator" />
            <label for="description">TasK Priority </label>
            <br />
            <select className="canton_student">
                <option disabled selected>
                  No one
                </option>
              </select>
            <br />
            <hr className="separator" />
            <label for="description">Start </label>
            <br />
            <input type="date" id="Start" name="Start"></input>
            <br />
            <label for="description">Due </label>
            <br />
            <input type="date" id="Due" name="Due"></input>
            <br />
            <hr className="separator" />
            <label for="description">Dependencies </label>
          </div>
          <button type="button" className="btn" onClick={create}>
            Create Board
          </button>
          <button type="button" className="btn close" onClick={closeForm}>
            Close
          </button>
        </form>
      </div>
      {name}
      <a className="button_new" onClick={new_task}>
        +
      </a>
      {list_task.map((object) => (
        <Student_Board_Task key={object.name} {...object} />
      ))}
    </div>
  );
}

export default Student_Board_Columns;
