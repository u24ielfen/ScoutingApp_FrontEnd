import React, { useState } from "react";
import Axios from "axios";
function Match() {
  const port = "192.168.68.164";

  const [teamNumber, setTeamNumber] = useState();
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
  const basicInfo = [
    { title: "Team Number", use: setTeamNumber },
    { title: "Team Name", use: setTeamName },
    { title: "Auto Points", use: setAutoPoints },
    { title: "Teleop Points", use: setTeleopPoints },
  ];
  const advancedInfo = [
    { title: "Point Cons. %", use: setPointConsistency },
    { title: "Climb Cons. %", use: setClimbConsistency },
  ];

  const climbLevel_select = [
    "None",
    "Low Bar",
    "Mid Bar",
    "High Bar",
    "Traversal Bar",
  ];
  const driveTrain_select = ["Mecanum Drive", "Swerve Drive", "Tank Drive"];
  const driveMotors_select = ["NEO", "CIM", "Falcon"];
  // const startingPos_select = [
  //   "Position 1",
  //   "Position 2",
  //   "Position 3",
  //   "Position 4",
  //   "Position 5",
  //   "Position 6",
  // ];
  const isDefense_select = ["Always", "Never", "Mostly", "Rarely"];
  const shootHeight_select = ["Low Hub", "High Hub", "Both", "None"];

  const submitRobot = () => {
    Axios.post(`http://${port}:3002/putPit`, {
      team_number: teamNumber,
      auto_points: autoPoints,
      teleop_points: teleopPoints,
      climb_level: climbLevel,
      drive_train: driveTrain,
      drive_motors: driveMotors,
      point_consistency: pointConsistency,
      climb_consistency: climbConsistency,
      // starting_pos: startingPosition,
      team_name: teamName,
      is_DefenseBot: isDefense,
      shoot_height: shootHeight,
      notes: notes,
    }).then(() => {});
    Axios.post(`http://${port}:3002/addTeam`, {
      team_number: teamNumber,
      team_name: teamName,
    }).then(() => {});
    window.location.href = `http://${port}:3000/`;
  };
  return (
    <div className="container ">
      <br />
      <u>
        <small style={{ fontSize: "13px" }}>Basic Info</small>
      </u>
      {basicInfo.map((val, key) => {
        return (
          <>
            <div className="row">
              <div className="col-4" style={{ fontSize: "15px" }}>
                {val.title}
              </div>
              <div className="col-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="input-control align-middle"
                    onChange={(e) => {
                      val.use(e.target.value);
                    }}
                    style={{ height: "30px", marginTop: "-5px" }}
                  />
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
      <div className="row">
        <div className="col-4"> Shoot Height</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setShootHeight(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {shootHeight_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-4">Climb Height</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setClimbLevel(e.target.value)}
          >
            <option value="0"> Pick Value</option>
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
      <br />

      <div className="row">
        <div className="col-4">Drive Train</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setDriveTrain(e.target.value)}
          >
            <option value="0"> Pick Value</option>

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
      <br />
      <u>
        <small style={{ fontSize: "13px" }}>Advanced Info</small>
      </u>
      <div className="row">
        <div className="col-4"> Drive Motors.</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setDriveMotors(e.target.value)}
          >
            <option value="0"> Pick Value</option>

            {driveMotors_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />
      {advancedInfo.map((val, key) => {
        return (
          <>
            <div className="row">
              <div className="col-4" style={{ fontSize: "15px" }}>
                {val.title}
              </div>
              <div className="col-4">
                <div className="input-group">
                  <input
                    type="text"
                    className="input-control align-middle"
                    onChange={(e) => val.use(e.target.value)}
                    style={{ height: "30px", marginTop: "-5px" }}
                  />
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
      {/* <div className="row">
        <div className="col-4"> Starting Pos.</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setStartingPosition(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {startingPos_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div> */}
      {/* <br /> */}
      <div className="row">
        <div className="col-4"> Defense Bot?</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setIsDefense(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {isDefense_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />
      <div class="form-group">
        <label for="exampleFormControlTextarea1">
          Additional Comments (if needed)
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <br />
      <div
        className="submit btn btn-primary"
        type="button"
        style={{ marginLeft: "20px" }}
        onClick={submitRobot}
      >
        Add Robot
      </div>
      <br />
      <br />
    </div>
  );
}

export default Match;
