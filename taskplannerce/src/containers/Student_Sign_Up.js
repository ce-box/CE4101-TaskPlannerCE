// Styles
import "../assets/styles/Student_Sign_up.css";

// React
import React from "react";

class Student_Sign_Up extends React.Component {
  list_carreras = ["Computer Eng", "No", "No se"];
  list_canton = ["Cartago", "San Jose", "Heredia"];
  list_canton_live = ["Cartago", "San Jose", "Heredia"];
  list_use = ["Academic", "Social", "Personal"];
  list_hobby = ["Movies", "Music", "Theater", "Sports"];

  next_to_data() {
    var info = document.getElementsByClassName("student_info_signup");
    var use = document.getElementsByClassName("student_use_signup");
    info[0].style.display = "none";
    use[0].style.display = "block";
  }
  next_to_use() {
    var use = document.getElementsByClassName("student_use_signup");
    var hobby = document.getElementsByClassName("student_hobby_signup");
    use[0].style.display = "none";
    hobby[0].style.display = "block";
  }
  next_to_hobby() {
    this.props.history.push("/Student/Home");
  }
  change_color(uio) {
    for (let i = 0; i < this.list_use.length; i++) {
      var aux = document.getElementsByClassName(this.list_use[i]);
      aux[0].classList.remove("elec");
    }
    var button = document.getElementsByClassName(uio);
    button[0].classList.toggle("elec");
  }
  change_color_aux(uio) {
    var button = document.getElementsByClassName(uio);
    button[0].classList.toggle("elec");
  }
  render() {
    return (
      <div className="sign_up_container">
        <div className="student_info_signup">
          <div className="image" />
          <div className="form" id="myForm">
            <form className="form-container">
              <h1>Complete Profile</h1>
              <input
                type="text"
                placeholder="Name"
                name="student_name"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Student card"
                name="student_card"
              />
              <select className="carrera_student">
                <option disabled selected>
                  Carrier
                </option>
                {this.list_carreras.map((object) => (
                  <option value="{object}">{object}</option>
                ))}
              </select>
              <br />
              <select className="canton_student">
                <option disabled selected>
                  Where are you from?
                </option>
                {this.list_canton.map((object) => (
                  <option value="{object}">{object}</option>
                ))}
              </select>
              <br />
              <select className="canton_live_student">
                <option disabled selected>
                  Housing during collage?
                </option>
                {this.list_canton_live.map((object) => (
                  <option value="{object}">{object}</option>
                ))}
              </select>
              <br />
              <input type="text" placeholder="Phone" name="Student_Phone" />
              <br />
              <br />
              <button
                type="submit"
                className="btn"
                onClick={() => this.next_to_data()}
              >
                Next
              </button>
            </form>
          </div>
        </div>
        <div className="student_use_signup">
          <div className="image" />
          <h1>What will you use the application for?</h1>
          {this.list_use.map((object) => (
            <button
              type="Text"
              className={object}
              onClick={() => this.change_color(object)}
            >
              {object}
            </button>
          ))}
          <br />
          <button
            type="button"
            className="btn"
            onClick={() => this.next_to_use()}
          >
            Next
          </button>
        </div>
        <div className="student_hobby_signup">
          <div className="image" />
          <h1>What are ypur hobbies?</h1>
          {this.list_hobby.map((object) => (
            <button
              type="Text"
              className={object}
              onClick={() => this.change_color_aux(object)}
            >
              {object}
            </button>
          ))}
          <br />
          <button
            type="button"
            className="btn"
            onClick={() => this.next_to_hobby()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Student_Sign_Up;
