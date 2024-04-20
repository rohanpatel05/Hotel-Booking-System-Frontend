import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index.js";
import GuestReview from "./pages/GuestReview/index.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/review" Component={GuestReview} />
          <Route component={NotFound} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
