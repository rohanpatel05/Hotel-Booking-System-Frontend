import { useEffect, useRef } from "react";
import { useRefresh } from "./useRefresh.js";
import useAuth from "./useAuth";

export const useAutoRefreshToken = () => {
  const { authState, signOut } = useAuth();
  const refresh = useRefresh();
  const isRefreshing = useRef(false);

  useEffect(() => {
    let timeoutId;

    if (
      authState.accessToken &&
      authState.accessTokenExpiration &&
      authState.refreshToken &&
      authState.refreshTokenExpiration
    ) {
      const currentTime = Date.now();
      const expirationTime = authState.accessTokenExpiration;
      const refreshExpirationTime = authState.refreshTokenExpiration;
      const timeUntilExpiration = expirationTime - currentTime;
      const timeUntilRefreshExpiration = refreshExpirationTime - currentTime;

      const refreshBuffer = 120000; // 2 minutes buffer (refresh 2 min before token expires)
      const refreshTime = timeUntilExpiration - refreshBuffer;

      if (timeUntilRefreshExpiration > 0) {
        if (refreshTime > 0) {
          timeoutId = setTimeout(() => {
            if (!isRefreshing.current) {
              console.log("Refreshing access token...");
              isRefreshing.current = true;
              refresh.mutate(
                { refreshToken: authState.refreshToken },
                {
                  onError: (error) => {
                    console.error("Failed to refresh token:", error);
                    signOut();
                    alert("Your session has expired. Please log in again.");
                  },
                  onSettled: () => {
                    isRefreshing.current = false;
                  },
                }
              );
            }
          }, refreshTime);
        } else {
          if (!isRefreshing.current) {
            console.log("Token already expired, refreshing immediately...");
            isRefreshing.current = true;
            refresh.mutate(
              { refreshToken: authState.refreshToken },
              {
                onError: (error) => {
                  console.error("Failed to refresh token:", error);
                  signOut();
                  alert("Your session has expired. Please log in again.");
                },
                onSettled: () => {
                  isRefreshing.current = false;
                },
              }
            );
          }
        }
      } else {
        console.log("Refresh token expired, signing out...");
        signOut();
        alert("Your session has expired. Please log in again.");
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [
    authState.accessTokenExpiration,
    authState.refreshTokenExpiration,
    authState.refreshToken,
    refresh,
    signOut,
  ]);

  return null;
};
