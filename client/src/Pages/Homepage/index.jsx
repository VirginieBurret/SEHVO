import React from "react";
import "./homepage.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="content">
        <div className="legend">
          <span className="mainTitle">
            Partage tes expériences avec les voyageurs du monde entier
          </span>
        </div>

        <div className="pict">
          <img
            className="stores"
            src={`${process.env.PUBLIC_URL}/images/stores.png`}
            alt="english flag icon language"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
