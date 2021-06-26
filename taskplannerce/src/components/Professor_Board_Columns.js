// Styles

import Professor_Board_Task from "../components/Professor_Board_Task";
// React
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Professor_Board_Columns({ name }) {
  var list_task = [
    { name: "hola" },
    { name: "conversacion" },
    { name: "Adios" },
  ];

  return (
    <div className="board_professor_columns">
      <div className="columns">
        <span className="title_span">{name}</span>
        {list_task.map((object) => (
          <Professor_Board_Task key={object.name} {...object} />
        ))}
      </div>
    </div>
  );
}

export default Professor_Board_Columns;