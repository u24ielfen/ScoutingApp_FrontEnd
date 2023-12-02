import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function TeamStats() {
  const port = "192.168.68.151";

  const params = useParams("/teams/:id");
  const { id } = params;
  const [preTeam, setPreTeam] = useState([]);
  const [matchTeam, setMatchTeam] = useState([]);
  useEffect(() => {
    const getPreTeam = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getPreTeam/${id}`
      );
      setPreTeam(post);
    };
    const getMatchTeam = async () => {
      const { data: post } = await Axios.get(
        `http://${port}:3002/getMatchTeam/${id}`
      );
      setMatchTeam(post);
    };
    getPreTeam();
    getMatchTeam();
  }, []);
  return (
    <div>
      <div className="container">
        {preTeam.map((value, key) => {
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
          const preScout = [
            { title: "Auto Points:", use: value.auto_points },
            { title: "Teleop Points", use: value.teleop_points },
            { title: "Shoot Heights", use: value.shoot_height },
            { title: "Climb Level", use: value.climb_level },
            { title: "Drive Train", use: value.drive_train },
            { title: "Defense Bot?", use: value.is_DefenseBot },
          ];
          return (
            <>
              <h4 className="mt-2">
                Team {value.team_number} |
                <span style={{ textSize: "13px" }}> {value.team_name}</span>
              </h4>
              <div className="row">
                <div className="col-10">
                  <h6>Prescouting:</h6>
                </div>
                <div className="col-1">
                  <i
                    class="fa-regular fa-pen-to-square"
                    onClick={() =>
                      (window.location.href = `http://${port}:3000/editTeam/${value.team_number}`)
                    }
                  ></i>
                </div>
              </div>
              <table className="table">
                <tbody>
                  {preScout.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.title}</td>
                        <td>{value.use}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })}
      </div>
      <div className="container">
        <h6>Match Scouting:</h6>
        {matchTeam.map((value, key) => {
          if (value.was_Defense === 0) {
            value.was_Defense = "Yes";
          } else {
            value.was_Defense = "No";
          }
          if (value.climb_height === 0) {
            value.climb_height = "None";
          } else if (value.climb_height === 1) {
            value.climb_height = "Low Bar";
          } else if (value.climb_height === 2) {
            value.climb_height = "Mid Bar";
          } else if (value.climb_height === 3) {
            value.climb_height = "High Bar";
          } else if (value.climb_height === 4) {
            value.climb_height = "Traversal Bar";
          }
          if (value.went_To_Enemy === 0) {
            value.went_To_Enemy = "Yes, successfully";
          } else if (value.went_To_Enemy === 1) {
            value.went_To_Enemy = "Yes, unsuccessfully";
          } else {
            value.went_To_Enemy = "No";
          }
          const other = [
            { title: "Climb Height", use: value.climb_height },
            { title: "Climb Time", use: value.climb_time },
            { title: "Defense Bot?", use: value.was_Defense },
            { title: "To Enemy", use: value.went_To_Enemy },
          ];
          const auto = [
            { title: "Balls Shot", use: value.auto_Balls_shot },
            { title: "Successfull", use: value.auto_Balls_success },
          ];
          const teleop = [
            { title: "Balls Shot", use: value.teleop_Balls_shot },
            { title: "Successful", use: value.teleop_Balls_success },
          ];
          return (
            <>
              <p style={{ fontSize: "15px" }}>
                <span style={{ backgroundColor: "rgb(156, 222, 236)" }}>
                  Qualifier #{value.match_number}
                </span>
              </p>
              <table className="table">
                <tbody>
                  <small style={{ fontSize: "12px" }}>
                    <u>
                      <span style={{ backgroundColor: "rgb(223, 244, 249  )" }}>
                        Autonomous
                      </span>
                    </u>
                  </small>
                  {auto.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.title}</td>
                        <td>{value.use}</td>
                      </tr>
                    );
                  })}
                  <small style={{ fontSize: "12px" }}>
                    <u>
                      <span style={{ backgroundColor: "rgb(223, 244, 249  )" }}>
                        Teleop
                      </span>
                    </u>
                  </small>
                  {teleop.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.title}</td>
                        <td>{value.use}</td>
                      </tr>
                    );
                  })}
                  <small style={{ fontSize: "12px" }}>
                    <u>
                      <span style={{ backgroundColor: "rgb(223, 244, 249 )" }}>
                        Other:
                      </span>
                    </u>
                  </small>
                  {other.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.title}</td>
                        <td>{value.use}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TeamStats;
