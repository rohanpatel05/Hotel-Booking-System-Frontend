import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound/index.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        if (error.response) {
          const responseError =
            error.response.data.message || "Unknown error occurred.";
          error.message = responseError;
        } else {
          error.message = "Network error occurred!";
        }
        console.error("Error:", error.message);
      },
    },
    mutations: {
      onError: (error) => {
        if (error.response) {
          const responseError =
            error.response.data.message || "Unknown error occurred.";
          error.message = responseError;
        } else {
          error.message = "Network error occurred!";
        }
        console.error("Error:", error.message);
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </React.Fragment>
    </QueryClientProvider>
  );
}

export default App;
