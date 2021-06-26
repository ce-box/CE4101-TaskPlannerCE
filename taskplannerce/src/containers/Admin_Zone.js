// Styles
import "../assets/styles/Admin_Zone.css";
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

  //DB
  list_board = ["Lenguaje - Wazitico", "DataBase", "CC"];

  new_admin() {
    document.getElementsByClassName("admin-new-popup")[0].style.display =
      "block";
  }
  create() {
    document.getElementsByClassName("admin-new-popup")[0].style.display =
      "none";
  }
  closeForm() {
    document.getElementsByClassName("admin-new-popup")[0].style.display =
      "none";
  }
  render() {
    return (
      <main className="Admin_Zone">
        <section className="student_friends">
          <h1 className="main">Admin Zone</h1>
          <div className="main-input-external">
            <div class="main-input-container">
              <span class="search-icon"></span>
              <input type="text" placeholder="Search"></input>
            </div>
            <a className="new-request">New Request</a>
          </div>
        </section>
        <section>
          <select className="select">
            {this.list_board.map((object) => (
              <option value="{object}">{object}</option>
            ))}
          </select>
        </section>
        <section>
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
              <input
                type="text"
                placeholder="Institution Mail"
                name="mail_new"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Password"
                name="pass_new"
                required
              />
              <br />
              <button
                type="button"
                className="btn"
                onClick={() => this.create()}
              >
                Create Admin
              </button>
              <button
                type="button"
                className="btn close"
                onClick={() => this.closeForm()}
              >
                Close
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }
}

export default Admin_Zone;
