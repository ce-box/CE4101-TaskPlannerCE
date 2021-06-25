// Styles
import "../assets/styles/Professor_Sign_Up.css";

// React
import React from "react";

class Professor_Sign_Up extends React.Component {
  //DB
  list_carreras = ["Computer Eng", "No", "No se"];
  list_canton = ["Cartago", "San Jose", "Heredia"];

  sign_up_professor() {
    this.props.history.push("/Professor/Home");
  }

  render() {
    return (
      <div className="Container_Profesor_Sign">
        <div className="image" />
        <form className="form-container">
          <h1>Complete Profile</h1>
          <input type="text" placeholder="Name" name="name" />
          <br />
          <select className="carrera">
            {this.list_carreras.map((object) => (
              <option value="{object}">{object}</option>
            ))}
          </select>
          <br />
          <select className="canton">
            {this.list_canton.map((object) => (
              <option value="{object}">{object}</option>
            ))}
          </select>
          <br />
          <br />
          <button
            type="button"
            className="btn"
            onClick={() => this.sign_up_professor()}
          >
            Next
          </button>
        </form>
      </div>
    );
  }
}

export default Professor_Sign_Up;
