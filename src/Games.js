import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function Games() {
  const port = "192.168.68.164";

  const [matchList, setMatchList] = useState([]);
  const [gameType, setGameType] = useState([]);
  useEffect(() => {
    const getMatchList = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getMatchList`
      );
      setMatchList(post);
    };
    getMatchList();
  }, []);
  return (
    <div className="container">
      <small>Press on a team number to see its full stats</small>
      <br />
      <br />
      {matchList.map((value, key) => {
        if (value.gameType === 0) {
          value.gameType = "Qualifier";
        } else if (value.gameType === 1) {
          value.gameType = "Playoff";
        } else if (value.gameType === 2) {
          value.gameType = "Practice";
        }
        return (
          <>
            <h6>
              {value.gameType}: {value.gameNumber}
            </h6>
            <div className="container">
              <div className="row">
                <div className="col-3">Blue:</div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue1}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue1}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue2}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue2}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue3}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue3}
                  </NavLink>
                </div>
              </div>
              <div className="row">
                <div className="col-3">Red</div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red1}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red1}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red2}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red2}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red3}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red3}
                  </NavLink>
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Games;
