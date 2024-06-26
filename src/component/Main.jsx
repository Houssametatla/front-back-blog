import React from "react";
import hero from "../assets/hero-asset.png";

export default function Main() {
  return (
    <div className="main" style={{}}>
      <div className="start">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "-160px",
            gap: "20px",
          }}
        >
          <div className="human">
            <h1>Human</h1>
            <h1>stories & ideas</h1>
          </div>
          <p>A place to read, write, and deepen your understanding</p>
          <button className="get-started">Get started</button>
        </div>
      </div>
      <div className="image">
        <img src={hero} />
      </div>
    </div>
  );
}
