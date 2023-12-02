import React, { useState } from "react";
import Axios from "axios";
function AddMatch() {
  const port = "192.168.68.151";

  const [blue_1, setblue_1] = useState();
  const [blue_2, setblue_2] = useState();
  const [blue_3, setblue_3] = useState();
  const [red_1, setred_1] = useState();
  const [red_2, setred_2] = useState();
  const [red_3, setred_3] = useState();
  const [matchNumber, setMatchNumber] = useState();

  const matchTeamsBlue_input = [
    { name: "Team 1", use: setblue_1 },
    { name: "Team 2", use: setblue_2 },
    { name: "Team 3", use: setblue_3 },
  ];
  const matchTeamsRed_input = [
    { name: "Team 1", use: setred_1 },
    { name: "Team 2", use: setred_2 },
    { name: "Team 3", use: setred_3 },
  ];

  const matchType_select = [
    { name: "Qualifier" },
    { name: "Playoff" },
    { name: "Practice" },
  ];

  const addStatsForTeam_select = [
    { title: "Blue 1", value: blue_1 },
    { title: "Blue 2", value: blue_2 },
    { title: "Blue 3", value: blue_3 },
    { title: "Red 1", value: red_1 },
    { title: "Red 2", value: red_2 },
    { title: "Red 3", value: red_3 },
  ];

  const [matchType, setMatchType] = useState();
  const submitMatch = () => {
    Axios.post(`http://${port}:3002/putMatch`, {
      match_type: matchType,
      match_number: matchNumber,
      blue_1: blue_1,
      blue_2: blue_2,
      blue_3: blue_3,
      red_1: red_1,
      red_2: red_2,
      red_3: red_3,
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
