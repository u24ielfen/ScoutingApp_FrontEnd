import React from "react";
import "../CSS/Robotics.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const port = "192.168.68.151";

  const redirect = (link) => {
    window.location.href = `http://${port}:3000/${link}`;
  };

  return (
    <div
      className="container header_background"
      style={{ overflow: "hidden", color: "black" }}
    >
      <div className="d-flex flex-sm-row flex-column justify-content-between">
        <span className="d-flex">
          {props.link && (
            <NavLink
              to={`${props.link}`}
              onClick={() => redirect("")}
              style={{ fontSize: "25px", marginTop: "4%", color: "black" }}
            >
              <div className="" style={{ width: "50px" }}>
                <i
                  className="fa-solid fa-chevron-left"
                  style={{ color: "black" }}
                ></i>
              </div>
            </NavLink>
          )}
          {props.link != null ? (
            <span
              className="row align-items-center"
              style={{ width: "70%", height: "10vh" }}
            >
              <h5
                className="mt-3 Nav"
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                {props.name}
              </h5>
            </span>
          ) : (
            <span
              className="row align-items-center"
              style={{ width: "100%", height: "10vh" }}
            >
              <h5
                className="mt-3 Nav"
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                {props.name}
              </h5>
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

export default Header;
