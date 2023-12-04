import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 42, angular: 42, vue: 54 },
  { name: "2019", react: 51, angular: 41, vue: 54 },
  { name: "2020", react: 60, angular: 37, vue: 28 },
  { name: "2021", react: 51, angular: 31, vue: 27 },
  { name: "2022", react: 95, angular: 44, vue: 49 },
];

const port = "10.70.1.129";
function Rank(props) {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team1Stats, setTeam1Stats] = useState([]);
  const [team2Stats, setTeam2Stats] = useState([]);
  const searchTeam1 = async () => {
    const { data: post } = await axios.get(
      `http://${port}:3002/getStats/${team1}`
    );
    setTeam1Stats(post);
    console.log(post);
    const autoPoints = post.map((item) => item.auto_points);
    console.log(autoPoints);
  };
  //make an array data equal to the "auto_points" values from the team1Stats array

  const searchTeam2 = async () => {
    const { data: post } = await axios.get(
      `http://${port}:3002/getStats/${team2}`
    );
    setTeam2Stats(post);
    const autoPoints = post.map((item) => item.auto_points);
    console.log(autoPoints);
    console.log(post);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        marginTop: "-8px",
        paddingBottom: "20px",
      }}
    >
      <br />
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2">
          <div className="input-group">
            <input
              type="text"
              className="input-control align-middle"
              style={{ width: "100px" }}
              placeholder="Team #1"
              onChange={(e) => {
                setTeam1(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-2">
          <div className="input-group">
            <input
              type="text"
              className="input-control align-middle"
              placeholder="Team #2"
              style={{ width: "100px" }}
              onChange={(e) => {
                setTeam2(e.target.value);
              }}
            />
          </div>
        </div>{" "}
        <div className="col-2"></div>
        <div className="col-2">
          <input
            type="submit"
            className="btn bg-primary"
            value="Go"
            onClick={() => {
              searchTeam1();
            }}
            style={{ height: "34px" }}
          />
        </div>
      </div>
      {team1Stats.map((val) => {
        for (var i = 0; i < team1Stats.length; i++) {}
        return (
          <div>
            <h1>{val.team_number}</h1>
            <h1>{val.auto_Balls_shot}</h1>
            <h1>{val.auto_Balls_success}</h1>
            <h1>{val.endgame_points}</h1>
            <h1>{val.total_points}</h1>
          </div>
        );
      })}
      <LineChart width={350} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#2196F3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export default Rank;
