import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function Games() {
  const port = "10.70.1.129";

  const [matchList, setMatchList] = useState([]);
  const [match_type, setmatch_type] = useState([]);
  useEffect(() => {
    const getMatchList = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getMatchList`
      );
      setMatchList(post);
    };
    getMatchList();
  }, []);

  const [checkboxValues, setCheckboxValues] = useState({
    quals: true,
    playoffs: true,
    practice: true,
  });

  useEffect(() => {
    const checkBoxes = () => {
      const quals = document.getElementsByClassName("Qualifier");
      const playoff = document.getElementsByClassName("Playoff");
      const practice = document.getElementsByClassName("Practice");
      if (checkboxValues.quals) {
        Array.from(quals).forEach((element) => {
          element.style.display = "block";
        });
      } else {
        Array.from(quals).forEach((element) => {
          element.style.display = "none";
        });
      }
      if (checkboxValues.playoffs) {
        Array.from(playoff).forEach((element) => {
          element.style.display = "block";
        });
      } else {
        Array.from(playoff).forEach((element) => {
          element.style.display = "none";
        });
      }
      if (checkboxValues.practice) {
        Array.from(playoff).forEach((element) => {
          element.style.display = "block";
        });
      } else {
        Array.from(practice).forEach((element) => {
          element.style.display = "none";
        });
      }
    };

    checkBoxes();
  }, [checkboxValues]);

  return (
    <div className="container">
      <small>Press on a team number to see its full stats</small>
      <br />
      <br />
      <small
        className=""
        style={{
          display: "inline-block",
          width: "100%",
          alignContent: "center",
        }}
      >
        Currently Displayed:
      </small>
      <div className="d-flex flex-sm-row flex-column justify-content-between">
        <span className="d-flex mr-2 justify-content-center">
          <span class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              defaultChecked
              onClick={() =>
                setCheckboxValues((prevState) => ({
                  ...prevState,
                  quals: !prevState.quals,
                }))
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Quals
            </label>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              defaultChecked
              onClick={() =>
                setCheckboxValues((prevState) => ({
                  ...prevState,
                  playoffs: !prevState.playoffs,
                }))
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Playoffs
            </label>
          </span>
          &nbsp; &nbsp; &nbsp;
          <span class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              defaultChecked
              onClick={() =>
                setCheckboxValues((prevState) => ({
                  ...prevState,
                  practice: !prevState.practice,
                }))
              }
            />
            <label class="form-check-label" for="flexCheckDefault">
              Practice
            </label>
          </span>
        </span>
      </div>
      <br />
      {matchList.map((value, key) => {
        if (value.match_type === 0) {
          value.match_type = "Qualifier";
        } else if (value.match_type === 1) {
          value.match_type = "Playoff";
        } else if (value.match_type === 2) {
          value.match_type = "Practice";
        }
        return (
          <div className={value.match_type}>
            <h6>
              {value.match_type}: {value.match_number}
            </h6>
            <div className="container">
              <div className="row">
                <div className="col-3">Blue:</div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue_1}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue_1}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue_2}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue_2}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.blue_3}`}
                    style={{ textDecoration: "none" }}
                  >
                    {value.blue_3}
                  </NavLink>
                </div>
              </div>
              <div className="row">
                <div className="col-3">Red:</div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red_1}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red_1}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red_2}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red_2}
                  </NavLink>
                </div>
                <div className="col-2">
                  <NavLink
                    to={`/team/${value.red_3}`}
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    {value.red_3}
                  </NavLink>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Games;
