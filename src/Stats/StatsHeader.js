import React from "react";
import { NavLink } from "react-router-dom";

import "../CSS/matchSelector.css";
import { useNavigate } from "react-router-dom";

function StatsHeader(props) {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3" style={{ position: "relative" }}>
          {props.type === "stats" ? (
            <NavLink to="/stats">
              <h6 className="tab">All</h6>
            </NavLink>
          ) : (
            <NavLink to="/stats">
              <h6 className="">All</h6>
            </NavLink>
          )}
        </div>
        <div className="col-3" style={{ position: "relative" }}>
          {props.type === "rank" ? (
            <NavLink to="/rank">
              <h6 className="tab">Rank</h6>
            </NavLink>
          ) : (
            <NavLink to="/rank">
              <h6 className="">Rank</h6>
            </NavLink>
          )}
        </div>
        <div className="col-3" style={{ position: "relative" }}>
          {props.type === "compare" ? (
            <NavLink to="/compare">
              <h6 className="tab">Compare</h6>
            </NavLink>
          ) : (
            <NavLink to="/compare">
              <h6 className="">Compare</h6>
            </NavLink>
          )}
        </div>{" "}
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default StatsHeader;
