import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamStats from "./TeamStats";

function EditTeam() {
  const port = "192.168.68.164";

  const params = useParams("/editTeam/:id");
  const { id } = params;
  const [pitStats, setPitStats] = useState([]);
  useEffect(() => {
    const getTeamStats = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getPitStatsForEdit/${id}`
      );
      setPitStats(post);
    };
    getTeamStats();
    console.log(autoPoints);
  }, []);
  const [teamName, setTeamName] = useState();
  const [autoPoints, setAutoPoints] = useState();
  const [teleopPoints, setTeleopPoints] = useState();
  const [climbLevel, setClimbLevel] = useState();
  const [driveTrain, setDriveTrain] = useState();
  const [driveMotors, setDriveMotors] = useState();
  const [pointConsistency, setPointConsistency] = useState();
  const [climbConsistency, setClimbConsistency] = useState();
  // const [startingPosition, setStartingPosition] = useState();
  const [isDefense, setIsDefense] = useState();
  const [shootHeight, setShootHeight] = useState();
  const [notes, setNotes] = useState();
  const updateSubmit = () => {
    Axios.put(`http://${port}:3002/updatePitInfo/${id}`, {
      team_name: teamName,
      auto_points: autoPoints,
      teleop_points: teleopPoints,
      climb_level: climbLevel,
      drive_train: driveTrain,
      shoot_height: shootHeight,
      drive_motors: driveMotors,
      drive_train: driveTrain,
      is_DefenseBot: isDefense,
    });
    Axios.put(`http://${port}:3002/updateTeamNames/${id}`, {
      team_name: teamName,
    });
    window.location.href = `http://${port}:3000`;
  };
  return (
    <>
      <div className="container mt-3">
        {pitStats.map((value, key) => {
          const firstStats = [
            {
              title: "Team Name",
              value: value.team_name,
              set: setTeamName,
            },
            {
              title: "Auto Points",
              value: value.auto_points,
              set: setAutoPoints,
            },
            {
              title: "Teleop Points",
              value: value.teleop_points,
              set: setTeleopPoints,
            },
          ];
          const climbLevel_select = [
            "None",
            "Low Bar",
            "Mid Bar",
            "High Bar",
            "Traversal Bar",
          ];
          const driveTrain_select = [
            "Mecanum Drive",
            "Swerve Drive",
            "Tank Drive",
          ];
          const driveMotors_select = ["NEO", "CIM", "Falcon"];

          const isDefense_select = ["Always", "Never", "Mostly", "Rarely"];
          const shootHeight_select = ["Low Hub", "High Hub", "Both", "None"];
          if (value.climb_level === 0) {
            value.climb_level = "None";
          } else if (value.climb_level === 1) {
            value.climb_level = "Low Bar";
          } else if (value.climb_level === 2) {
            value.climb_level = "Mid Bar";
          } else if (value.climb_level === 3) {
            value.climb_level = "High Bar";
          } else if (value.climb_level === 4) {
            value.climb_level = "Traversal Bar";
          }
          if (value.drive_train === 0) {
            value.drive_train = "Mecanum Drive";
          } else if (value.drive_train === 1) {
            value.drive_train = "Swerve Drive";
          } else if (value.drive_train === 2) {
            value.drive_train = "Tank Drive";
          }
          if (value.shoot_height === 0) {
            value.shoot_height = "Low Hub";
          } else if (value.shoot_height === 1) {
            value.shoot_height = "High Hub";
          } else if (value.shoot_height === 2) {
            value.shoot_height = "Both Hubs";
          } else if (value.shoot_height === 3) {
            value.shoot_height = "No Shooting";
          }
          if (value.drive_motors === 0) {
            value.drive_motors = "NEO Motors";
          } else if (value.drive_motors === 1) {
            value.drive_motors = "SIM Motors";
          } else if (value.drive_motors === 2) {
            value.drive_motors = "Falcon Motors";
          }
          if (value.is_DefenseBot === 0) {
            value.is_DefenseBot = "Always";
          } else if (value.is_DefenseBot === 1) {
            value.is_DefenseBot = "Never";
          } else if (value.is_DefenseBot === 2) {
            value.is_DefenseBot = "Mostly";
          } else if (value.is_DefenseBot === 3) {
            value.is_DefenseBot = "Rarely";
          }
          const settingEverything = () => {
            if (autoPoints === undefined) {
              setAutoPoints(value.auto_points);
            }
            if (teleopPoints === undefined) {
              setTeleopPoints(value.teleop_points);
            }
            if (climbLevel === undefined) {
              setClimbLevel(value.climb_level);
            }
            if (driveTrain === undefined) {
              setDriveTrain(value.drive_train);
            }
            if (driveMotors === undefined) {
              setDriveMotors(value.driveMotors);
            }
            if (pointConsistency === undefined) {
              setPointConsistency(value.point_consistency);
            }
            if (climbConsistency === undefined) {
              setClimbConsistency(value.climb_consistency);
            }
            if (isDefense === undefined) {
              setIsDefense(value.is_DefenseBot);
            }
            if (shootHeight === undefined) {
              setShootHeight(value.shoot_height);
            }
          };
          return (
            <>
              <span onClick={settingEverything}>
                <h4>
                  Team {value.team_number} |
                  <span style={{ textSize: "13px" }}> {value.team_name}</span>
                </h4>
                {firstStats.map((value2, key) => {
                  return (
                    <>
                      <span></span>
                      <div className="row mt-3">
                        <div className="col-4">{value2.title}</div>
                        <div className="col-7">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={value2.value}
                              onChange={(e) => value2.set(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className="row mt-3">
                  <div className="col-4">Shoot Height</div>
                  <div className="col-4">
                    <select
                      name=""
                      id=""
                      style={{ width: "215px" }}
                      onChange={(e) => setShootHeight(e.target.value)}
                    >
                      <option value="0"> {value.shoot_height}</option>
                      {shootHeight_select.map((value, key) => {
                        return (
                          <option value={key} id={key}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Climb Height</div>
                  <div className="col-4">
                    <select
                      name=""
                      id=""
                      style={{ width: "215px" }}
                      onChange={(e) => setClimbLevel(e.target.value)}
                    >
                      <option value="0"> {value.climb_level}</option>
                      {climbLevel_select.map((value, key) => {
                        return (
                          <option value={key} id={key}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Drivetrain</div>
                  <div className="col-4">
                    <select
                      name=""
                      id=""
                      style={{ width: "215px" }}
                      onChange={(e) => setDriveTrain(e.target.value)}
                    >
                      <option value="0"> {value.drive_train}</option>
                      {driveTrain_select.map((value, key) => {
                        return (
                          <option value={key} id={key}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Drive Motors</div>
                  <div className="col-4">
                    <select
                      name=""
                      id=""
                      style={{ width: "215px" }}
                      onChange={(e) => setDriveMotors(e.target.value)}
                    >
                      <option value="0"> {value.drive_motors}</option>
                      {driveMotors_select.map((value, key) => {
                        return (
                          <option value={key} id={key}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-4">Defense Bot?</div>
                  <div className="col-4">
                    <select
                      name=""
                      id=""
                      style={{ width: "215px" }}
                      onChange={(e) => setIsDefense(e.target.value)}
                    >
                      <option value="0"> {value.is_DefenseBot}</option>
                      {isDefense_select.map((value, key) => {
                        return (
                          <option value={key} id={key}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <br />
                <button className="btn btn-primary" onClick={updateSubmit}>
                  Update
                </button>
              </span>
            </>
          );
        })}
      </div>
    </>
  );
}

export default EditTeam;
