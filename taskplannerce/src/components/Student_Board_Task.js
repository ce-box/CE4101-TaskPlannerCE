// Styles

// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Student_Board_Task({ name }) {

  return (
    <div className="board_student_task">
        {name}
    </div>
  );
}

export default Student_Board_Task;
