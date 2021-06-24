// Styles
import "../assets/styles/Home.css";

// React
import React from "react";

class Home extends React.Component {
  sign_in() {
    var pass = document.getElementsByName("password");
    var mail = document.getElementsByName("mail");
    var role = mail[0].value;
    if (role === "e") {
      this.props.history.push("/Student/Home");
    } else if (role === "p") {
      this.props.history.push("/Professor/Home");
    } else if (role === "a") {
      this.props.history.push("/Admin/Home");
    } else {
    }
  }
  sign_up() {
    var elem = document.getElementsByClassName("container");
    var reg = document.getElementsByClassName("container-Register");
    elem[0].style.display = "none";
    reg[0].style.display = "block";
  }
  sign_up_aux() {
    var pass = document.getElementsByName("password_aux");
    var mail = document.getElementsByName("mail_aux");
    var role = mail[0].value;
    if (role === "e") {
      this.props.history.push("/Student");
    } else if (role === "p") {
      this.props.history.push("/Professor");
    }else {
    }
    
  }
  render() {
    return (
      <div className="screen">
        <div className="container">
          <button
            type="button"
            className="btn_sign_up"
            onClick={() => this.sign_up()}
          >
            Sign Up
          </button>
          <div className="form" id="myForm">
            <form className="form-container">
              <h1>Sign In</h1>
              <input type="text" placeholder="Institution Mail" name="mail" required />
              <br />
              <input type="password" placeholder="Password" name="password" />
              <br />
              <a href="/">Forgot Password?</a>
              <br />
              <button
                type="submit"
                className="btn"
                onClick={() => this.sign_in()}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className="container-Register">
          <div className="image" />
          <div className="form" id="myForm">
            <form className="form-container">
              <h1>Sign Up</h1>
              <input type="text" placeholder="Institution Mail" name="mail_aux" required/>
              <br />
              <input type="password" placeholder="Password" name="password_aux" />
              <br />
              <br />
              <button
                type="submit"
                className="btn"
                onClick={() => this.sign_up_aux()}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
