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

const port = "10.70.1.129";
function Compare(props) {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [teamStats, setTeamStats] = useState([]);
  const searchTeam1 = async () => {
    const { data: post } = await axios.get(
      `http://${port}:3002/getStats/${team1}/${team2}`
    );
    setTeamStats(post);
    console.log(post);
  };
  //make an array data equal to the "auto_points" values from the team1Stats array

  return (
    <div
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        marginTop: "-8px",
        paddingBottom: "20px",
        overflowX: "hidden",
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
      {teamStats && (
        <LineChart width={350} height={300} data={teamStats}>
          <Line
            type="monotone"
            dataKey={team1}
            stroke="#2196F3"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey={team2}
            stroke="#F44236"
            strokeWidth={3}
          />

          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="match_number" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      )}
    </div>
  );
}

export default Compare;
