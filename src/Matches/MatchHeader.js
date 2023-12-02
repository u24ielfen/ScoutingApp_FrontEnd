import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../CSS/matchSelector.css";
function MatchHeader(props) {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5">
          {props.type === "register" ? (
            <NavLink to="/registermatch">
              <h6 className="tab">Register Match</h6>
            </NavLink>
          ) : (
            <NavLink to="/registermatch">
              <h6 className="">Register Match</h6>
            </NavLink>
          )}
        </div>
        <div className="col-5">
          {props.type === "addTeam" ? (
            <NavLink to="/addTeamToMatch">
              <h6 className="tab">Match Info</h6>
            </NavLink>
          ) : (
            <NavLink to="/addTeamToMatch">
              <h6 className="">Match Info</h6>
            </NavLink>
          )}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default MatchHeader;
