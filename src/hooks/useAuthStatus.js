import useAuth from "./useAuth.js";

export const useAuthStatus = () => {
  const { authState } = useAuth();
  return !!authState.user;
};
