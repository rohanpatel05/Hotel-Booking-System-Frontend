// import { useEffect } from "react";
// import { useRefresh } from "./useRefresh.js";
// import useAuth from "./useAuth";

// export const useAutoRefreshToken = () => {
//   const { authState, signOut } = useAuth();
//   const refresh = useRefresh();

//   useEffect(() => {
//     let timeoutId;

//     if (
//       authState.accessToken &&
//       authState.accessTokenExpiration &&
//       authState.refreshToken &&
//       authState.refreshTokenExpiration
//     ) {
//       const currentTime = Date.now();
//       const expirationTime = authState.accessTokenExpiration;
//       const refreshExpirationTime = authState.refreshTokenExpiration;
//       const timeUntilExpiration = expirationTime - currentTime;
//       const timeUntilRefreshExpiration = refreshExpirationTime - currentTime;

//       const refreshBuffer = 120000; // 2 minutes buffer (refresh 2 min before token expires)
//       const refreshTime = timeUntilExpiration - refreshBuffer;

//       console.log("Current Time:", currentTime);
//       console.log("Access Token Expiration Time:", expirationTime);
//       console.log("Refresh Token Expiration Time:", refreshExpirationTime);
//       console.log("Time Until Expiration:", timeUntilExpiration);
//       console.log("Time Until Refresh Expiration:", timeUntilRefreshExpiration);
//       console.log("Refresh Time (with buffer):", refreshTime);

//       if (timeUntilRefreshExpiration > 0) {
//         if (refreshTime > 0) {
//           timeoutId = setTimeout(() => {
//             console.log("Refreshing access token...");
//             // refresh.mutate(authState.refreshToken);
//             refresh.mutate(authState.refreshToken, {
//               onError: (error) => {
//                 console.error("Failed to refresh token:", error);
//                 signOut();
//                 alert("Your session has expired. Please log in again.");
//               }
//             });
//           }, refreshTime);
//         } else {
//           refresh.mutate(authState.refreshToken);
//         }

//       } else {
//         signOut();
//         alert("Your session has expired. Please log in again.");
//       }
//     }

//     return () => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//     };
//   }, [authState.accessToken, authState.accessTokenExpiration, refresh]);

//   return null;
// };

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

      console.log("Current Time:", currentTime);
      console.log("Access Token Expiration Time:", expirationTime);
      console.log("Refresh Token Expiration Time:", refreshExpirationTime);
      console.log("Time Until Expiration:", timeUntilExpiration);
      console.log("Time Until Refresh Expiration:", timeUntilRefreshExpiration);
      console.log("Refresh Time (with buffer):", refreshTime);

      if (timeUntilRefreshExpiration > 0) {
        if (refreshTime > 0) {
          timeoutId = setTimeout(() => {
            console.log("Refreshing access token...");
            refresh.mutate(authState.refreshToken, {
              onError: (error) => {
                console.error("Failed to refresh token:", error);
                signOut();
                alert("Your session has expired. Please log in again.");
              },
            });
          }, refreshTime);
        } else {
          console.log("Token already expired, refreshing immediately...");
          refresh.mutate(authState.refreshToken, {
            onError: (error) => {
              console.error("Failed to refresh token:", error);
              signOut();
              alert("Your session has expired. Please log in again.");
            },
          });
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
    authState.accessToken,
    authState.accessTokenExpiration,
    authState.refreshToken,
    authState.refreshTokenExpiration,
    refresh,
    signOut,
  ]);

  return null;
};
