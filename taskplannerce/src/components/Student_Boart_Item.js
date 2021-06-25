// Style
import "../assets/styles/Student_Board_Item.css"
// React
import React from "react";

function Student_Board_Item({ name }) {
  return (
      <div className="student_board_item">
        {name}
      </div>
  );
}

export default Student_Board_Item;