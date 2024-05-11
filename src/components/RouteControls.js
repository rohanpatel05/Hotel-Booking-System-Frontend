import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus.js";
import PropTypes from "prop-types";

export const RequireAuth = () => {
  const isAuthenticated = useAuthStatus();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export const HideAuth = ({ children, redirectPath = "/" }) => {
  const isAuthenticated = useAuthStatus();

  if (isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

HideAuth.propTypes = {
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};
