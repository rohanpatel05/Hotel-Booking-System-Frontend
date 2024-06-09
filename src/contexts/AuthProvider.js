import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { getUserInfo, refreshQuery } from "../services/userService";
import Cookies from "js-cookie";

const refreshInterval = 14 * 60 * 1000; // 14 mins in ms

const initialState = {
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = useCallback((data) => {
    dispatch({ type: "SIGN_IN", payload: data });
  }, []);

  const signUp = useCallback((data) => {
    dispatch({ type: "SIGN_UP", payload: data });
  }, []);

  const signOut = useCallback(async () => {
    dispatch({ type: "SIGN_OUT" });
  }, []);

  const refreshAccessToken = useCallback(async () => {
    try {
      const data = await refreshQuery();

      signIn({ user: data.user });
    } catch (error) {
      console.error("Failed to refresh token:", error);
      signOut();
    }
  }, [signUp, signIn, signOut]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");

      if (accessToken && refreshToken) {
        try {
          const data = await getUserInfo();
          if (data) {
            signIn({ user: data.user });
          }
        } catch (error) {
          console.error("Failed to check auth status:", error);
        }
      }
    };

    checkAuthStatus();
  }, [signIn]);

  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken();
    }, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshAccessToken]);

  return (
    <AuthContext.Provider value={{ authState: state, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
