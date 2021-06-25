// Styles
import "../assets/styles/Professor_Dashboard.css";

// React
import React from "react";
import { Bar } from "react-chartjs-2";
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
      <main className="dashboard_student">
        <section className="boards">
          <h1> Dashboard </h1>
          <h3 className="boards-recent">Recently shared boards</h3>
          <div className="student_dash_board_g">
            {this.list_boards.map((object) => (
              <Professor_Board_Item key={object.name} {...object} />
            ))}
          </div>
        </section>
        <section className="student_graf">
          <div className="professor_shared_board">
            <div className="p_s_b">
              <h2>Currently the students</h2>
              <h2>have shared</h2>
              <p className="share-number">{this.dashboard_list[0].shared}</p>
              <h2>boards with you</h2>
            </div>
          </div>
          <div className="professor_time_line">
            <h2>Timeline of shared boards</h2>
            <div>
              <Bar
                data={{
                  labels: ["School", "Personal", "Social"],
                  datasets: [
                    {
                      data: [1, 7, 8],
                      backgroundColor: [
                        "rgba(34, 108, 64, 1)",
                        "rgba(87, 182, 97, 1)",
                        "rgba(108, 196, 108, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                height={300}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Professor_Dashboard;
