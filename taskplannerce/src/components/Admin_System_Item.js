// Style
import "../assets/styles/Admin_System_Item.css";

// React
import React from "react";

function Admin_System_Item({ name, list }) {
  function new_item() {
    // DB
    console.log({ name });
  }
  return (
    <li className="admim_system_item_main">
      <div className="admim_system_item">
        <section className="botton-section-admin-1">
          <div>
            <h2 className="title-admin-system">{name}</h2>
          </div>
          <div className="item-admin-system">
            {list.map((object) => (
              <div className="item-item-admin-system">
                <input type="checkbox" name="checkbox" value="{object}"/>
                <span>{object}</span>
              </div>
            ))}
            <br/>
          </div>
        </section>
        <section className="botton-section-admin-2">
          <div className="sign_item_system">
            <a className="new-request-admin-item" onClick={new_item}>
              Add Item
            </a>
          </div>
        </section>
      </div>
    </li>
  );
}

export default Admin_System_Item;
