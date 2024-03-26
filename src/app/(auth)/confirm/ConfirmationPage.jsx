"use client";
import { DisplayLoadingAndErrors } from "../../../helpers/components/DisplayLoading";
import { useEffect } from "react";
import { handleRequestSubmit } from "../../../helpers/functions/handleSubmit";
import { useAuth } from "../../../Contexts/Auth/AuthProvider";
import { useToastContext } from "../../../Contexts/ToastLoading/ToastLoadingProvider";

export default function ConfirmationPage({ token }) {
  const { setLoading } = useToastContext();
  const { setRedirect } = useAuth();
  useEffect(() => {
    async function handleConfirmation() {
      const response = await handleRequestSubmit(
        {},
        setLoading,
        `auth/confirm/${token}`,
        false,
        "Confirming...",
      );
      if (response.redirect) {
        setRedirect(true);
        // router.push(response.user.role.toLowerCase());
      }
    }

    handleConfirmation();
  }, []);

  return <DisplayLoadingAndErrors loading={loading} />;
}
