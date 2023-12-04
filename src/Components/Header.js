import React, { useState } from "react";
import "../CSS/Robotics.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [isLinkEnabled, setIsLinkEnabled] = useState(true);
  const port = "10.70.1.129";

  const handleLinkClick = () => {
    if (isLinkEnabled) {
      setIsLinkEnabled(false);
      setTimeout(() => {
        setIsLinkEnabled(true);
      }, 5000);
    }
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
              style={{ fontSize: "25px", marginTop: "4%", color: "black" }}
              onClick={handleLinkClick}
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
