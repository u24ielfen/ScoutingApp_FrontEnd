import React, { useEffect, useState } from "react";
import Axios from "axios";
function Scouting() {
  const port = "localhost";
  const [matchNumber, setMatchNumber] = useState();
  const [matchType, setMatchType] = useState();
  const [teamNumber, setTeamNumber] = useState();
  const [autoBallsShot, setAutoBallsShot] = useState();
  const [autoBallsSuccess, setAutoBallsSuccess] = useState();
  const [teleopBallsShot, setTeleopBallsShot] = useState();
  const [teleopBallsSucces, setTeleopBallsSucess] = useState();
  const [wasDefenseBot, setWasDefenseBot] = useState();
  const [climbHeight, setClimbHeight] = useState();
  const [timeToClimb, setTimeToClimb] = useState();
  const [wentToEnemySide, setWentToEnemySide] = useState();
  const [notes, setNotes] = useState();
  const [matchID, setMatchID] = useState();
  const auto = [
    { title: "Balls Shot", use: setAutoBallsShot },
    { title: "Success", use: setAutoBallsSuccess },
  ];

  const teleop = [
    { title: "Balls Shot", use: setTeleopBallsShot },
    { title: "Success", use: setTeleopBallsSucess },
  ];
  const other = [{ title: "Climb Time (s)", use: setTimeToClimb }];
  const enemySide_select = ["Yes, successfully", "Yes, unsuccessfully", "No"];
  const climbLevel_select = [
    "None",
    "Low Bar",
    "Mid Bar",
    "High Bar",
    "Traversal Bar",
  ];

  const defense_select = ["Yes", "No"];

  const submitMatch = () => {
    Axios.post(`http://${port}:3002/putMatchBot`, {
      match_id: matchID,
      team_number: teamNumber,
      auto_Balls_shot: autoBallsShot,
      auto_Balls_success: autoBallsSuccess,
      teleop_Balls_shot: teleopBallsShot,
      teleop_Balls_success: teleopBallsSucces,
      was_Defense: wasDefenseBot,
      climb_height: climbHeight,
      climb_time: timeToClimb,
      went_To_Enemy: wentToEnemySide,
      notes: notes,
    }).then(() => {});
    window.location.href = `http://${port}:3000/`;
  };

  const [matchList, setMatchList] = useState([]);
  useEffect(() => {
    const getTeam = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getMatchList`
      );
      setMatchList(post);
    };
    getTeam();
  }, []);
  const [matchInfo, setMatchInfo] = useState([]);
  const addTeamController = (props) => {
    const addTeam = document.getElementsByClassName("teamStats")[0];
    addTeam.style.display = "block";
    Axios.get(`http://${port}:3002/getOneMatch/${props.match_id}`).then((res) =>
      setMatchInfo(res.data)
    );
  };

  const [getTeamName, setGetTeamName] = useState([]);
  const addStatsController = (props) => {
    setTeamNumber(props);
    const statsToDisplay = document.getElementsByClassName("statsToDisplay")[0];
    statsToDisplay.style.display = "block";
    Axios.get(`http://${port}:3002/getTeamFromMatchSelect/${props}`).then(
      (res) => {
        setGetTeamName(res.data);
      }
    );
  };
  return (
    <>
      <br />
      <div
        className="container d-flex"
        style={{
          backgroundColor: "rgb(245, 245, 245)",
          marginTop: "-42px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div className="row">
          {" "}
          <div className="col-1">
            <i
              class="fa-regular fa-plus"
              onClick={() => addTeamController({ match_id: matchID })}
            ></i>
          </div>
          <div className="col-8">
            <small
              className=""
              onClick={() => addTeamController({ match_id: matchID })}
            >
              Select Match{" "}
            </small>
          </div>
          <div className="col-2">
            <small>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setMatchID(e.target.value);
                }}
                style={{ marginLeft: "-50px" }}
              >
                <option value="0"> Select Match</option>
                {matchList.map((value, key) => {
                  if (value.match_type === 0) {
                    value.match_type = "Qualifier";
                  } else if (value.match_type === 1) {
                    value.match_type = "Playoff";
                  } else if (value.match_type === 2) {
                    value.match_type = "Practice";
                  }
                  return (
                    <>
                      <option value={value.id}>
                        {value.match_type}: {value.match_number}
                      </option>
                    </>
                  );
                })}
              </select>
            </small>
          </div>
        </div>
      </div>{" "}
      <div className="container teamStats" style={{ display: "none" }}>
        {matchInfo.map((value, key) => {
          return (
            <>
              <div className="row">
                <div className="col-3">Blue:</div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.blue_1)}
                >
                  {value.blue_1}
                </div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.blue_2)}
                >
                  {value.blue_2}
                </div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.blue_3)}
                >
                  {value.blue_3}
                </div>
              </div>
              <div className="row">
                <div className="col-3">Red</div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.red_1)}
                >
                  {value.red_1}
                </div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.red_2)}
                >
                  {value.red_2}
                </div>
                <div
                  className="col-2"
                  onClick={() => addStatsController(value.red_3)}
                >
                  {value.red_3}
                </div>
              </div>
            </>
          );
        })}
        <br />
        {/* <br />
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-1">
              <i
                class="fa-regular fa-plus"
                onClick={() => addStatsController(matchNumber)}
              ></i>
            </div>
            <div className="col-8">
              <small
                className=""
                onClick={() => addStatsController(matchNumber)}
              >
                Team to Add Statistics{" "}
              </small>
            </div>
            <div className="col-2">
              <small>
                <select
                  name=""
                  id=""
                  onChange={(e) => setMatchNumber(e.target.value)}
                  style={{ marginLeft: "-50px" }}
                >
                  <option value="0">Select Team</option>
                  {teamChooseList.map((value, key) => {
                    return <option value={value.title}>{value.title}</option>;
                  })}
                </select>
              </small>
            </div>
          </div>
        </div> */}
      </div>
      {/* SEPERATION */}
      <div className="container statsToDisplay" style={{ display: "none" }}>
        <br />
        <u>
          <small style={{ fontSize: "13px" }}>Basic Info:</small>
        </u>

        <div className="row">
          <div className="col-4" style={{ fontSize: "15px" }}>
            {" "}
            Team Number:
          </div>
          <div className="col-4">{teamNumber}</div>
        </div>
        <br />
        <div className="row">
          <div className="col-4" style={{ fontSize: "15px" }}>
            {" "}
            Team Name:
          </div>
          {getTeamName.map((values, key) => {
            return <div className="col-4">{values.team_name}</div>;
          })}
        </div>
        <br />
        <u>
          <small style={{ fontSize: "13px" }}>Autonomous:</small>{" "}
        </u>
        {auto.map((val, key) => {
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
                      style={{
                        height: "30px",
                        marginTop: "-5px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <br />
            </>
          );
        })}
        <u>
          <small style={{ fontSize: "13px" }}>Teleop:</small>{" "}
        </u>
        {teleop.map((val, key) => {
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
                      style={{
                        height: "30px",
                        marginTop: "-5px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <br />
            </>
          );
        })}

        <u>
          <small style={{ fontSize: "13px" }}>Climb & Other</small>
        </u>
        <div className="row">
          <div className="col-4">Climb Level</div>
          <div className="col-4">
            <select
              name=""
              id=""
              style={{ width: "215px" }}
              onChange={(e) => setClimbHeight(e.target.value)}
            >
              <option value="0"> Select Value</option>
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
        {other.map((val, key) => {
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
                      style={{
                        height: "30px",
                        marginTop: "-5px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <br />
            </>
          );
        })}
        <div className="row">
          <div className="col-4">Defense Bot?</div>
          <div className="col-4">
            {" "}
            <select
              name=""
              id=""
              style={{ width: "215px" }}
              onChange={(e) => setWasDefenseBot(e.target.value)}
            >
              <option value="0"> Select Value</option>
              {defense_select.map((value, key) => {
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
          <div className="col-4">Enemy Side</div>
          <div className="col-4">
            {" "}
            <select
              name=""
              id=""
              style={{ width: "215px" }}
              onChange={(e) => setWentToEnemySide(e.target.value)}
            >
              <option value="0"> Select Value</option>
              {enemySide_select.map((value, key) => {
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
        <button
          className="submit btn btn-primary"
          type="button"
          style={{ marginLeft: "20px" }}
          onClick={submitMatch}
        >
          Add Team {teamNumber}
        </button>
        <br />

        <br />
      </div>
    </>
  );
}
export default Scouting;
