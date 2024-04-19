import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout.js";

import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route component={NotFound} />
          </Routes>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
