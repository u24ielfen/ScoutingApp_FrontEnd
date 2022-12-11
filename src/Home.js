import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <br />
      <div className="container" style={{ width: "300px" }}>
        <div
          className="row rounded-pill "
          style={{
            backgroundColor: "rgb(220, 220, 220)",
            textAlign: "center",
          }}
        >
          <NavLink to="/teams" style={{ textDecoration: "none" }}>
            List of Teams
          </NavLink>
        </div>
        <br />
        <div
          className="row rounded-pill "
          style={{
            backgroundColor: "rgb(220, 220, 220)",
            textAlign: "center",
          }}
        >
          <NavLink to="/games" style={{ textDecoration: "none" }}>
            Games
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
