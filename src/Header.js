import React from "react";
import "./Robotics.css";
function Header(props) {
  return (
    <div className="container header_background">
      <div className="row " style={{ height: "10vh", width: "100%" }}>
        <h5
          className="mt-3 Nav"
          style={{
            textAlign: "center",
            marginLeft: "-80px",
          }}
        >
          {props.name}
        </h5>
      </div>
    </div>
  );
}

export default Header;
