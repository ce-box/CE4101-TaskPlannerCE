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
  new_admin() {
    document.getElementsByClassName("admin-new-popup")[0].style.display = "block";
  }
  create() {
    document.getElementsByClassName("admin-new-popup")[0].style.display = "none";
  }
  closeForm() {
    document.getElementsByClassName("admin-new-popup")[0].style.display = "none";
  }
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
        <div className="admin-new-popup">
          <form className="form-container">
          <h1>New Admin</h1>
          <input type="text" placeholder="Institution Mail" name="mail_new" required />
          <br/>
          <input type="text" placeholder="Password" name="pass_new" required />
          <br/>
          <button type="button" className="btn" onClick={()=> this.create()}>
            Create Admin
          </button>
          <button type="button" className="btn close" onClick={()=> this.closeForm()}>
            Close
          </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin_Zone;
