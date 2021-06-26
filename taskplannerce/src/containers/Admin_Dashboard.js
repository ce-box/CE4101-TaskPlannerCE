// Styles
import "../assets/styles/Admin_Dashboard.css";

// React
import React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

class Admin_Dashboard extends React.Component {
  
  render() {
    return (
      <main className="dashboard_student">
        <section className="dashboard-title">
          <h1> Dashboard </h1>
        </section>
        <section className="admin_graf_1">
          <div className="student-using">
            <h2 className="h2-student-using">CE students using</h2>
            <h2>task planner CE</h2>
            <div>
              <Doughnut
                data={{
                  labels: ["CE Std", "TP Users"],
                  datasets: [
                    {
                      data: [59, 41],
                      backgroundColor: [
                        "rgba(34, 108, 64, 1)",
                        "rgba(87, 182, 97, 1)",
                      ],
                    },
                  ],
                }}
                height={200}
                width={200}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
          <div className="student-board-per">
            <div>
              <h2>Boards per student</h2>
            </div>
            <div>
              <Bar
                data={{
                  labels: ["1", "2", "3", "5", "+10", "+15"],
                  datasets: [
                    {
                      label: "Boards",
                      data: [51, 36, 214, 150, 22, 3],
                      backgroundColor: [
                        "rgba(34, 108, 64, 1)",
                        "rgba(87, 182, 97, 1)",
                        "rgba(108, 196, 108, 1)",
                        "rgba(162, 217, 107, 1)",
                        "rgba(206, 226, 144, 1)",
                        "rgba(251, 251, 196, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                height={300}
                width={600}
                options={{
                  indexAxis: "y",
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
        <section className="admin_graf_2">
          <div className="second-chart-1">
            <h2>Percentage of</h2>
            <h2>academic boards</h2>
          </div>
          <div className="second-chart-2">
            <Pie
              data={{
                labels: ["assignments", "academic boards"],
                datasets: [
                  {
                    data: [63, 37],
                    backgroundColor: [
                      "rgba(34, 108, 64, 1)",
                      "rgba(87, 182, 97, 1)",
                    ],
                  },
                ],
              }}
              height={200}
              width={200}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
          <div className="second-chart-3">
            <div>
              <Bar
                data={{
                  labels: ["CE Professors", "TP Users"],
                  datasets: [
                    {
                      label: "May 2021",
                      data: [70, 30],
                      backgroundColor: [
                        "rgba(34, 108, 64, 1)",
                        "rgba(87, 182, 97, 1)",
                      ],
                    },
                  ],
                }}
                height={300}
                width={600}
                options={{
                  indexAxis: "y",
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                }}
              />
            </div>
            <h2>CE professors using task planner CE</h2>
          </div>
        </section>
      </main>
    );
  }
}

export default Admin_Dashboard;
