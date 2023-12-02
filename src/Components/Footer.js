import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <br />
      <div className="row" style={{ height: "50px", display: "flex" }}>
        <div className="col-1"></div>
        {/* Home */}
        <div
          className="mt-2 col-2 fa-xl"
          style={{ height: "1px", display: "flex" }}
        >
          <NavLink to="/">
            <i class="fa-solid fa-house" style={{ color: "black" }}></i>
          </NavLink>
        </div>
        {/* Pit Scouting */}
        <div className="mt-2 col-2">
          <NavLink to="/pitscouting">
            <i
              class="fa-solid fa-screwdriver-wrench fa-xl"
              style={{ color: "black" }}
            ></i>{" "}
          </NavLink>
        </div>
        {/* Stats */}
        <div className="mt-2 col-2">
          <NavLink to="/registermatch">
            <i class="fa-solid fa-scroll fa-xl" style={{ color: "black" }}></i>
          </NavLink>
        </div>
        {/* Stats */}
        <div className="mt-2 col-2">
          <NavLink to="/stats">
            <i
              class="fa-solid fa-chart-column fa-xl"
              style={{ color: "black" }}
            ></i>
          </NavLink>
        </div>
        {/* Settings? */}
        <div className="mt-2 col-2">
          <NavLink to="/users">
            <i class="fa-solid fa-gear fa-xl" style={{ color: "black" }}></i>
          </NavLink>
        </div>
      </div>
      <div
        className="row"
        style={{ height: "50px", display: "flex", marginTop: "-15px" }}
      >
        <div className="col-1"></div>
        <div className="col-2">
          <small style={{ fontSize: "12px" }}>Home</small>
        </div>
        <div className="col-2">
          <small style={{ fontSize: "12px" }}>Pre</small>
        </div>

        <div className="col-2">
          <small style={{ fontSize: "12px" }}>Match</small>
        </div>

        <div className="col-2">
          <small style={{ fontSize: "12px" }}>Stats</small>
        </div>

        <div className="col-2">
          <small style={{ fontSize: "12px" }}>User</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
