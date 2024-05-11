import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider.js";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthContext must be used inside of the AuthContextProvider!"
    );
  }

  return context;
};

export default useAuth;
