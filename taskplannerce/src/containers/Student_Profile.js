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
  edit_profile(){}
  delete_profile(){}

  render() {
    return (
      <div className="profile_student_page">
        <h1>My Profile</h1>
        <div className="profile_img"></div>
        <div className="profile_info">
          <div class="name-icon"/>   
          <span className="name_profile margin-span">
            {this.datos_sesion[0].name}
          </span>
          <br />
          <div class="carnet-icon"/>
          <span className="margin-span">{this.datos_sesion[0].carnet}</span>
          <br />
          <div class="mail-icon"/>
          <span className="margin-span">{this.datos_sesion[0].mail}</span>
          <br />
          <br />
          <div class="carrier-icon"/>
          <span className="margin-span">{this.datos_sesion[0].carrier}</span>
          <br />
          <div class="from-icon"/>
          <span className="margin-span">{this.datos_sesion[0].from}</span>
          <br />
          <div class="live-icon"/>
          <span className="margin-span">{this.datos_sesion[0].live}</span>
          <br />
          <div class="phone-icon"/>
          <span className="margin-span">{this.datos_sesion[0].phone}</span>
          <br />
          <button
            type="button"
            className="btn_edit"
            onClick={() => this.edit_profile()}
          >
            <div class="edit-icon"/> Edit Profile
          </button>
          <button
            type="button"
            className="btn_delete"
            onClick={() => this.delete_profile()}
          >
            Delete Account
          </button>
        </div>
      </div>
    );
  }
}

export default Student_Profile;
