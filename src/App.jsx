import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Officers from "./pages/Officers";
import About from "./pages/About";
import JobHub from "./pages/JobHub";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-hub" element={<JobHub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
