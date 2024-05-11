import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Room, Booking, SignUp, SignIn, NotFound } from "./pages/index.js"
import { HideAuth } from "./components/RouteControls.js"
import { AuthProvider } from "./contexts/AuthProvider.js"
import { useAutoRefreshToken } from "./hooks/useAutoRefreshToken.js";

const queryClient = new QueryClient();

const AuthenticatedApp = () => {
  useAutoRefreshToken(); 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/room/:roomType" element={<Room />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route exact path="/signup" element={
          <HideAuth>
            <SignUp />
          </HideAuth>
        } />
        <Route exact path="/signin" element={
          <HideAuth>
            <SignIn />
          </HideAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthenticatedApp />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
