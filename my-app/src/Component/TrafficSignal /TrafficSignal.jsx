import React, { useState, useEffect } from "react";
import "./TrafficSignal.css";

// TrafficSignal Component
const TrafficSignalBoxGroup = ({ id, initialLight }) => {
  const [light, setLight] = useState(initialLight);

  // Use useEffect to change the light every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      switch (light) {
        case "red":
          setLight("green");
          break;
        case "green":
          setLight("yellow");
          break;
        case "yellow":
          setLight("red");
          break;
        default:
          setLight("red");
      }
    }, 4000); // Change the light every 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [light]);

  return (
    <div className="traffic-signal-box">
      <h3>Signal Box {id}</h3>
      <div className="traffic-signal">
        <div className={`signal red ${light === "red" ? "on" : ""}`}></div>
        <div
          className={`signal yellow ${light === "yellow" ? "on" : ""}`}
        ></div>
        <div className={`signal green ${light === "green" ? "on" : ""}`}></div>
      </div>
    </div>
  );
};

// Main TrafficSignalBoxGroup Component
const TrafficSignal = () => {
  return (
    <div className="traffic-signal-group">
      <TrafficSignalBoxGroup id={1} initialLight="red" />
      <TrafficSignalBoxGroup id={2} initialLight="red" />
      <TrafficSignalBoxGroup id={3} initialLight="red" />
    </div>
  );
};

export default TrafficSignal;
