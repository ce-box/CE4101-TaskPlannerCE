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
      list: ["Movies", "Music", "Theater"],
    },
    {
      name: "Board type",
      list: ["Academic", "Social", "Personal"],
    },
  ];
  new_system() {}
  render() {
    return (
      <main className="dashboard_student">
        <section className="admin-main-system">
          <div className="admin-main-system">
            <h1>System</h1>
          </div>
          <div className="admin-system-new">
            <a className="new-request" onClick={() => this.new_system()}>
              New Setting
            </a>
          </div>
        </section>
        <section className="admin_table-container">
          <div className="admin_table_system">
            <ul className="admin_table_ul">
              {this.list_system.map((object) => (
                <Admin_System_Item key={object.name} {...object} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Admin_System;
