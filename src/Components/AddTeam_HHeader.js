import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../CSS/matchSelector.css";
function AddTeam_HHeader(props) {
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-1"></div>

        <div className="col-5">
          <NavLink to="/registermatch">
            <h6 className="" style={{ marginTop: "10px" }}>
              Register Match
            </h6>
          </NavLink>
        </div>

        <div className="col-5  " style={{ marginBottom: "10px" }}>
          <NavLink to="/addteamtomatch">
            <h6 className="tab">Match Stats</h6>
          </NavLink>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default AddTeam_HHeader;
