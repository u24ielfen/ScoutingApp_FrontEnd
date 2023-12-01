import React, { useState, useEffect } from "react";
import Axios from "axios";
function Main() {
  const port = "localhost";

  const [robotList, setRobotList] = useState([]);
  const [autoSuccess, setAutoSuccess] = useState([]);
  const [autoShot, setAutoShot] = useState([]);
  const [currentPress, setCurrentPress] = useState(0);
  useEffect(() => {
    const getRoboticsList = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getAverageStats`
      );
      console.log(post);
      setRobotList(post);
    };
    getRoboticsList();
  }, []);

  const getAverageAutoBallSuccess = async (props) => {
    const { data: post } = await Axios.get(
      `http://${port}:3002/getAverageAutoBallSuccess/${props}`
    );
    setAutoSuccess(post[0]["AVG(auto_Balls_success)"]);
  };
  const getAverageAutoBallShot = async (props) => {
    const { data: post } = await Axios.get(
      `http://${port}:3002/getAverageAutoBallShot/${props}`
    );
    setAutoShot(post[0]["AVG(auto_Balls_shot)"]);
  };

  const moreInfoAppear = (props) => {
    console.log(props.team_num);
    getAverageAutoBallShot(props.team_num);
    const moreInfo = document.getElementsByClassName("moreInfo_appear")[
      props.array_num
    ];
    const arrow = document.getElementsByClassName("rotating_arrow")[
      props.array_num
    ];
    const stats_title = document.getElementsByClassName("showStats_Title")[
      props.array_num
    ];
    if (moreInfo && moreInfo.style.display === "none") {
      moreInfo.style.display = "block";
      arrow.style.transform = "rotate(90deg)";
      stats_title.innerHTML = "Hide Stats";
    } else if (moreInfo) {
      moreInfo.style.display = "none";
      arrow.style.transform = "rotate(0deg)";
      stats_title.innerHTML = "Show Stats";
    }
  };
  return (
    <div>
      {robotList.map((value, key) => {
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
        return (
          <>
            <br />

            <div
              className="container border rounded "
              style={{
                width: "80%",
                maxWidth: "400px",
                boxShadow: "2px 2px 2px 0px rgba(0,0,0,0.3)",
              }}
            >
              <h4 className="mt-2">
                Team {value.team_number} |
                <span style={{ textSize: "13px" }}> {value.team_name}</span>
              </h4>
              <small
                className="moreInfo"
                onClick={() =>
                  moreInfoAppear({
                    array_num: key,
                    team_num: value.team_number,
                  })
                }
              >
                {" "}
                <span className="showStats_Title">Show Stats{"   "}</span>
                <i
                  class="fa-sharp fa-solid fa-angle-right rotating_arrow"
                  style={{
                    transform: "rotate(0deg)",
                    marginLeft: "10px",
                  }}
                ></i>
                <div className="moreInfo_appear" style={{ display: "none" }}>
                  <div className="row">
                    <small>
                      These are <b>averages</b>
                    </small>
                    <div className="col-4">
                      Auto Points:
                      <br />
                      Teleop Points:
                      <br />
                      Shoot Level:
                      <br />
                      Climb Level:
                      <br />
                      DriveTrain:
                      <br />
                      Defense Bot:
                      <br />
                    </div>
                    <br />
                    <div className="col-4 mb-2">
                      {autoSuccess}
                      <br />
                      {autoShot}
                      <br />
                      {value.teleop_points}
                      <br />
                      {value.shoot_height}
                      <br />
                      {value.climb_level}
                      <br />
                      {value.drive_train}
                      <br />
                      {value.is_DefenseBot}
                    </div>
                  </div>
                </div>
              </small>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Main;
