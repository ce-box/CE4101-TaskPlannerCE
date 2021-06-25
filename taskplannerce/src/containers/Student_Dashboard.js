// Styles
import "../assets/styles/Student_Dashboard.css";

// React
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Student_Board_Item from "../components/Student_Boart_Item";

class Student_Dashboard extends React.Component {
  list_boards = [
    { month: "Jan", boards: 2 },
    { month: "Feb", boards: 1 },
    { month: "Mar", boards: 7 },
    { month: "Apr", boards: 1 },
    { month: "May", boards: 3 },
    { month: "Jun", boards: 5 },
  ];
  list_boards_dash = [
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
          <div className="student_dash_board">
            {this.list_boards_dash.map((object) => (
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
                    datasets: [{
                      label: 'Boards',
                      data: this.list_boards,
                      backgroundColor: 'rgba(34, 108, 64, 1)'
                  }] 
                }}
                height={300}
                width={300}
                options={{

                    parsing: {
                        xAxisKey: 'month',
                        yAxisKey: 'boards'
                    },
                    responsive: true,
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
          <div className="board-type">
            <h2>Percentage of academic boards</h2>
            <div>
                <Doughnut
                data = {{
                    labels: this.list_boards.map(function(lista){
                        return lista.month}),
                    datasets: [{
                        data: this.list_boards.map(function(lista){
                            return lista.boards }),
                        backgroundColor: [
                            'rgba(34, 108, 64, 1)',
                            'rgba(87, 182, 97, 1)',
                            'rgba(108, 196, 108, 1)',
                            'rgba(162, 217, 107, 1)',
                            'rgba(206, 226, 144, 1)',
                            'rgba(251, 251, 196, 1)'
                        ],
                    }]
                }}
                height={300}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                }}
                />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Student_Dashboard;
