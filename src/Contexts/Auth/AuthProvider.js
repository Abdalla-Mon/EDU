"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../../Urls/urls";
import { useDispatch } from "react-redux";
import handleAuthState from "@/helpers/functions/handleAuthState";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${apiUrl}auth/state`);
      const data = await response.json();
      handleAuthState(
        dispatch,
        data.auth,
        data.role,
        data.user,
        data.emailConfirmed,
      );
    }

    fetchData();
  }, [redirect]);

  return (
    <AuthContext.Provider value={{ setRedirect, redirect }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
