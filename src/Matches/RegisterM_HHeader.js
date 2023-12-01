import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../CSS/matchSelector.css";
function MatchTypeSelector(props) {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-1"></div>

        <div className="col-5 active_register">
          <NavLink to="/registermatch">
            <h6 className="tab">Register Match</h6>
          </NavLink>
        </div>

        <div className="col-5 unactive_stats" style={{ marginTop: "10px" }}>
          <NavLink to="/addteamtomatch">
            <h6>Match Stats</h6>
          </NavLink>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default MatchTypeSelector;
