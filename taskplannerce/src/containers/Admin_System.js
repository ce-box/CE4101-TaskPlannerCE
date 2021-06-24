// Styles
import "../assets/styles/Admin_System.css";

// React
import React from "react";

import Admin_System_Item from "../components/Admin_System_Item";

class Admin_System extends React.Component {
  // DB
  list_system = [
    {
      name: "Hobbies",
      list: ["Movies", "Music", "Theater", "Sports"],
    },
    {
      name: "Board type",
      list: ["Academic", "Social", "Personal"],
    },
  ];
  new_system() {}
  render() {
    return (
      <div className="Admin_System">
        <h1>System</h1>
        <button type="button" className="btn" onClick={() => this.new_system()}>
          New Setting
        </button>
        <div className="admin_table_system">
          <ul>
            {this.list_system.map((object) => (
              <Admin_System_Item key={object.name} {...object} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Admin_System;
