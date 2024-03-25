"use client";
import { useEffect } from "react";
import { apiUrl } from "../../Urls/urls";
import { useDispatch } from "react-redux";
import handleAuthState from "@/helpers/functions/handleAuthState";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${apiUrl}auth/state`);
      const data = await response.json();
      handleAuthState(
        dispatch,
        data.auth,
        data.role,
        data.user,
        data.emailConfirmed
      );
    }

    fetchData();
  }, []);

  return <>{children}</>;
}
