// Styles

// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Professor_Board_Task({ name }) {

  return (
    <div className="board_professor_task">
        {name}
    </div>
  );
}

export default Professor_Board_Task;
