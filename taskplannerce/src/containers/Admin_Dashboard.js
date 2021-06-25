// Styles

// React
import React from "react";
import { Bar, Doughnut, Pie} from 'react-chartjs-2';

class Admin_Dashboard extends React.Component {
  render() {
    return (
      <div>  
         <section>
              <h2>CE students usig task planner CE</h2>
              <div>
                <Doughnut
                  data = {{
                    labels: ['CE Std', 'TP Users'],
                    datasets: [
                      {
                        data: [59, 41],
                        backgroundColor: [
                          'rgba(34, 108, 64, 1)',
                          'rgba(87, 182, 97, 1)',
                        ],
                        
                      },
                    ],
                  }}
                  height = {200}
                  width = {200}
                  options = {{
                    maintainAspectRatio: false,
                  }} 
                />
              </div>
        </section>
        <section>
          <div>
            <h2>Boards per student</h2>
          </div>
          <div>
            <Bar
              data = {{
                labels: ['1', '2', '3', '5', '+10', '+15'],
                datasets: [
                  {
                    label: 'Boards',
                    data: [51, 36, 214, 150, 22, 3],
                    backgroundColor: [
                      'rgba(34, 108, 64, 1)',
                      'rgba(87, 182, 97, 1)',
                      'rgba(108, 196, 108, 1)',
                      'rgba(162, 217, 107, 1)',
                      'rgba(206, 226, 144, 1)',
                      'rgba(251, 251, 196, 1)'
                    ],
                    borderWidth: 1
                  },
                ],
              }}
              height = {300}
              width = {600}
              options = {{
                indexAxis: 'y',
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true
                  },
                }
              }} 
            />
          </div>
        </section>
        <section>
          <h2>Percentage of academic boards</h2>
          <div>
          <Pie
                  data = {{
                    labels: ['assignments', 'academic boards'],
                    datasets: [
                      {
                        data: [63, 37],
                        backgroundColor: [
                          'rgba(34, 108, 64, 1)',
                          'rgba(87, 182, 97, 1)',
                        ],
                        
                      },
                    ],
                  }}
                  height = {200}
                  width = {200}
                  options = {{
                    maintainAspectRatio: false,
                  }} 
                />
          </div>
        </section>
        <section>
          <div>
          <Bar
              data = {{
                labels: ['CE Professors', 'TP Users'],
                datasets: [
                  {
                    label: 'May 2021',
                    data: [70, 30],
                    backgroundColor: [
                      'rgba(34, 108, 64, 1)',
                      'rgba(87, 182, 97, 1)',
                    ],
                  },
                ],
              }}
              height = {300}
              width = {600}
              options = {{
                indexAxis: 'y',
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true,
                    max: 100
                  },
                }
              }} 
            />
          </div>
          <h2>CE professors using task planner CE</h2>
        </section>
      </div>
    );
  }
}

export default Admin_Dashboard;
