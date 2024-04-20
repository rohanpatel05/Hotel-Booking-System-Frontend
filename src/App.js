import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index.js";
import GuestReview from "./pages/GuestReview/index.js";
import NotFound from "./pages/NotFound.js";
import AboutUS from "./pages/AboutUs/index.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/review" element={<GuestReview />} />
          <Route exact path="/aboutus" element={<AboutUS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
