"use client";
import { useEffect } from "react";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import { useAuth } from "../../../Contexts/Auth/AuthProvider";
import { useToastContext } from "../../../Contexts/ToastLoading/ToastLoadingProvider";

export default function ConfirmationPage({ token }) {
  const { setLoading } = useToastContext();
  const { isLoggedIn, setRedirect, redirect } = useAuth();
  // if (isLoggedIn) return "You are already logged in";
  useEffect(() => {
    async function handleConfirmation() {
      if (redirect) {
        // router.pus
      }
      if (redirect) return;
      const response = await handleRequestSubmit(
        {},
        setLoading,
        `auth/confirm/${token}`,
        false,
        "Confirming...",
        setRedirect,
      );
      console.log(response);
      // if (response.redirect) {
      //   setRedirect(true);
      //   // router.push(response.user.role.toLowerCase());
      // }
    }

    handleConfirmation();
  }, []);

  return "Confirming...";
}
