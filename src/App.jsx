import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home.jsx";
import Room from "./pages/Room/index.jsx";
import Booking from "./pages/Booking/index.jsx";
import NotFound from "./pages/NotFound/index.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/room/:roomType" element={<Room />} />
            <Route exact path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </React.Fragment>
    </QueryClientProvider>
  );
}

export default App;
