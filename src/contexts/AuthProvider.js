import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        user: null,
      };
    case "REFRESH_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = (data) => {
    dispatch({ type: "SIGN_IN", payload: data });
  };

  const signUp = (data) => {
    dispatch({ type: "SIGN_UP", payload: data });
  };

  const signOut = () => {
    dispatch({ type: "SIGN_OUT" });
  };

  const refreshAccessToken = (accessToken) => {
    dispatch({ type: "REFRESH_ACCESS_TOKEN", payload: { accessToken } });
  };

  return (
    <AuthContext.Provider
      value={{ authState: state, signIn, signOut, signUp, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
