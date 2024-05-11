import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  accessToken: null,
  accessTokenExpiration: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        accessTokenExpiration: action.payload.accessTokenExpiration,
        refreshToken: action.payload.refreshToken,
        refreshTokenExpiration: action.payload.refreshTokenExpiration,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        accessToken: null,
        accessTokenExpiration: null,
        refreshToken: null,
        refreshTokenExpiration: null,
        user: null,
      };
    case "REFRESH_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        accessTokenExpiration: action.payload.accessTokenExpiration,
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

  const refreshAccessToken = (data) => {
    dispatch({ type: "REFRESH_ACCESS_TOKEN", payload: data });
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
