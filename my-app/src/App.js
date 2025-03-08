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
const ProgressBar = lazy(() => import("./Component/ProgressBar/ProgressBar"));
const Password = lazy(() =>
  import("./Component/PasswordValidation/PasswordValidation")
);
const MovieCounter = lazy(() =>
  import("./Component/Moviecounter/MovieCounter")
);
const SearchCustomer = lazy(() =>
  import("./Component/CustomerSearch/SearchCustomer")
);

const ContactNumber = lazy(() =>
  import("./Component/ContactNumber/ContactNumber")
);

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
            <a href="/traffic-signal" rel="noopener noreferrer">
              1.Traffic Signal
            </a>
          </li>
          <li>
            <a href="/Calculator" rel="noopener noreferrer">
              2.Calculator
            </a>
          </li>
          <li>
            <a href="/ToDoList" rel="noopener noreferrer">
              3.ToDoList
            </a>
          </li>
          <li>
            <a href="/ProgressBar" rel="noopener noreferrer">
              4.Progress Bar
            </a>
          </li>
          <li>
            <a href="/Password" rel="noopener noreferrer">
              5.Password
            </a>
          </li>
          <li>
            <a href="/MovieCounter" rel="noopener noreferrer">
              5.MovieCounter
            </a>
          </li>
          <li>
            <a href="/ContactNumber" rel="noopener noreferrer">
              6.ContactNumber
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

        <Route
          path="/ProgressBar"
          element={
            <Suspense fallback={<div>Loading Progress Bar..</div>}>
              <ProgressBar />
            </Suspense>
          }
        />
        <Route
          path="/Password"
          element={
            <Suspense fallback={<div>Loading Password Validation..</div>}>
              <Password />
            </Suspense>
          }
        />
        <Route
          path="/MovieCounter"
          element={
            <Suspense fallback={<div>Loading MovieCounter Validation..</div>}>
              <MovieCounter />
            </Suspense>
          }
        />
        <Route
          path="/SearchCustomer"
          element={
            <Suspense
              fallback={<div>Loading Search Customer Validation.....</div>}
            >
              <SearchCustomer />
            </Suspense>
          }
        />
        <Route
          path="/ContactNumber"
          element={
            <Suspense fallback={<div>Loading ContactNumber.....</div>}>
              <ContactNumber />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
