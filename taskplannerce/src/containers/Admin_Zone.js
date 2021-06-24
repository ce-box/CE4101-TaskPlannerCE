// Styles
import "../assets/styles/Admin_Zone.css"
// React
import React from "react";

import Admin from "../components/Admin";

class Admin_Zone extends React.Component {
  // DB
  admin_lists = [
    {
      name: "Luis Diego Noguera",
    },
    {
      name: "Luis Barboza",
    },
  ];
  new_admin() {}
  render() {
    return (
      <div className="Admin_Zone">
        <h1>Admin Zone</h1>
        <input type="text" placeholder="Search" />
        <button type="button" className="btn" onClick={() => this.new_admin()}>
          New Admin
        </button>
        <br />
        <div className="admin_table">
          <ul>
            {this.admin_lists.map((object) => (
              <Admin key={object.name} {...object} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Admin_Zone;
