// Styles
import "../assets/styles/Student_Profile.css";
// React
import React from "react";

class Student_Profile extends React.Component {
  datos_sesion = [
    {
      name: "Esteban Alvarado Vargas",
      carnet: "3018109226",
      mail: "esteban.alvarado@xtec.cr",
      carrier: "Ing. Computadores",
      from: "San Jose",
      live: "San Jose",
      phone: "8459-9262",
    },
  ];

  render() {
    return (
      <div className="profile_student">
        <h1>My Profile</h1>
        <div className="profile_img"></div>
        <div className="profile_info">
          {this.datos_sesion[0].name}
          <br />
          {this.datos_sesion[0].carnet}
          <br />
          {this.datos_sesion[0].mail}
          <br />
          <br />
          {this.datos_sesion[0].carrier}
          <br />
          {this.datos_sesion[0].from}
          <br />
          {this.datos_sesion[0].live}
          <br />
          {this.datos_sesion[0].phone}
          <br />
        </div>
      </div>
    );
  }
}

export default Student_Profile;
