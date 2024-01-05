import React from "react";
// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = () => {
  const value = 190;
  return (
    <div
      style={{ padding: "40px 40px 40px 40px", transform: "rotate(-135deg)" }}
    >
      {value && (
        <div style={{ position: "relative" }}>
          <svg style={{ height: 0 }}>
            <defs>
              <radialGradient
                id={"innerGradient"}
                style={{ height: 0, transform: "rotate(-20deg)" }}
                cx="60%"
                cy="80%"
                r="80%"
                fx="50%"
                fy="10%"
              >
                <stop offset="10%" stopColor="#06741C" />
                <stop offset="60%" stopColor="#B0A718" />
                <stop offset="100%" stopColor="#BB1606" />
              </radialGradient>
            </defs>
          </svg>
          <CircularProgressbar
            value={value}
            maxValue={200}
            circleRatio={0.75}
            styles={{
              path: {
                stroke: `url(#${"innerGradient"})`,
                height: "100%",
              },
              trail: {
                stroke: "#282828",
              },
            }}
          ></CircularProgressbar>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(0%, 50%)" ,rotate:"136deg"}}>
          <span style={{ fontSize: "35px", fontWeight: "bold", color: "#fff" }}>{value}</span>
          <br/>
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#ABABAB" }}>MS</span>
        </div>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translate(10%, 105%)" ,rotate:"136deg"}}>
          <span style={{ fontSize: "25px", fontWeight: "bold", color: "#ABABAB" }}>0</span>
        </div>
        <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translate(470%, 120%)" ,rotate:"136deg"}}>
          <span style={{ fontSize: "25px", fontWeight: "bold", color: "#ABABAB" }}>200</span>
        </div>
        </div>
      )}
    </div>
  );
};

export default Chart;
