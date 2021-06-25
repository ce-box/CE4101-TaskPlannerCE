// Styles
import "../assets/styles/Student_Dashboard.css";

// React
import React from "react";
import { Bar } from 'react-chartjs-2';
import Student_Board_Item from "../components/Student_Boart_Item";

class Student_Dashboard extends React.Component {
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
          <div className="dashboard_student">
            <section>
            <h1> Dashboard </h1>
            Recently shared boards
            <div className="professor_dash_board">
              {this.list_boards.map((object) => (
                <Student_Board_Item key={object.name} {...object} />
              ))}
            </div>
            </section>
            <section className="student_graf">
              <div className="student_time_line">
                <h2>Timeline of shared boards</h2>
                <div>
                <Bar
                  data = {{
                    labels: ['Jan', 'Feb', 'Social'],
                    datasets: [
                      {
                        data: [1, 7, 8],
                        backgroundColor: [
                          'rgba(34, 108, 64, 1)',
                          'rgba(87, 182, 97, 1)',
                          'rgba(108, 196, 108, 1)',
                        ],
                        borderWidth: 1
                      },
                    ],
                  }}
                  height = {300}
                  width = {600}
                  options = {{
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        beginAtZero: true
                      },
                    }
                  }} 
                />
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Student_Dashboard;