// Style
import "../assets/styles/Friend.css";

// React
import React from "react";

function Friend({name, email, time}) {
  function accept_friend() {
    // DB
    console.log("Acept");
  }

  function delete_friend() {
    // DB
    console.log("Delete");
  }
  return (
    <div className="friend_main">
        <section className="img_main">
            <h1>Img</h1>
        </section>
        <section className="info_main">
            <div className="info">
                <div>
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                </div>
            </div>
            <div className="button_main">
                <a className="accept" onClick={accept_friend}>Accept</a>
                <a className="delete" onClick={delete_friend}>Delete</a>
            </div>
        </section>
        <section>
          <h3>{time}</h3>
        </section>
    </div>
  );
}

export default Friend;