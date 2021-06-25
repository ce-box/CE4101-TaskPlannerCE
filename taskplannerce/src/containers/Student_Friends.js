// Styles
import "../assets/styles/Student_Friends.css";

// React
import React from "react";
import Admin from "../components/Admin";
import Friend from "../components/Friend";

class Student_Friends extends React.Component {
  admin_lists = [
    {
      name: "Andres Murillo",
    },
    {
      name: "Juan de Dios",
    },
  ];

  students_friends = [
    {
      name: "Randall Vinicio",
      email: "RV@estudiantec",
      time: "3d",
    },
    {
      name: "Randall Fabricio",
      email: "RF@estudiantec",
      time: "6d",
    },
    {
      name: "Randall Rolando",
      email: "RR@estudiantec",
      time: "8d",
    },
  ];

  render() {
    return (
      <main>
        <section className="student_friends">
          <h1 className="main">Friends</h1>
          <div className="main-input-external">
            <div class="main-input-container">
              <span class="search-icon"></span>
              <input type="text" placeholder="Search"></input>
            </div>
            <a className="new-request">New Reqst</a>
          </div>
          <div className="admin_table">
            <ul>
              {this.admin_lists.map((object) => (
                <Admin key={object.name} {...object} />
              ))}
            </ul>
          </div>
        </section>
        <section className="student_notifications">
          <div>
            <h2 className="notification_friend">Friend Request</h2>
            <ul className="student_n_list">
              {this.students_friends.map((object) => (
                <Friend key={object.name} {...object} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Student_Friends;
