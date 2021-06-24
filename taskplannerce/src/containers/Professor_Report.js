// Styles

// React
import React from "react";

class Professor_Report extends React.Component {
  //DB
  list_board = ["Lenguaje - Wazitico", "DataBase", "CC"];

  download() {
  }

  render() {
    return (
      <div className="container_Report">
        <h1>Reports</h1>
        Choose one Board
        <br />
        <select className="boards">
          {this.list_board.map((object) => (
            <option value="{object}">{object}</option>
          ))}
        </select>
        <br />
        <br />
        <br />
        Preview Reports
        <div className="preview_report"></div>
        <button
            type="button"
            className="btn"
            onClick={() => this.download()}
          >
            Download Preview
          </button>
      </div>
    );
  }
}

export default Professor_Report;
