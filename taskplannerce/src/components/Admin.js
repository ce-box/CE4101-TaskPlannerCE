// Style
import "../assets/styles/Admin.css";

// React
import React from "react";

function Admin({ name }) {
  function eliminate() {
    // DB
    console.log({ name });
  }
  return (
    <li>
      <div className="admin_name">
        <p>{name}</p>
        <div className="sign">
          <a className="button_delete" onClick={eliminate}>
            Delete
          </a>
        </div>
      </div>
      <hr className="separator"/>
    </li>
  );
}

export default Admin;
