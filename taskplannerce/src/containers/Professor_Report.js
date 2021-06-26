// Styles
import "../assets/styles/Professor_Report.css";

// React
import React from "react";

class Professor_Report extends React.Component {
  //DB
  list_board = ["Lenguaje - Wazitico", "DataBase", "CC"];

  download() {
  }

  render() {
    return (
      <main className="dashboard_student">
        <section className="chosee-report">
          <h1>Reports</h1>
          <h2>Choose one Board</h2>
          <br />
          <select className="select">
            {this.list_board.map((object) => (
              <option value="{object}">{object}</option>
            ))}
          </select>
          <br />
          <br />
        </section>
        <section className="repor-view">
          <h2>Preview Reports</h2>
          <div className="preview_report"></div>
          <div className="report-div">
            <a className="download" onClick={() => this.download()}>Download Report</a>
          </div>
        </section>
      </main>
    );
  }
}

export default Professor_Report;
