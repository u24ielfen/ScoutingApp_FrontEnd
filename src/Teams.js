import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
function Teams() {
  const port = "192.168.68.164";

  const [teamsList, setTeamsList] = useState([]);
  useEffect(() => {
    const getTeamsList = async () => {
      const { data: post } = await Axios.get(`http://${port}:3002/getTeams`);
      setTeamsList(post);
    };
    getTeamsList();
  }, []);
  const deleteTeam = () => {};
  return (
    <>
      <div className="container mt-3">
        <div className="row" style={{ marginLeft: "3%" }}>
          <div className="col-7">Click to See Stats:</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="col">Team Number</th>
              <th className="col">Team Name</th>
            </tr>
          </thead>
          <tbody>
            {teamsList.map((value, key) => {
              return (
                <>
                  <tr>
                    <Link to={`/team/${value.team_number}`}>
                      <td>{value.team_number}</td>
                    </Link>
                    <td style={{ marignRight: "500px" }}>
                      <div className="row">
                        <div className="col-8">{value.team_name} </div>
                        <div
                          className="col-2 editButton"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          className="col-2 deleteButton"
                          style={{ display: "none" }}
                        >
                          <i
                            class="fa-regular fa-trash"
                            onClick={deleteTeam}
                          ></i>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Teams;
