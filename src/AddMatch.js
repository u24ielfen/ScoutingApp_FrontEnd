import React, { useState } from "react";
import Axios from "axios";
function AddMatch() {
  const port = "192.168.68.164";

  const [blue1, setBlue1] = useState();
  const [blue2, setBlue2] = useState();
  const [blue3, setBlue3] = useState();
  const [red1, setRed1] = useState();
  const [red2, setRed2] = useState();
  const [red3, setRed3] = useState();
  const [matchNumber, setMatchNumber] = useState();

  const matchTeamsBlue_input = [
    { name: "Team 1", use: setBlue1 },
    { name: "Team 2", use: setBlue2 },
    { name: "Team 3", use: setBlue3 },
  ];
  const matchTeamsRed_input = [
    { name: "Team 1", use: setRed1 },
    { name: "Team 2", use: setRed2 },
    { name: "Team 3", use: setRed3 },
  ];

  const matchType_select = [
    { name: "Qualifier" },
    { name: "Playoff" },
    { name: "Practice" },
  ];

  const addStatsForTeam_select = [
    { title: "Blue 1", value: blue1 },
    { title: "Blue 2", value: blue2 },
    { title: "Blue 3", value: blue3 },
    { title: "Red 1", value: red1 },
    { title: "Red 2", value: red2 },
    { title: "Red 3", value: red3 },
  ];

  const [matchType, setMatchType] = useState();
  const submitMatch = () => {
    Axios.post(`http://${port}:3002/putMatch`, {
      match_type: matchType,
      match_number: matchNumber,
      blue1: blue1,
      blue2: blue2,
      blue3: blue3,
      red1: red1,
      red2: red2,
      red3: red3,
    }).then(() => {});
    window.location.href = `http://${port}:3000/`;
  };

  return (
    <div
      class="container"
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        marginTop: "-8px",
        paddingBottom: "20px",
      }}
    >
      <br />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          <select
            name=""
            id=""
            style={{ width: "125px" }}
            onChange={(e) => setMatchType(e.target.value)}
          >
            <option value="0"> Pick Type</option>
            {matchType_select.map((value, key) => {
              return <option value={key}>{value.name}</option>;
            })}
          </select>
        </div>
        <div className="col-2">
          <div className="input-group">
            <input
              type="number"
              className="input-control rounded"
              onChange={(e) => setMatchNumber(e.target.value)}
              style={{ width: "100px" }}
              placeholder="Number"
            />
          </div>
        </div>
      </div>
      <br />

      <div className="row d-flex justify-content-center">
        <div className="col-2">Blue</div>
        {matchTeamsBlue_input.map((value, key) => {
          return (
            <div className="col-3">
              <div className="input-group">
                <input
                  type="number"
                  className="input-control rounded"
                  placeholder={value.name}
                  style={{ width: "80px" }}
                  onChange={(e) => value.use(e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt-2 d-flex justify-content-center">
        <div className="col-2">Red</div>
        {matchTeamsRed_input.map((value, key) => {
          return (
            <div className="col-3">
              <div className="input-group">
                <input
                  type="number"
                  className="input-control rounded"
                  placeholder={value.name}
                  style={{ width: "80px" }}
                  onChange={(e) => value.use(e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={submitMatch}
        style={{ marginLeft: "20px" }}
      >
        Add Game
      </button>
    </div>
  );
}

export default AddMatch;
