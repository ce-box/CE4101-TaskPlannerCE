// Style
import "../assets/styles/Professor_Board_Item.css"
// React
import React from "react";

function Professor_Board_Item({ name }) {
  return (
      <div className="professor_board_item">
        {name}
      </div>
  );
}

export default Professor_Board_Item;
