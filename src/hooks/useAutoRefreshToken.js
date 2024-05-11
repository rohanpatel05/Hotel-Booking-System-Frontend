import { useEffect } from "react";
import { useRefresh } from "./useRefresh.js";
import useAuth from "./useAuth";

export const useAutoRefreshToken = () => {
  const { authState, signOut } = useAuth();
  const refresh = useRefresh();

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
            refresh.mutate(authState.refreshToken);
          }, refreshTime);
        } else {
          refresh.mutate(authState.refreshToken);
        }
      } else {
        signOut();
        alert("Your session has expired. Please log in again.");
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [authState.accessToken, authState.accessTokenExpiration, refresh]);

  return null;
};
