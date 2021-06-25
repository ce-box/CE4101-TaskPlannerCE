// Styles

import Student_Board_Task from "./Student_Board_Task";
// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Student_Board_Columns({ name }) {
    var list_task = [{ name: "hola" }, { name: "conversacion" }, { name: "Adios" }];

  return (
    <div className="board_student_columns">
        {name}
        {list_task.map((object) => (
            <Student_Board_Task key={object.name} {...object} />
        ))}
    </div>
  );
}

export default Student_Board_Columns;
