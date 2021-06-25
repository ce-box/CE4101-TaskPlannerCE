// Styles
import "../assets/styles/Professor_Dashboard.css";

// React
import React from "react";
import Professor_Board_Item from "../components/Professor_Board_Item";

class Professor_Dashboard extends React.Component {
  dashboard_list = [
    {
      shared: 20,
    },
  ];
  list_boards = [
    { name: "Help" },
    { name: "Datos" },
    { name: "Lenguaje" },
    { name: "Mate" },
  ];
  render() {
    return (
      <div className="dashboard_professor">
        <h1> Dashboard </h1>
        Recently shared boards
        <div className="professor_dash_board">
          {this.list_boards.map((object) => (
            <Professor_Board_Item key={object.name} {...object} />
          ))}
        </div>
        <div className="professor_graf">
          <div className="professor_shared_board">
            Currently the students have shared
            <br />
            <p>{this.dashboard_list[0].shared}</p>
            boards with you
          </div>
          <div className="professor_time_line">Timeline of shared boards</div>
        </div>
      </div>
    );
  }
}

export default Professor_Dashboard;
