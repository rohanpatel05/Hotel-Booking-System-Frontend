import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route component={NotFound} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
