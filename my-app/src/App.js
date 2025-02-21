import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { Link } from "react-router-dom";
import logo from "./logo.svg";
const TrafficSignal = lazy(() =>
  import("./Component/TrafficSignal /TrafficSignal")
);
const Calculator = lazy(() => import("./Component/Calculator/Calculator"));
const ToDoList = lazy(() => import("./Component/ToDoList/ToDoList"));

const Home = () => {
  return (
    <div className="App">
      <header>
        <h2>React Projects</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <ul style={{ listStyle: "none", fontSize: "2rem" }}>
          <li>
            <a href="/traffic-signal" target="_blank" rel="noopener noreferrer">
              1.Traffic Signal
            </a>
          </li>
          <li>
            <a href="/Calculator" target="_blank" rel="noopener noreferrer">
              2.Calculator
            </a>
          </li>
          <li>
            <a href="/ToDoList" target="_blank" rel="noopener noreferrer">
              3.ToDoList
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/traffic-signal"
          element={
            <Suspense fallback={<div>Loading Traffic Signal...</div>}>
              <TrafficSignal />
            </Suspense>
          }
        />
        <Route
          path="/Calculator"
          element={
            <Suspense fallback={<div>Loading Calculator..</div>}>
              <Calculator />
            </Suspense>
          }
        />
        <Route
          path="/ToDoList"
          element={
            <Suspense fallback={<div>Loading Calculator..</div>}>
              <ToDoList />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
