// Style

// React
import React from "react";

function Admin_System_Item({ name, list }) {
  function new_item() {
    // DB
    console.log({ name });
  }
  return (
    <li>
      <div className="admim_system_item">
        <p>{name}</p>
        {list.map((object) => (
          <div>
            <input type="checkbox" name="checkbox" value="{object}"/>
            <span>{object}</span>
          </div>
        ))}
        <br/>
        <div className="sign">
          <a className="button_delete" onClick={new_item}>
            Add Item
          </a>
        </div>
      </div>
    </li>
  );
}

export default Admin_System_Item;
